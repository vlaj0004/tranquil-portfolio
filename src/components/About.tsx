import { motion } from "framer-motion";

const skills = [
  { category: "Programming & Data", items: ["Python", "SQL", "R", "Java", "JavaScript", "HTML/CSS"] },
  { category: "Frameworks/Tools", items: ["Spring Boot", "Git", "Power BI", "Tableau", "Agile methodologies"] },
  { category: "Database & Analytics", items: ["SQL Server Management Studio", "Oracle SQL Developer", "DBATools", "PL/SQL"] },
  { category: "Languages", items: ["English (Fluent)", "French (Advanced)"] },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Background & Experience
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            I'm a 4th-year Bachelor of Technology student specializing in Business
            Systems Development. With hands-on experience in database analysis and
            innovative project development, I've had the opportunity to work with
            leading organizations like Indigenous Services Canada and Global Affairs
            Canada.
          </p>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;