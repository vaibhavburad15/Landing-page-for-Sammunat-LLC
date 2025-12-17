'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: FiAward, value: '50+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { icon: FiUsers, value: '30+', label: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
    { icon: FiTrendingUp, value: '95%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
    { icon: FiHeart, value: '5+', label: 'Years Experience', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wide">
              About Us
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future of Web Development
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                At <span className="font-semibold text-primary-600 dark:text-primary-400">Sammunat LLC</span>, 
                we are passionate about creating exceptional web experiences that drive business growth. 
                Our team of skilled developers specializes in cutting-edge technologies including React, 
                Next.js, Node.js, and TypeScript.
              </p>
              <p>
                We believe in writing clean, maintainable code that not only meets current needs but 
                scales with your business. Our approach combines technical excellence with creative 
                problem-solving to deliver solutions that exceed expectations.
              </p>
              <p>
                From startups to established enterprises, we've helped numerous clients transform their 
                digital presence. We don't just build websites—we create digital experiences that engage 
                users and drive measurable results.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Modern Tech Stack</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Using latest technologies and best practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Agile Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Iterative approach with continuous client feedback</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Full Support</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Ongoing maintenance and support after delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technologies We Master
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="px-6 py-3 bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
