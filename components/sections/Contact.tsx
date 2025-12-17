'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { ContactFormData } from '@/types'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return false
    }
    if (!formData.subject.trim()) {
      toast.error('Please enter a subject')
      return false
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        toast.error(data.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wide">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <FiMail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:info@sammunat.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      Buradvaibhav5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <FiPhone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      +91 8999419978
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      B-201, kavita chs ltd<br />
                      Near Ram Mandir<br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
                    placeholder="Vaibhav Burad"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
                    placeholder="Buradvaibhav5@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="ml-2" size={20} />
                  </>
                )}
              </button>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                We'll get back to you within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
