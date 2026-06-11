import { motion, useScroll, useTransform } from "motion/react";

export function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(11, 15, 25, 0.0)", "rgba(11, 15, 25, 0.95)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.2]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        backgroundColor,
        borderBottomColor: useTransform(borderOpacity, (o) => `rgba(59, 130, 246, ${o})`)
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/10 border border-primary/30 flex items-center justify-center backdrop-blur-xl relative overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="font-bold text-primary text-lg relative z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                RT
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Skills", "Projects", "Experience", "Achievements"].map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item === "Home" ? "hero" : item === "Achievements" ? "metrics" : item.toLowerCase())}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2.5 rounded-xl border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-xl relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-semibold">Contact</span>
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
