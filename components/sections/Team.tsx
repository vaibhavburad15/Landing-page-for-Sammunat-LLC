'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { TeamMember } from '@/types'

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Vaibhav burad',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Passionate about building scalable web solutions',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: '2',
    name: 'Vaibhav burad',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Full-stack expert specializing in React and Node.js',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: '3',
    name: 'Vaibhav burad',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Creating beautiful and intuitive user experiences',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: '4',
    name: 'Vaibhav burad',
    role: 'Backend Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Building robust and scalable backend systems',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
]

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wide">
            Our Team
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Meet the Experts
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Talented individuals working together to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-gray-200 dark:bg-gray-600">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-white dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin size={18} />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="p-2 bg-white dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                        aria-label="GitHub"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-white dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                        aria-label="Twitter"
                      >
                        <FiTwitter size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-xl border border-primary-100 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              We are always looking for talented individuals who are passionate about web development
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
