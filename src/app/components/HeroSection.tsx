import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm backdrop-blur-xl"
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block w-2 h-2 rounded-full bg-primary mr-2"
              />
              Available for projects
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight"
              >
                {["Ricardo", "Trejo"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Frontend Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Experienced Software Engineer with nearly 10 years of experience
              developing scalable web applications and AI-powered solutions. My
              strengths include teamwork, problem-solving, and adapting quickly
              to new environments. I am looking for a position where I can
              contribute my skills and continue to grow professionally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.a
                href={`/Ricardo_Trejo_CV.pdf`}
                download="Ricardo_Trejo_CV.pdf"
                target="_blank"
                whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl border-2 border-primary/30 text-primary font-semibold flex items-center justify-center gap-2 hover:bg-primary/5 backdrop-blur-xl transition-all"
              >
                Download Resume
                <Download className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Floating Orbs */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/30 to-blue-500/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 rounded-full blur-3xl"
              />

              {/* 3D Grid */}
              <div className="absolute inset-0 rounded-3xl border border-primary/20 bg-gradient-to-br from-card/80 to-transparent backdrop-blur-2xl overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 p-4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0.1, 0.5, 0.1],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.02,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      whileHover={{ scale: 1.5, opacity: 1 }}
                      className="rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/10 border border-primary/20 cursor-pointer"
                    />
                  ))}
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 left-1/4 w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center"
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 right-1/4 w-16 h-16 rounded-2xl bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 flex items-center justify-center"
                >
                  <span className="text-2xl">🤖</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-1/4 left-1/2 w-16 h-16 rounded-2xl bg-purple-500/20 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
