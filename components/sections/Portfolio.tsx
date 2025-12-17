'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Project } from '@/types'

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern online shopping platform with payment integration, inventory management, and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with data visualization, user management, and subscription handling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Social Media App',
    description: 'Full-featured social platform with real-time messaging, posts, and user interactions.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Project Management Tool',
    description: 'Collaborative workspace for teams with task tracking, kanban boards, and time management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    technologies: ['Next.js', 'Prisma', 'TailwindCSS', 'WebSockets'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '5',
    title: 'AI Content Generator',
    description: 'AI-powered content creation platform with multiple templates and export options.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    technologies: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '6',
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search, virtual tours, and mortgage calculator.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wide">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                    aria-label="View live project"
                  >
                    <FiExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                    aria-label="View on GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 rounded-lg border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Want to see more? Let's talk!
          </a>
        </motion.div>
      </div>
    </section>
  )
}
