'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiZap, FiTrendingUp } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-200" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold">
                🚀 We Build Amazing Web Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Transform Your Ideas Into{' '}
              <span className="gradient-text">Digital Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We're a team of passionate developers creating cutting-edge web applications
              using React, Next.js, Node.js, and modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <FiArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 rounded-lg border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              {/* Card 1 */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-64 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <FiCode className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Clean Code
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Writing maintainable, scalable, and efficient code
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-32 left-0 w-64 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <FiZap className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Optimized for speed and user experience
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-0 right-8 w-64 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <FiTrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Growth Focused
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building solutions that scale with your business
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
