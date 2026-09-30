"use client";
import Image from "next/image";
import "./about.css";

const About = () => {
	return (
		<section id="about" className="about-section py-20">
			<div className="container mx-auto px-6">
				<h2 className="section-title text-center">
					About <span className="gradient-text">Me</span>
				</h2>

				<div className="flex flex-col lg:flex-row items-center gap-12">
					<div className="about-image-wrapper lg:w-1/3 flex justify-center">
						<div className="avatar-container">
							<Image
								src="/images/About.webp"
								alt="Roshdy_Mammdouh_Frontend_React_NextJS"
								placeholder="blur"
								blurDataURL="data:..."
								className="avatar-img"
								priority={false}
								width={500}
								height={500}
							/>
							<div className="neon-circle"></div>
						</div>
					</div>
					<div className="about-content lg:w-2/3">
						<h3 className="text-3xl font-bold">
							Hello, I'm <span className="gradient-text">Roshdy Mammdouh</span>
						</h3>
						<h4 className="text-xl gradient-text font-medium">Frontend Developer | Next.js & React.js</h4>

						<p className="bio-text">
							My journey into web development didn't start with just code; it started with systems. With a background in Management Information Systems (MIS), I developed a strong
							foundation in analyzing complex data and understanding how robust systems work behind the scenes. This analytical mindset naturally drove me toward frontend architecture,
							where I found my true passion: bridging the gap between solid system logic and seamless user experiences.
							<br />
							Today, I specialize in engineering high-performance web applications using <strong className="gradient-text">React</strong> and{" "}
							<strong className="gradient-text">Next.js</strong>. I obsess over Core Web Vitals, clean state management, and pixel-perfect UIs to ensure that every project I build is not
							only visually striking but also lightning-fast, scalable, and highly accessible.
						</p>

						<div className="stats-grid grid grid-cols-1 sm:grid-cols-3 gap-6">
							<div className="stat-card">
								<i className="fa-solid fa-code stat-icon"></i>
								<h4 className="stat-number">3+</h4>
								<p className="stat-label">Years of Exp.</p>
							</div>
							<div className="stat-card">
								<i className="fa-solid fa-layer-group stat-icon"></i>
								<h4 className="stat-number">25+</h4>
								<p className="stat-label">Projects Done</p>
							</div>
							<div className="stat-card">
								<i className="fa-solid fa-bolt stat-icon"></i>
								<h4 className="stat-number">100%</h4>
								<p className="stat-label">Clean Code</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
