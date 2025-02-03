import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "KellerApp",
    description: "A hackathon-winning project built with Python, Streamlit, MediaPipe, and Groq AI to convert English text, speech, and gestures into British Sign Language.",
    link: "https://github.com/stefan-vlajich/KellerApp.git",
    tags: ["Python", "Streamlit", "MediaPipe", "Groq AI"],
  },
  {
    title: "Employee Task Manager",
    description: "Developed a token-secured RESTful API with Java, Spring Boot, and Spring Security; included tests for reliability.",
    link: "https://github.com/stefan-vlajich/Employee-Task-Manager.git",
    tags: ["Java", "Spring Boot", "Spring Security", "Android"],
  },
  {
    title: "Video Game Sales Prediction",
    description: "Analyzed 35,000+ rows with Python using a random forest model. Presented insights through Power BI dashboards.",
    link: "https://github.com/stefan-vlajich/Video-Game-Machine-Learning.git",
    tags: ["Python", "Machine Learning", "Power BI"],
  },
  {
    title: "Actor Lookup System",
    description: "Developed a mobile-first single-page application using The Movie Database (TMDB) API.",
    link: "https://github.com/stefan-vlajich/Actor-Lookup.git",
    tags: ["HTML", "CSS", "JavaScript", "API Integration"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Featured Projects
          </h2>
          
          <div className="mt-12 grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;