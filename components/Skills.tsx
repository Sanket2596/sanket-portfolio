'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench, Brain } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React / React Query / Redux", level: 95, color: "from-cyan-400 to-blue-500" },
        { name: "Angular", level: 90, color: "from-red-500 to-red-700" },
        { name: "Vue.js", level: 85, color: "from-green-500 to-green-700" },
        { name: "Next.js", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "TypeScript / JavaScript", level: 95, color: "from-blue-600 to-blue-700" },
        { name: "HTML5 / CSS3", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Tailwind CSS / Bootstrap", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "Chart.js / Material-UI", level: 85, color: "from-pink-500 to-pink-700" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Java / Spring Boot / Spring Cloud", level: 90, color: "from-green-600 to-green-800" },
        { name: "Node.js / Express.js", level: 90, color: "from-green-500 to-green-700" },
        { name: "Python (FastAPI / Flask / Celery)", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: ".NET / ASP.NET (C#)", level: 85, color: "from-purple-500 to-purple-700" },
        { name: "Spring Security / Hibernate", level: 85, color: "from-red-500 to-red-700" },
        { name: "WebSockets / Kafka", level: 85, color: "from-orange-500 to-orange-700" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS (Lambda, EKS, Fargate, Cognito)", level: 90, color: "from-orange-500 to-yellow-500" },
        { name: "Azure (AKS, DevOps, App Services)", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "Docker / Kubernetes / Helm", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Jenkins / GitHub Actions / GitLab CI", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Terraform / Ansible", level: 80, color: "from-purple-500 to-purple-700" },
        { name: "Prometheus / Grafana", level: 80, color: "from-red-500 to-orange-500" }
      ]
    },
    {
      title: "Databases & Data",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL / MySQL / Oracle SQL", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB / Cassandra", level: 85, color: "from-green-500 to-green-700" },
        { name: "Redis / Elasticsearch", level: 85, color: "from-red-500 to-red-700" },
        { name: "Apache Kafka / Apache Flink", level: 80, color: "from-orange-500 to-orange-700" },
        { name: "Firebase / GraphQL", level: 80, color: "from-yellow-500 to-yellow-700" },
        { name: "Pinecone / Weaviate / FAISS", level: 75, color: "from-purple-500 to-purple-700" }
      ]
    },
    {
      title: "Security & Authentication",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "OAuth 2.0 / JWT / OpenID Connect", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "SSL/TLS / SAML / SSO", level: 85, color: "from-green-500 to-green-700" },
        { name: "AWS WAF & Shield", level: 85, color: "from-orange-500 to-orange-700" },
        { name: "RBAC / CORS / CSRF / XSS Prevention", level: 90, color: "from-red-500 to-red-700" },
        { name: "OWASP & GDPR Compliance", level: 85, color: "from-purple-500 to-purple-700" },
        { name: "Encryption / Audit Logging", level: 85, color: "from-gray-500 to-gray-700" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "OpenAI GPT-4 / Claude / LLaMA", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "LangChain / LlamaIndex / RAG", level: 85, color: "from-blue-500 to-purple-500" },
        { name: "TensorFlow / PyTorch / Scikit-learn", level: 80, color: "from-orange-500 to-red-500" },
        { name: "NLP (spaCy, BERT, RoBERTa)", level: 80, color: "from-green-500 to-cyan-500" },
        { name: "AWS Bedrock / Cursor AI", level: 80, color: "from-yellow-500 to-orange-500" }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-secondary-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Additional Skills & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "JUnit", "Jest", "Cypress", "Selenium", "Pytest", "Mockito",
              "SonarQube", "JMeter", "Postman", "Swagger", "TDD", "BDD",
              "Microservices", "Event-Driven Architecture", "DDD", "Serverless",
              "Agile Scrum", "Kanban", "Figma", "Adobe XD", "Webpack", "SASS",
              "A/B Testing", "Blue-Green Deploy", "Auto-Scaling", "Load Balancing"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-secondary-800/50 hover:bg-secondary-700/50 border border-secondary-600/50 rounded-lg p-4 text-center transition-all duration-200 cursor-default"
              >
                <span className="text-sm text-secondary-300 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
