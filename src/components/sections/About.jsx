import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendskills = ["React", "Tailwind CSS", "HTML", "CSS", "Bootstrap"];
  const backendskills = [
    "Java",
    "Spring Boot",
    "MVC",
    "SQL",
    "Hibernate",
    "JDBC",
  ];
  const versioncontrol = ["Git", "GitHub"];
  const others = [
    "REST APIs",
    "OOP",
    "Microservices",
    "Postman",
    "AWS (EC2, RDS)",
    "Logging & Debugging",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
          text-transparent text-center"
          >
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a passionate Full-Stack Developer with a strong foundation in
              Java, Spring Boot, and React. I enjoy building efficient,
              scalable, and user-friendly web applications. With a keen interest
              in problem-solving and a love for clean code, I am constantly
              exploring new technologies to enhance my skills.
              <p className="mt-2">
                I have hands-on experience with Java, SQL, React, and Tailwind
                CSS, and I am eager to apply my knowledge in real-world
                projects. Whether it's developing dynamic front-end interfaces
                or building robust back-end APIs, I am always up for a
                challenge!
              </p>
              <p className="mt-2 mb-2">
                I am looking for opportunities where I can contribute, learn,
                and grow as a developer while collaborating with like-minded
                professionals.
              </p>
              Let's build something amazing together! 🚀
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendskills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-5m
                     hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendskills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-5m
                     hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Version Control</h3>
                <div className="flex flex-wrap gap-2">
                  {versioncontrol.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-5m
                     hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Others</h3>
                <div className="flex flex-wrap gap-2">
                  {others.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-5m
                     hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Eduication</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <strong>MCA</strong>
                <li className="mt-2">
                  APJ Abdul Kalam Technological University (2022-2024)
                </li>
                <li>
                  Relavent course work:Data Structures and Algorithms,
                  Object-Oriented Programming, Web Development, SQL and NoSQL
                  Databases, Java, Python
                </li>
              </ul>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                <strong>BCA</strong>
                <li className="mt-2">University of Calicut (2019-2022)</li>
                <li>
                  Relavent course work:Web Development, SQL and NoSQL Databases,
                  C, Data Structures and Algorithms, Java
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    <strong> Java Developer Trainee at HulkHire Tech, Hyderabad (06-2025
                    to 08-2025)</strong>
                  </h4>
                  <p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-3">
                      <li>
                        Contributed to developing a Core Payment Integration
                        System using Java Spring Boot in a microservices
                        architecture deployed on AWS.
                      </li>
                      <li>
                        Processing Service (Main Contribution): Implemented
                        transaction orchestration and lifecycle management
                        (INITIATED → PROCESSING → SUCCESS/FAILED).
                      </li>
                      <li>
                        Assisted in integrating the Trustly Deposit API into the
                        Provider Service to support real-time bank transfers.
                      </li>
                    </ul>
                  
                  </p>
                
                </div>

              

                <div>
                  <h4 className="font-semibold">
                   <strong> Intern at Jspiders (06-2024 to 02-2025)</strong>
                  </h4>
                  <p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-3">
                      <li>
                        Java Development:Proficient in OOP, exception handling,
                        and core concepts.
                      </li>
                      <li>
                        Database Management: Hands-on experience with Hibernate
                        (ORM) and JDBC.
                      </li>
                      <li>
                        Frontend Development: Built responsive UIs with React,
                        HTML, CSS, and Tailwind CSS.
                      </li>
                      <li>Practiced 400+ SQL queries</li>
                      <li>
                        Version Control: Used Git and GitHub for project
                        management.
                      </li>
                    </ul>
                  </p>
                </div>

                {/* <div>
                  <h4 className="font-semibold">intern at jspiders (2024)</h4>
                  <p>
                   data
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
