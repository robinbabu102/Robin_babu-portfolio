import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
          text-transparent text-center"
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
           hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-gray-200 mb-4">
                I developed my own personal portfolio to showcase my skills,
                projects, and achievements. The website highlights my technical
                expertise and serves as an interactive platform for potential
                employers and clients to explore my work. It features a clean,
                modern design with responsive layouts, ensuring a seamless
                experience across various devices. The portfolio also includes
                sections dedicated to my projects, skills, and contact
                information, allowing visitors to easily navigate and connect
                with me.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "HTML", "Javascript", "Tailwind CSS", "CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-5m
                     hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between"></div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {" "}
                View project →
              </a>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
           hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Product App</h3>
              <p className="text-gray-200 mb-4">
                Developed a full-stack web application for efficient product
                management, leveraging Spring MVC for request handling,
                Hibernate ORM for seamless database interaction, and MySQL for
                data persistence. Designed and implemented DAO and Service
                layers to ensure modular architecture and maintainability.
                Utilized JSP with JSTL for dynamic UI rendering and Spring
                validation for form handling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Spring MVC",
                  "Hibernate",
                  "JSP",
                  "MySQL",
                  "JDBC",
                  "Maven",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-5m
                     hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between"></div>
              <a
                href="https://github.com/robinbabu102/Product_Management_System.git"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {" "}
                GitHub →
              </a>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
           hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Bank Management System</h3>
              <p className="text-gray-200 mb-4">
                Designed and developed a high-performance, secure, and scalable
                Bank Management System leveraging Spring Boot with Hibernate &
                JPA for efficient data persistence and transaction management.
                Implemented Spring Security for robust authentication,
                authorization, and role-based access control. Developed a
                responsive and dynamic UI using HTML, CSS, and Thymeleaf,
                ensuring an intuitive user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Spring Boot",
                  "Hibernate",
                  "JPA",
                  "MySQL",
                  "Spring Security",
                  "HTML",
                  "CSS",
                  "Thymeleaf",
                  "RESTful APIs",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-5m
                     hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between"></div>
              <a
                href="https://github.com/robinbabu102/Bank_Management_System.git"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {" "}
                Github →
              </a>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
           hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">
                Orphanage Management System
              </h3>
              <p className="text-gray-200 mb-4">
                I created an Orphanage Management System to streamline the
                operations of orphanages, providing an efficient way to manage
                orphan records and donations. The system allows administrators
                to add, update, and track orphan details, manage donor
                information, and provide details about the orphanage . The
                project aims to improve organizational efficiency and
                transparency while providing a user-friendly interface for all
                stakeholders.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java (Spring Boot)", "HTML", "CSS", "Bootstrap", "SQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-5m
                     hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between"></div>
              {/* <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {" "}
                View project →
              </a> */}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
