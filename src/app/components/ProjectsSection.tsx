import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useRef } from "react";

const projects = [
  {
    title: "AI-Powered Chat Assistant",
    description:
      "Conversational AI agent built with LangChain and OpenAI GPT-4, featuring RAG pipeline for context-aware responses and document understanding.",
    tech: ["React", "TypeScript", "LangChain", "OpenAI API", "Tailwind CSS"],
    image: "gradient-1",
    featured: true,
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Micro-Frontend E-Commerce Platform",
    description:
      "Scalable e-commerce solution using Module Federation, allowing independent deployment of product catalog, checkout, and admin modules.",
    tech: [
      "React",
      "Module Federation",
      "Redux Toolkit",
      "Node.js",
      "PostgreSQL",
    ],
    image: "gradient-2",
    featured: true,
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Enterprise Design System",
    description:
      "Comprehensive component library with 50+ React components, design tokens, and documentation built with Storybook and Figma integration.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Figma"],
    image: "gradient-3",
    featured: false,
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "High-performance dashboard with real-time data visualization, featuring WebSocket connections and optimized rendering for large datasets.",
    tech: ["React", "Recharts", "WebSocket", "Express", "MongoDB"],
    image: "gradient-4",
    featured: false,
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Smart Document Search",
    description:
      "Intelligent document search engine using Azure AI Search and vector embeddings for semantic search across thousands of documents.",
    tech: ["React", "Azure AI", "OpenAI", "Python", "FastAPI"],
    image: "gradient-5",
    featured: false,
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Collaborative Code Editor",
    description:
      "Real-time collaborative code editor with syntax highlighting, live cursors, and integrated terminal powered by WebRTC.",
    tech: ["React", "Monaco Editor", "WebRTC", "Node.js", "Socket.io"],
    image: "gradient-6",
    featured: false,
    links: {
      github: "#",
      demo: "#",
    },
  },
];

const gradients = {
  "gradient-1": "from-blue-500/20 via-purple-500/10 to-pink-500/5",
  "gradient-2": "from-green-500/20 via-emerald-500/10 to-teal-500/5",
  "gradient-3": "from-orange-500/20 via-red-500/10 to-pink-500/5",
  "gradient-4": "from-cyan-500/20 via-blue-500/10 to-indigo-500/5",
  "gradient-5": "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
  "gradient-6": "from-amber-500/20 via-yellow-500/10 to-lime-500/5",
};

export function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.95],
  );

  return (
    <motion.section
      ref={ref}
      style={{ scale }}
      id="projects"
      className="py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work showcasing technical expertise and
            innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, rotateX: 10 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 400 },
              }}
              className={`group relative rounded-3xl border border-border bg-card/50 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-xs font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Visual Background */}
              <div
                className={`h-48 bg-gradient-to-br ${gradients[project.image as keyof typeof gradients]} relative overflow-hidden`}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ opacity: 0, scale: 1.2 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Animated Particles */}
                <div className="absolute inset-0">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/30 rounded-full"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                      }}
                      animate={{
                        y: [null, Math.random() * -100 - 20 + "%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <SiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
