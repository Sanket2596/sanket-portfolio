'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

export default function About() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, Fullerton, CA",
      period: "Aug 2022 – May 2024",
      gpa: "GPA: 3.6/4.0"
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Marathwada Institute of Technology, Aurangabad, India",
      period: "June 2015 – Aug 2019",
      gpa: "GPA: 3.5/4.0"
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Who I Am
            </h3>
            <p className="text-secondary-300 leading-relaxed mb-6">
              I'm a Full Stack Developer with 5+ years of experience building scalable, 
              secure, and high-performance web applications. My journey spans across diverse industries 
              from financial services at CRISIL to e-commerce analytics at BigCommerce.
            </p>
            <p className="text-secondary-300 leading-relaxed mb-6">
              I specialize in front-end and back-end technologies, databases, cloud platforms, DevOps, and AI/ML integration. 
              Skilled in microservices, RESTful APIs, CI/CD, and responsive design, I deliver 
              efficient, user-centric, and reliable software solutions.
            </p>
            <p className="text-secondary-300 leading-relaxed">
              From building AI-powered analytics platforms with BERT models to developing real-time financial research tools with Kafka, 
              I'm passionate about leveraging cutting-edge technologies including AI/ML to solve complex business challenges and create 
              exceptional user experiences.
            </p>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-lg p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-500/20 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-secondary-400 mb-2">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-400 mb-2">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary-400">
                        <Award size={16} />
                        <span className="text-sm font-medium">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "Constantly exploring new technologies and approaches to solve complex problems",
                icon: "🚀"
              },
              {
                title: "Quality",
                description: "Writing clean, maintainable code that scales and performs",
                icon: "✨"
              },
              {
                title: "Collaboration",
                description: "Working with teams to deliver exceptional user experiences",
                icon: "🤝"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-effect rounded-lg card-hover"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-secondary-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
