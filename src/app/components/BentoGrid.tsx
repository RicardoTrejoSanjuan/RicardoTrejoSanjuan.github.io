import { motion, useScroll, useTransform } from "motion/react";
import { Trophy, Brain, Layers, Zap, Code2, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function CountUpAnimation({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}</span>;
}

const metrics = [
  {
    title: "+9 Years",
    subtitle: "Web Engineering Experience",
    description: "Building high-impact digital solutions",
    icon: Trophy,
    size: "large",
    gradient: "from-primary/20 to-blue-500/10",
  },
  {
    title: "AI Engineer",
    subtitle: "Applications & Agents",
    description: "Building intelligent applications with AI",
    icon: Brain,
    size: "medium",
    gradient: "from-purple-500/20 to-primary/10",
  },
  {
    title: "Scalable Architectures",
    subtitle: "Micro Frontends",
    description: "Module Federation and distributed systems",
    icon: Layers,
    size: "medium",
    gradient: "from-blue-500/20 to-primary/10",
  },
  {
    title: "Performance",
    subtitle: "Advanced Optimization",
    description: "60% improvement in load times",
    icon: Zap,
    size: "small",
    gradient: "from-yellow-500/20 to-primary/10",
  },
  {
    title: "Clean Code",
    subtitle: "Best Practices",
    description: "SOLID, DRY, and design patterns",
    icon: Code2,
    size: "small",
    gradient: "from-green-500/20 to-primary/10",
  },
  {
    title: "Innovation",
    subtitle: "Emerging Technologies",
    description: "Always at the forefront",
    icon: Sparkles,
    size: "small",
    gradient: "from-pink-500/20 to-primary/10",
  },
];

export function BentoGrid() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      id="metrics"
      className="py-24 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Impact & Metrics
          </h2>
          <p className="text-muted-foreground text-lg">
            Numbers that back technical excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Card - Spans 2 columns */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotateY: -10 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="md:col-span-2 lg:row-span-2 p-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20 transition-all group relative overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center mb-6 backdrop-blur-xl"
                >
                  <Trophy className="w-10 h-10 text-primary" />
                </motion.div>
                <motion.h3
                  className="text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-br from-foreground via-primary to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  +<CountUpAnimation end={9} /> Years
                </motion.h3>
                <p className="text-2xl font-bold mb-2">
                  Web Engineering Experience
                </p>
                <p className="text-muted-foreground text-lg">
                  Building high-impact digital solutions for companies of all
                  sizes
                </p>
              </div>
              <div className="mt-8 flex gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scaleY: 1.2,
                      backgroundColor: "rgb(59, 130, 246)",
                    }}
                    className="flex-1 rounded-full bg-gradient-to-t from-primary/30 to-primary/10"
                    style={{ height: `${(i + 1) * 10}px` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Medium Cards */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: 50 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 400 },
            }}
            className="p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all hover:shadow-xl group relative overflow-hidden"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metrics[1].gradient} flex items-center justify-center mb-4 backdrop-blur-xl relative z-10`}
            >
              <Brain className="w-8 h-8 text-primary" />
            </motion.div>
            <h4 className="text-3xl font-bold mb-2 relative z-10">
              {metrics[1].title}
            </h4>
            <p className="text-primary font-semibold mb-2 relative z-10">
              {metrics[1].subtitle}
            </p>
            <p className="text-muted-foreground relative z-10">
              {metrics[1].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: 50 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 400 },
            }}
            className="p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all hover:shadow-xl group relative overflow-hidden"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metrics[2].gradient} flex items-center justify-center mb-4 backdrop-blur-xl relative z-10`}
            >
              <Layers className="w-8 h-8 text-primary" />
            </motion.div>
            <h4 className="text-3xl font-bold mb-2 relative z-10">
              {metrics[2].title}
            </h4>
            <p className="text-primary font-semibold mb-2 relative z-10">
              {metrics[2].subtitle}
            </p>
            <p className="text-muted-foreground relative z-10">
              {metrics[2].description}
            </p>
          </motion.div>

          {/* Small Cards */}
          {metrics.slice(3).map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="p-6 rounded-3xl border border-border bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all hover:shadow-lg group relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-4 backdrop-blur-xl relative z-10`}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="text-xl font-bold mb-1 relative z-10">
                  {metric.title}
                </h4>
                <p className="text-primary font-semibold text-sm mb-2 relative z-10">
                  {metric.subtitle}
                </p>
                <p className="text-muted-foreground text-sm relative z-10">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
