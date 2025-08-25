'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Code, Database, Cloud, Brain } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management Dashboard",
      period: "Nov 2024 – Feb 2025",
      description: "A comprehensive full-stack inventory management system with real-time tracking, analytics, and user management capabilities.",
      image: "📊",
      technologies: ["Next.js", "Shadcn", "Zustand", "Node.js", "Prisma ORM", "PostgreSQL", "React Query", "AWS RDS", "AWS Amplify"],
      highlights: [
        "Full-stack dashboard with modern UI components",
        "Real-time inventory tracking and management",
        "Advanced analytics and reporting features",
        "Secure user authentication and role-based access",
        "Cloud deployment on AWS infrastructure"
      ],
      github: "https://github.com/sanketmungikar/inventory-dashboard",
      live: "#",
      category: "Full-Stack"
    },
    {
      title: "RocketMindAI - AI Code Analysis Tool",
      period: "June 2025",
      description: "An AI-powered tool for analyzing large codebases, providing onboarding documentation, architecture diagrams, and automated code quality reviews.",
      image: "🤖",
      technologies: ["Angular", "Python", "FastAPI", "AWS Bedrock", "MCP Server", "LLMs", "RAG", "Intelligent Chunking"],
      highlights: [
        "AI-powered codebase analysis and documentation",
        "Interactive visualization of architecture diagrams",
        "Automated code quality assessment",
        "MCP server integration with AWS Bedrock",
        "Real-time analysis and insights generation"
      ],
      github: "https://github.com/sanketmungikar/rocketmind-ai",
      live: "#",
      category: "AI/ML"
    },
    {
      title: "Event Ticketing Platform",
      period: "Aug 2024 – April 2025",
      description: "A modern event ticketing platform with real-time availability tracking, payment processing, and comprehensive seller management.",
      image: "🎫",
      technologies: ["Next.js", "TypeScript", "Stripe API", "WebSockets", "Redis", "Rate Limiting", "Real-time Updates"],
      highlights: [
        "Real-time ticket availability tracking",
        "Integrated Stripe payment processing",
        "Seller dashboard with analytics",
        "Queue management for sold-out events",
        "Performance optimization with Redis caching"
      ],
      github: "https://github.com/sanketmungikar/event-ticketing",
      live: "#",
      category: "Full-Stack"
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return <Code className="w-5 h-5" />
      case "AI/ML":
        return <Brain className="w-5 h-5" />
      case "Mobile":
        return <Database className="w-5 h-5" />
      default:
        return <Code className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return "from-blue-500 to-cyan-500"
      case "AI/ML":
        return "from-purple-500 to-pink-500"
      case "Mobile":
        return "from-green-500 to-emerald-500"
      default:
        return "from-blue-500 to-cyan-500"
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden card-hover group"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-secondary-400 mb-3">
                  <Calendar size={14} />
                  <span>{project.period}</span>
                </div>

                <p className="text-secondary-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary-800/50 text-secondary-300 text-xs rounded-md border border-secondary-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 bg-secondary-800/50 text-secondary-400 text-xs rounded-md">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-xs text-secondary-400 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary-800 hover:bg-secondary-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  
                  {project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-secondary-300 mb-6">
              I'm always open to discussing new opportunities, interesting projects, and innovative ideas. 
              Let's connect and explore how we can collaborate!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
