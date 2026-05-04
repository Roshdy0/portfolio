"use client";
import React from 'react';
import "./projects.css";
import Link from 'next/link';

const Projects = () => {
    const projects = [
        {
            title: "Tourism Egyptian",
            description: "Responsive landing page showcasing the history of ancient Egyptian tourism. Features a sleek dark-themed UI.",
            image: "/images/Projects/Tourism Egyptian.png",
            github: "https://github.com/Roshdy0/Egyptian",
            demo: "/Projects/Egyptian-Tourism/index.html",
            tech: ["HTML5", "CSS3", "Bootstrap 5", "jQuery"]
        },
        {
            title: "Haircut Barber Shop",
            description: "A comprehensive barber shop landing page featuring dynamic carousels, service pricing, and a fully responsive layout with a dark theme.",
            image: "/images/Projects/Haircut.png",
            github: "https://github.com/Roshdy0/haircut",
            demo: "/Projects/Haircut/index.html",
            tech: ["HTML5", "CSS3", "jQuery", "Owl Carousel"]
        },
        {
            title: "Calculator PRO",
            description: "A professional-grade calculator featuring advanced mathematical logic and a fully responsive interface across all devices.",
            image: "/images/Projects/Calculator.png",
            github: "https://github.com/Roshdy0/Calculator", 
            demo: "/Projects/Calculator/index.html",
            tech: ["JavaScript", "CSS3", "Responsive UI"]
        },
        {
            title: "pro admin dashboard",
            description: "Professional Admin Dashboard featuring a modern Glassmorphism UI and interactive Chart.js analytics. Built with clean HTML5/CSS3 architecture, fully responsive.",
            image: "/images/Projects/Dashboard.png",
            github: "https://github.com/Roshdy0/pro-admin-dashboard",
            demo: "/Projects/Dashboard/index.html",
            tech: ["HTML5", "CSS3", "jQuery", "Chart.js"]
        },
        {
            title: "Smart Task Manager",
            description: "A streamlined task management app featuring persistent local storage and dynamic UI updates. user-centric interface for efficient daily productivity.",
            image: "/images/Projects/ToDo Application.png",
            github: "https://github.com/Roshdy0/ToDo-List/tree/main",
            demo: "/Projects/ToDoList/index.html",
            tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"]
        },
        {
            title: "Cowboy Adventure UI",
            description: "A high-fidelity gaming landing page featuring a cinematic theme, optimized for performance and immersive user experience.",
            image: "/images/Projects/Cowboy Adventure UI.png",
            github: "https://github.com/Roshdy0/Cowboy-Adventure-UI",
            demo: "/Projects/Cowboy-Adventure-UI/Main.html",
            tech: ["Next.js", "Tailwind CSS", "Framer Motion"]
        },
    ];

    return (
        <section id="projects" className="projects-section py-20">
        <div className="container mx-auto px-6">
            <h2 className="section-title text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
                <div key={index} className="project-card group">
                <div className="project-image-container">
                    <div className="img-overlay"></div>
                    <img src={project.image} alt={project.title} className="project-img" />
                    
                    <div className="project-links">
                    <a href={project.github} target="_blank" className="icon-link" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <Link 
                        href={project.demo} 
                        target="_blank" 
                        className="icon-link demo-btn" 
                        rel="noopener noreferrer"
                        >
                        <i className="fa-solid fa-link"></i>
                    </Link>
                    </div>
                </div>

                <div className="project-content p-6">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-tags mt-4">
                    {project.tech.map((t, i) => (
                        <span key={i} className="tag">{t}</span>
                    ))}
                    </div>
                </div>
                </div>
            ))}
            </div>

            <div className="text-center mt-16">
            <a href="https://github.com/Roshdy0" target="_blank" className="view-more-btn" rel="noreferrer">
                View All Projects on GitHub <i className="fa-brands fa-github ml-2"></i>
            </a>
            </div>
        </div>
        </section>
    );
};

export default Projects;