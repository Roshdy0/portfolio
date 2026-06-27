"use client";
import React from "react";
import "./Skills.css";

const Skills = () => {
	const skills = [
		{ name: "Core Frontend Stack", level: "Advanced", lan: "JavaScript (ES6+), React.js, Next.js" },
		{ name: "Modern Styling", level: "Advanced", lan: "CSS3, SASS, Bootstrap 5, Tailwind CSS" },
		{ name: "E-commerce (E-commerce & CMS)", level: "Intermediate", lan: "WordPress, Shopify Development" },
		{ name: "The Analytical Edge", level: "Advanced", lan: "Automation (VBA), SQL Server, Database Management & Design" },
		{ name: "Optimized Soft Skills", level: "Advanced", lan: "Business Suite: Microsoft Office, UI/UX Tools: Adobe Photoshop" },
		{ name: "Design & Productivity ", level: "Advanced", lan: "Problem Solving, Attention to Detail, Analytical Thinking, Continuous Learning" },
	];

	return (
		<section id="skills" className="skills-section flex justify-center items-center py-20">
			<div className="skills-container mx-auto max-w-7xl px-6 w-full">
				<h2 className="section-title text-center">
					My <span className="gradient-text">Skills</span>
				</h2>

				<div className="skills-grid mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{skills.map((skill, index) => (
						<div key={index} className="skill-card">
							<div className="skill-info">
								<h3>{skill.name}</h3>
								<p>{skill.lan}</p>
							</div>
							<div className="skill-progress-bg">
								<div className="skill-progress-fill" style={{ width: skill.level === "Professional" ? "95%" : "80%" }}></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
