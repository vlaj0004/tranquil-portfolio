import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-slate-500 uppercase tracking-wider"
          >
            Business Systems Development Student
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-4xl md:text-6xl font-bold text-slate-900"
          >
            Stefan Vlajich
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-xl text-slate-600"
          >
            Passionate about using technology and analytics to solve real-world
            problems and contribute to organizational success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Get in touch
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            >
              View projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;