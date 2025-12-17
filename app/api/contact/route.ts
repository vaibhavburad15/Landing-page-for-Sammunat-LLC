import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
export const runtime = "nodejs";
import { ContactFormData, ApiResponse } from '@/types'

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = parseInt(process.env.RATE_LIMIT_MAX || '5')
  const window = parseInt(process.env.RATE_LIMIT_WINDOW || '60000') // 1 minute

  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + window })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        } as ApiResponse,
        { status: 429 }
      )
    }

    // Parse request body
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required',
        } as ApiResponse,
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email address',
        } as ApiResponse,
        { status: 400 }
      )
    }

    // Sanitize inputs (basic)
    const sanitizedData = {
      name: body.name.trim().slice(0, 100),
      email: body.email.trim().toLowerCase(),
      subject: body.subject.trim().slice(0, 200),
      message: body.message.trim().slice(0, 2000),
    }

    // Send email if configured
    if (
      process.env.EMAIL_HOST &&
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS
    ) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: parseInt(process.env.EMAIL_PORT || '587'),
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        })

        // Send email to admin
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `New Contact Form Submission: ${sanitizedData.subject}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                  .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
                  .field { margin-bottom: 15px; }
                  .label { font-weight: bold; color: #0ea5e9; }
                  .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>New Contact Form Submission</h2>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">Name:</div>
                      <div class="value">${sanitizedData.name}</div>
                    </div>
                    <div class="field">
                      <div class="label">Email:</div>
                      <div class="value">${sanitizedData.email}</div>
                    </div>
                    <div class="field">
                      <div class="label">Subject:</div>
                      <div class="value">${sanitizedData.subject}</div>
                    </div>
                    <div class="field">
                      <div class="label">Message:</div>
                      <div class="value">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        })

        // Send confirmation email to user
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: sanitizedData.email,
          subject: 'We received your message - Sammunat LLC',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                  .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Thank You for Contacting Us!</h1>
                  </div>
                  <div class="content">
                    <p>Hi ${sanitizedData.name},</p>
                    <p>We've received your message and appreciate you taking the time to reach out to us.</p>
                    <p>Our team will review your inquiry and get back to you within 24 hours.</p>
                    <p>In the meantime, feel free to explore our website or follow us on social media for updates.</p>
                    <p>Best regards,<br><strong>Sammunat LLC Team</strong></p>
                  </div>
                </div>
              </body>
            </html>
          `,
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Continue even if email fails - don't block the response
      }
    }

    // In a production environment, you would also save to database here
    // Example: await saveToDatabase(sanitizedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! We will get back to you soon.',
        data: { submitted: true },
      } as ApiResponse,
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request',
        error: error instanceof Error ? error.message : 'Unknown error',
      } as ApiResponse,
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
