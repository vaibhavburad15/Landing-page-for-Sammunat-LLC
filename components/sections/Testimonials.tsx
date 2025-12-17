'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { FiStar } from 'react-icons/fi'
import { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Vaibhav burad',
    role: 'CTO',
    company: 'Sammunat LLC',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    content: 'Sammunat LLC delivered an outstanding web application that exceeded our expectations. Their technical expertise and attention to detail are remarkable.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Vaibhav burad',
    role: 'Founder',
    company: 'Sammunat LLC',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    content: 'Working with this team was a pleasure. They understood our vision and brought it to life with cutting-edge technology and beautiful design.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Vaibhav burad',
    role: 'Product Manager',
    company: 'Sammunat LLC',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    content: 'The quality of work and professionalism is top-notch. They delivered on time and the final product was exactly what we needed.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Vaibhav burad',
    role: 'CEO',
    company: 'Sammunat LLC',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    content: 'Our e-commerce platform built by Sammunat has significantly increased our online sales. Highly recommend their services!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Vaibhav burad',
    role: 'VP Engineering',
    company: 'Sammunat LLC',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    content: 'Exceptional development skills combined with great communication. The team was responsive and delivered a scalable solution.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Vaibhav burad',
    role: 'Marketing Director',
    company: 'Sammunat LLC',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
    content: 'The landing pages they created have a conversion rate that exceeded our targets. Beautiful design and flawless functionality!',
    rating: 5,
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dont just take our word for it  hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="text-yellow-400 fill-yellow-400"
                    size={20}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Projects Delivered
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              30+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
