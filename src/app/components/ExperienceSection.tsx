import { motion } from "motion/react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Freelance Full Stack / AI Developer",
    company: "Independent",
    period: "2025 - Present",
    current: true,
    achievements: [
      "Development of conversational AI agents using LangChain and OpenAI API",
      "Implementation of RAG (Retrieval-Augmented Generation) pipelines with Azure AI Search",
      "Scalable React architectures with micro-frontends and Module Federation",
      "Integration of AI solutions in enterprise web applications"
    ]
  },
  {
    role: "Senior Full Stack Developer",
    company: "Globant",
    period: "2022 - 2024",
    achievements: [
      "Technical leadership on large-scale projects for Fortune 500 clients",
      "Implementation of micro-frontend architectures with React and Module Federation",
      "Performance optimization that reduced load times by 60%",
      "Mentorship of junior and mid-level development teams"
    ]
  },
  {
    role: "Frontend Developer",
    company: "Strat Plus",
    period: "2020 - 2022",
    achievements: [
      "Development of React applications with Redux and TypeScript",
      "Implementation of design systems with Fluent UI and Material UI",
      "Improvement of accessibility metrics (WCAG 2.1 AA)",
      "Close collaboration with UX/UI design teams"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Various Projects",
    period: "2015 - 2020",
    achievements: [
      "Development of web applications with React, Angular and Node.js",
      "Design and implementation of RESTful APIs",
      "Management of PostgreSQL and MongoDB databases",
      "Implementation of CI/CD with GitHub Actions and Docker"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-muted-foreground text-lg">
            A decade building high-impact technology solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content Card */}
                <div className={index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}>
                  <div
                    className={`p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-all ${
                      exp.current
                        ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20'
                        : 'border-border bg-card/50'
                    }`}
                  >
                    {exp.current && (
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-xs font-medium mb-4">
                        CURRENT
                      </div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        exp.current ? 'bg-primary/20 text-primary' : 'bg-muted/50 text-muted-foreground'
                      }`}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className={index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
