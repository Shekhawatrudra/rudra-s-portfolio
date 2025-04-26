import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Skill Venue",
    description: "An e-learning platform built with HTML, CSS, JS, and Bootstrap.",
    link: "#",
  },
  {
    title: "Algorithm Visualizer",
    description: "Visualizes search and graph algorithms with animations.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
