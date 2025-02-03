import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Here you would typically handle the form submission
    // For now, we'll simulate a submission
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Get in Touch
          </h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-slate-600">
                  <Mail className="w-5 h-5 mr-3" />
                  stefan.vlajich@outlook.com
                </p>
                <p className="flex items-center text-slate-600">
                  <Phone className="w-5 h-5 mr-3" />
                  613-850-8876
                </p>
                <p className="flex items-center text-slate-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  Ottawa, ON
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Social Links
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/stefan-vlajich/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/stefan-vlajich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className={`w-full px-6 py-3 bg-slate-900 text-white rounded-lg transition-colors ${
                    formStatus === "idle"
                      ? "hover:bg-slate-800"
                      : "opacity-75 cursor-not-allowed"
                  }`}
                >
                  {formStatus === "idle"
                    ? "Send Message"
                    : formStatus === "sending"
                    ? "Sending..."
                    : "Message Sent!"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
