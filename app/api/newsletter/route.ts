import { NextRequest, NextResponse } from 'next/server'
import { NewsletterFormData, ApiResponse } from '@/types'

// Rate limiting storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = parseInt(process.env.RATE_LIMIT_MAX || '5')
  const window = parseInt(process.env.RATE_LIMIT_WINDOW || '60000')

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
    const body: NewsletterFormData = await request.json()

    // Validate email
    if (!body.email) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email is required',
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

    // Sanitize email
    const sanitizedEmail = body.email.trim().toLowerCase()

    // In a production environment, you would:
    // 1. Save to database
    // 2. Add to email marketing service (Mailchimp, SendGrid, etc.)
    // 3. Send welcome email

    // Example: await saveToDatabase({ email: sanitizedEmail, subscribedAt: new Date() })

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter!',
        data: { email: sanitizedEmail },
      } as ApiResponse,
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
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
