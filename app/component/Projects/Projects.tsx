"use client";
import "./projects.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
	const projects = [
		{
			title: "Store.Dev | Premium Developer Gear",
			description: "The official  Store.Dev Store. Providing premium tools and technical gear to enhance your programming productivity.",
			image: "/images/Projects/Store.webp",
			github: "https://github.com/Roshdy0/Roshdy.Dev",
			demo: "https://store-dev-olive.vercel.app/",
			tech: ["JavaScript", "CSS3", "Responsive UI"],
		},
		{
			title: "Tourism Egyptian",
			description: "Responsive landing page showcasing the history of ancient Egyptian tourism. Features a sleek dark-themed UI.",
			image: "/images/Projects/Tourism Egyptian.webp",
			github: "https://github.com/Roshdy0/Egyptian",
			demo: "/Projects/Egyptian-Tourism/index.html",
			tech: ["HTML5", "CSS3", "Bootstrap 5", "jQuery"],
		},
		{
			title: "Haircut Barber Shop",
			description: "A comprehensive barber shop landing page featuring dynamic carousels, service pricing, and a fully responsive layout with a dark theme.",
			image: "/images/Projects/Haircut.webp",
			github: "https://github.com/Roshdy0/haircut",
			demo: "/Projects/Haircut/index.html",
			tech: ["HTML5", "CSS3", "jQuery", "Owl Carousel"],
		},
		{
			title: "pro admin dashboard",
			description: "Professional Admin Dashboard featuring a modern Glassmorphism UI and interactive Chart.js analytics. Built with clean HTML5/CSS3 architecture, fully responsive.",
			image: "/images/Projects/Dashboard.webp",
			github: "https://github.com/Roshdy0/pro-admin-dashboard",
			demo: "/Projects/Dashboard/index.html",
			tech: ["HTML5", "CSS3", "jQuery", "Chart.js"],
		},
		{
			title: "Smart Task Manager",
			description: "A streamlined task management app featuring persistent local storage and dynamic UI updates. user-centric interface for efficient daily productivity.",
			image: "/images/Projects/ToDo Application.webp",
			github: "https://github.com/Roshdy0/ToDo-List/tree/main",
			demo: "/Projects/ToDoList/index.html",
			tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
		},
		{
			title: "Cowboy Adventure UI",
			description: "A high-fidelity gaming landing page featuring a cinematic theme, optimized for performance and immersive user experience.",
			image: "/images/Projects/Cowboy Adventure UI.webp",
			github: "https://github.com/Roshdy0/Cowboy-Adventure-UI",
			demo: "/Projects/Cowboy-Adventure-UI/Main.html",
			tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
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
								<Image src={project.image} alt={project.title} className="project-img" width={500} height={300} priority={false} loading="lazy" />

								<div className="project-links">
									<a href={project.github} target="_blank" className="icon-link" rel="noreferrer" aria-label="GitHub Repository">
										<FontAwesomeIcon icon={faGithub} size="2x" />
									</a>

									<Link href={project.demo} target="_blank" className="icon-link demo-btn" rel="noopener noreferrer" aria-label="View Demo">
										<FontAwesomeIcon icon={faLink} />
									</Link>
								</div>
							</div>

							<div className="project-content p-6">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<div className="tech-tags mt-4">
									{project.tech.map((t, i) => (
										<span key={i} className="tag">
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-16">
					<a href="https://github.com/Roshdy0" target="_blank" className="view-more-btn" rel="noreferrer" aria-label="View All Projects on GitHub">
						View All Projects on GitHub <i className="fa-brands fa-github ml-2"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
