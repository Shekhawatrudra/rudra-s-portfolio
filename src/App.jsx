// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import Contact from "./components/Contact";
import AboutMe from './components/AboutMe';



import "./App.css"; // You can use this for your custom styles

const projects = [
  {
    title: "Skill Venue",
    description: "An e-learning platform built with HTML, CSS, JS, and Bootstrap.",
    link: "#",
    image: "path_to_image_1.jpg",
  },
  {
    title: "Algorithm Visualizer",
    description: "Visualizes search and graph algorithms with animation.",
    link: "#",
    image: "path_to_image_2.jpg",
  },
  // Add more projects if you want
];


const skills = [
  { skill: "Java", level: "Expert",  },
  { skill: "React", level: "Intermediate",  },
  { skill: "HTML & CSS", level: "Advanced",  },
  { skill: "JavaScript", level: "Intermediate", },
  { skill: "Data Structures", level: "Intermediate", },
];
function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "linear-gradient(to right, #fdfbfb, #ebedee)",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "bold" }}>
          Hey, I'm Rudra Shekhawat 👋
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#555" }}>
          Software Developer | Problem Solver | Web Enthusiast
        </p>
      </section>

      {/* Main Content */}
      <main style={{ padding: "4rem 2rem" }}>
         {/* ✅ About Me Section */}
         <AboutMe />
        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: "4rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#6c5ce7" }}>🚀 Projects</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ marginBottom: "4rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#00b894" }}>🧠 My Skills</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {skills.map((skill, index) => (
              <SkillsCard key={index} {...skill} />
            ))}
          </div>
        </section>
         {/* ✅ Contact Section */}
         <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
