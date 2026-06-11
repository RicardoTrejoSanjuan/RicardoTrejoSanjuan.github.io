import { motion, useScroll, useTransform } from "motion/react";
import * as Tabs from "@radix-ui/react-tabs";
import {
  Code2,
  Layers,
  Brain,
  Wrench,
  Box,
  Workflow,
  FileJson,
  Palette,
  Database,
  Server,
  Sparkles,
  Search,
  Zap,
  FileCode,
  Container,
  TestTube,
  GitBranch,
  Code,
  Paintbrush,
  Send,
  Package,
  Boxes,
  Network,
  Component,
} from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: Component },
      { name: "Angular", icon: Box },
      { name: "TypeScript", icon: FileCode },
      { name: "JavaScript ES6+", icon: Code },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Fluent UI", icon: Paintbrush },
      { name: "Material UI", icon: Paintbrush },
      { name: "CSS-in-JS", icon: FileJson },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    icon: Layers,
    skills: [
      { name: "Redux Toolkit", icon: Database },
      { name: "Zustand", icon: Database },
      { name: "Context API", icon: Network },
      { name: "Micro-frontends", icon: Boxes },
      { name: "Module Federation", icon: Network },
      { name: "Webpack", icon: Package },
      { name: "Vite", icon: Zap },
      { name: "Monorepos", icon: Workflow },
    ],
  },
  {
    id: "backend",
    label: "Backend & AI",
    icon: Brain,
    highlight: true,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "LangChain", icon: Brain },
      { name: "OpenAI API", icon: Sparkles },
      { name: "Azure AI Search", icon: Search },
      { name: "RAG Pipelines", icon: Workflow },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    skills: [
      { name: "GitHub Actions", icon: Workflow },
      { name: "Docker", icon: Container },
      { name: "Jest", icon: TestTube },
      { name: "React Testing Library", icon: TestTube },
      { name: "Git", icon: GitBranch },
      { name: "VS Code", icon: Code2 },
      { name: "Figma", icon: Paintbrush },
      { name: "Postman", icon: Send },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.5],
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, -50]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      id="skills"
      className="py-24 px-6 lg:px-8 relative"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I master to build exceptional solutions
          </p>
        </motion.div>

        <Tabs.Root defaultValue="frontend" className="w-full">
          <Tabs.List className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Tabs.Trigger
                  key={category.id}
                  value={category.id}
                  className={`px-6 py-3 rounded-lg border transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary ${
                    category.highlight
                      ? "border-primary/50 text-primary hover:bg-primary/10"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </div>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>

          {skillCategories.map((category) => (
            <Tabs.Content key={category.id} value={category.id}>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {category.skills.map((skill, index) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0.9, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      className={`group p-5 rounded-2xl border backdrop-blur-xl cursor-pointer relative overflow-hidden ${
                        category.highlight
                          ? "border-primary/30 bg-primary/5 hover:border-primary hover:shadow-2xl hover:shadow-primary/30"
                          : "border-border bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-xl"
                      }`}
                    >
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />
                      <div className="relative z-10 flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className={`flex-shrink-0 ${category.highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`}
                        >
                          <SkillIcon className="w-5 h-5" />
                        </motion.div>
                        <span
                          className={`${category.highlight ? "text-primary font-semibold" : "text-foreground font-medium"}`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </motion.section>
  );
}
