'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiLayout, 
  FiShoppingCart, 
  FiSettings,
  FiCloud,
  FiLock
} from 'react-icons/fi'
import { Service } from '@/types'

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with React, Next.js, and modern frameworks. Fast, scalable, and user-friendly.',
    icon: 'FiCode',
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps using React Native. One codebase for iOS and Android.',
    icon: 'FiSmartphone',
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Robust backend systems with Node.js, Express, and RESTful APIs. Secure and performant.',
    icon: 'FiDatabase',
  },
  {
    id: '4',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love. Design systems and responsive layouts.',
    icon: 'FiLayout',
  },
  {
    id: '5',
    title: 'E-Commerce Solutions',
    description: 'Complete online store solutions with payment integration and inventory management.',
    icon: 'FiShoppingCart',
  },
  {
    id: '6',
    title: 'API Integration',
    description: 'Seamless third-party API integration and custom API development for your applications.',
    icon: 'FiSettings',
  },
  {
    id: '7',
    title: 'Cloud Services',
    description: 'Cloud infrastructure setup and deployment on AWS, Vercel, and other platforms.',
    icon: 'FiCloud',
  },
  {
    id: '8',
    title: 'Security & Auth',
    description: 'Implement secure authentication, authorization, and data protection measures.',
    icon: 'FiLock',
  },
]

const iconMap: { [key: string]: any } = {
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiLayout,
  FiShoppingCart,
  FiSettings,
  FiCloud,
  FiLock,
}

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            What We Offer
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 rounded-2xl transition-all duration-300" />
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              Let's discuss how we can help bring your ideas to life with our expertise
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
