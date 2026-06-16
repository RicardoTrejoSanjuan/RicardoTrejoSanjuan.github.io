import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useRef } from "react";

const projects = [
  {
    id: 0,
    title: "Around The U.S",
    description:
      "Interactive photo-sharing web application built with TypeScript, Object-Oriented Programming (OOP), and modern front-end architecture. Features responsive design, reusable class-based components, form validation, dynamic card management, user profile editing, and modular popup interactions following BEM methodology and clean code principles.",
    image: "/public/images/around.png",
    featured: true,
    tech: ["HTML", "CSS", "TypeScript", "GitHub Pages"],
    links: {
      github: "https://github.com/RicardoTrejoSanjuan/web_project_around",
      demo: "https://ricardotrejosanjuan.github.io/web_project_around/",
    },
  },
  {
    id: 1,
    title: "Task Manager App",
    description:
      "Modern task management application built with React, TypeScript, and Redux Toolkit. Features task creation, completion tracking, drag-and-drop reordering, persistent local storage, dark mode support, and a fully responsive user experience across desktop and mobile devices.",
    image: "/public/images/taskManagerApp.png",
    featured: true,
    tech: [
      "React",
      "REST API",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Netlify",
    ],
    links: {
      github: "https://github.com/RicardoTrejoSanjuan/task-manager-app",
      demo: "https://tmapp-rt.netlify.app/",
    },
  },
  {
    id: 2,
    title: "MixologyHub",
    description:
      "MixologyHub is an application that allows users to search for cocktails by name or ingredient and get detailed information about the cocktail.",
    image: "/images/mixologyHub.png",
    featured: true,
    tech: [
      "React",
      "REST API",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Netlify",
    ],
    links: {
      github: "https://github.com/RicardoTrejoSanjuan/mixology-hub",
      demo: "https://magnificent-bombolone-192394.netlify.app/",
    },
  },
  {
    id: 3,
    title: "PetCare",
    description:
      "PetCare is an intuitive application designed for veterinary clinics to streamline the process of managing patient information.",
    image: "/images/petCare.png",
    featured: true,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Netlify"],
    links: {
      github: "https://github.com/RicardoTrejoSanjuan/petCare",
      demo: "https://wonderful-kataifi-cd77df.netlify.app/",
    },
  },
  {
    id: 4,
    title: "CalorieTrack",
    description:
      "CalorieTrack is a web application designed to help users track their daily caloric intake and expenditure. Users can easily add foods and physical activities to a list, specifying the number of calories consumed or burned",
    image: "/images/calorieTrack.png",
    featured: true,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Netlify"],
    links: {
      github: "https://github.com/RicardoTrejoSanjuan/calorie-track",
      demo: "https://gentle-puppy-0e63e3.netlify.app/",
    },
  },
  {
    id: 5,
    title: "Tip Calculator",
    description:
      "Tip Calculator is a user-friendly app that helps you quickly calculate tips based on your total bill.",
    image: "/images/calculator.png",
    featured: false,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Netlify"],
    links: {
      github: "https://github.com/RicardoTrejoSanjuan/gratuity-calculator",
      demo: "https://rococo-sherbet-b25cad.netlify.app/",
    },
  },
  {
    id: 6,
    title: "WeatherNow",
    description:
      "WeatherNow is a React application that allows you to quickly and easily check the current weather for any city. ",
    image: "/images/weather.png",
    featured: true,
    tech: [
      "React",
      "REST API",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Netlify",
    ],
    links: {
      github: "https://github.com/RicardoTrejoSanjuan/weathernow",
      demo: "https://cheery-caramel-096f92.netlify.app/",
    },
  },
  {
    id: 7,
    title: "GuitarLA - Shopping Cart",
    description:
      "This project is a shopping cart application built with React and TypeScript, using Vite as the build tool.",
    image: "/images/guitarLa.png",
    featured: false,
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "REST API",
      "Netlify",
    ],
    links: {
      github: "https://github.com/RicardoTrejoSanjuan/guitarLa-ts",
      demo: "https://heartfelt-druid-c67a72.netlify.app/",
    },
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);

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
      id="projects"
      style={{ scale }}
      className="py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
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

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
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
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <SiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
