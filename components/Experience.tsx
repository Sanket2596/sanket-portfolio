'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin, ExternalLink, Award, Code, Database, Cloud } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: "BigCommerce",
      location: "Remote, USA",
      position: "Full Stack Developer",
      period: "Jan 2024 – Present",
      logo: "🛒",
      projects: [
        {
          name: "SmartCommerce Analytics Platform",
          highlights: [
            "Developed AI-powered insights integrating BERT and DistilBERT models with an AI Insights Agent, improving operational efficiency by 20%",
            "Built RESTful APIs (/order-forecast, /customer-segmentation, /pricing-optimizer) using Python, FastAPI, and SQLAlchemy, reducing latency by 25%",
            "Designed PredictiveAnalyticsService and CognitiveCommerceService microservices using Python, RabbitMQ, and Celery, increasing inventory accuracy by 18%",
            "Created interactive dashboards using React, TypeScript, and Redux with GraphQL subscriptions and WebSockets, improving merchant insights by 24%",
            "Implemented OAuth 2.0 and JWT authentication supporting SSO for enterprise systems, ensuring SOC 2 and PCI DSS compliance, improving onboarding efficiency by 33%"
          ]
        },
        {
          name: "CI/CD & Infrastructure",
          highlights: [
            "Developed CI/CD pipelines using GitHub Actions, Jenkins, and ArgoCD with automated testing using PyTest, Selenium, and Robot Framework, reducing production defects by 28%",
            "Containerized services using Docker, deployed to AWS EKS Kubernetes clusters with Prometheus, Grafana, CloudWatch, and OpenTelemetry, achieving 99.9% uptime"
          ]
        }
      ]
    },
    {
      company: "CRISIL",
      location: "Mumbai, India",
      position: "Full-Stack Developer",
      period: "May 2019 – Aug 2022",
      logo: "📊",
      projects: [
        {
          name: "SMART Financial Research Platform",
          highlights: [
            "Developed CRISIL's SMART financial research platform, automating analyst workflows",
            "Built modular, responsive frontends in React with Redux and Kafka integration for real-time data updates",
            "Improved UI usability and performance by 40% through component optimization and code splitting",
            "Designed backend services using Spring Boot with secure RESTful APIs and JWT authentication",
            "Integrated pre-trained Named Entity Recognition (NER) ML model with backend services"
          ]
        },
        {
          name: "DevOps & Security Implementation",
          highlights: [
            "Deployed backend services on Azure App Services and AKS using blue-green deployments",
            "Reduced system downtime by 20% and improved production stability significantly",
            "Implemented strong security controls including role-based access, tenant isolation, and audit logging",
            "Achieved 85%+ test coverage with JUnit and Jest, reducing production bugs by 35%"
          ]
        }
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <motion.div
                key={expIndex}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: expIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-secondary-900"></div>

                <div className="ml-12 md:ml-16">
                  <div className="glass-effect rounded-xl p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{exp.logo}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-secondary-400">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <h4 className="text-lg font-semibold text-primary-400 mb-1">
                          {exp.position}
                        </h4>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="space-y-6">
                      {exp.projects.map((project, projectIndex) => (
                        <motion.div
                          key={projectIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: (expIndex * 0.2) + (projectIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="border-l-2 border-primary-500/30 pl-4"
                        >
                          <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Code className="w-5 h-5 text-primary-400" />
                            {project.name}
                          </h5>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, highlightIndex) => (
                              <motion.li
                                key={highlightIndex}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: (expIndex * 0.2) + (projectIndex * 0.1) + (highlightIndex * 0.05) }}
                                viewport={{ once: true }}
                                className="flex items-start gap-2 text-secondary-300"
                              >
                                <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm leading-relaxed">{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Key Achievements & Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8 text-yellow-400" />,
                title: "Performance Optimization",
                description: "Improved UI performance by 40%, reduced API latency by 25%, and boosted merchant decision-making insights by 24%"
              },
              {
                icon: <Code className="w-8 h-8 text-primary-400" />,
                title: "AI & ML Integration",
                description: "Integrated BERT/DistilBERT models, NER ML models, and AI agents for predictive analytics and anomaly detection"
              },
              {
                icon: <Database className="w-8 h-8 text-green-400" />,
                title: "System Reliability",
                description: "Achieved 99.9% uptime, reduced system downtime by 20%, and cut production bugs by 35% through robust architecture"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center p-6 glass-effect rounded-lg card-hover"
              >
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h4>
                <p className="text-secondary-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
