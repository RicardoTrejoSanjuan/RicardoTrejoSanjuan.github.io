import { motion } from "motion/react";
import { Mail, GraduationCap, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export function ContactFooter() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready for your next project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to build innovative technology solutions that
            drive your business into the future
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-primary/50 transition-all"
          >
            Start Conversation
            <Send className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="https://linkedin.com/in/ricardotrejo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card/50 hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <FaLinkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/ricardotrejo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card/50 hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <SiGithub className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              GitHub
            </span>
          </a>
          <a
            href="mailto:ricardo@example.com"
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card/50 hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              Email
            </span>
          </a>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-3 text-muted-foreground mb-12"
        >
          <GraduationCap className="w-5 h-5" />
          <span>Universidad Politécnica de Pachuca - Software Engineering</span>
        </motion.div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2026 Ricardo Trejo. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed with React, TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
