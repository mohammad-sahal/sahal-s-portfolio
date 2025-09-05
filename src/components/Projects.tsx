import React from "react";
import { ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sahari Cargo",
      description:
        "Developed an international courier app using React.js and React Native, creating engaging user experiences and an SQL database backend for efficient data management and mobile experiences.",
      period: "Sep 2023 - Present",
      technologies: ["React.js", "React Native", "SQL"],
      category: "Mobile & Web Application",
    },
    {
      title: "Tax GO Global",
      description:
        "Built an accounting platform using React, Node.js, PostgreSQL, and Flutter. Featuring inventory management, payroll, and advanced reporting.",
      period: "Sep 2023 - Present",
      technologies: ["React", "Node.js", "PostgreSQL", "Flutter"],
      category: "Accounting Software",
    },
    {
      title: "LSG Digital Gold Trading Platform",
      description:
        "Built a gold trading platform with React.js, Next.js, PostgreSQL, and React Native, featuring real-time price tracking and secure payments via Stripe.",
      period: "Sep 2023 - Present",
      technologies: ["React.js", "Next.js", "PostgreSQL", "React Native"],
      category: "Trading Platform",
    },
    {
      title: "Nextme Ecommerce",
      description:
        "Developed core modules for an e-commerce platform with authentication, cart, checkout and admin features. Ensures seamless UX, secure transactions, and efficient backend management.",
      period: "2024",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "E-commerce Platform",
    },
    {
      title: "XEntryBook",
      description:
        "Revolutionary gym management solution designed to streamline every aspect of fitness business. Features user registration, attendance tracking, invoicing, membership management, and powerful automation. Includes multi-language support, notifications, and intuitive platform for seamless gym operations.",
      period: "2024",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "React Native",
        "Firebase",
      ],
      category: "Gym Management System",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <p className="text-lg text-slate-600">
            A collection of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <ExternalLink
                      size={16}
                      className="text-slate-600 group-hover:text-white"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <Calendar size={14} className="mr-1" />
                  {project.period}
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
