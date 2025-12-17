'use client'

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">
                Sammunat<span className="text-primary-500"> LLC</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Building innovative web solutions with cutting-edge technologies. 
              We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FiMail size={18} className="text-primary-500" />
                <a href="mailto:Buradvaibhav5@gmail.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Buradvaibhav5@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone size={18} className="text-primary-500" />
                <a href="tel:+91 899419978" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +91 899419978
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FiMapPin size={18} className="text-primary-500 mt-1" />
                <span className="text-gray-400">
                  B-201, kavita chs ltd, Near Ram Mandir
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sammunat LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
