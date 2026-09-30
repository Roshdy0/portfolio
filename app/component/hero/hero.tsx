"use client";
import Image from "next/image";
import "./hero.css";

const Hero = () => {
	return (
		<section id="home" className="hero-section flex min-h-screen items-center justify-center px-6 py-20">
			<div className="hero-container flex w-full max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
				<div className="hero-content flex-1 text-center md:text-left">
					<h2 className="hero-subtitle">Frontend Developer | Next.js & React.js</h2>
					<h1 className="hero-title">
						I'm <span className="gradient-text">Roshdy Mammdouh</span>
					</h1>
					<p className="hero-description mx-auto max-w-lg md:mx-0">
						Performance-driven Frontend Developer with 3+ years of experience specializing in React.js, Next.js (App Router), TypeScript, and Tailwind CSS. Proven track record in architecting fast, scalable web applications with a strong focus on optimizing Core Web Vitals (LCP, TBT, CLS), implementing modern state management, and delivering maximum performance with seamless UI/UX.
					</p>

					<div className="hero-btns mt-10 flex flex-wrap justify-center gap-6 md:justify-start">
						<a
							className="btn-primary"
							href="https://drive.google.com/file/d/15LHVzjO06GJHjLt6DsogJvKlm4XRIKyi/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Download CV"
						>
							Download CV
						</a>
						<a className="btn-secondary" href="https://linktr.ee/Roshdy_Mammdouh" target="_blank" rel="noopener noreferrer" aria-label="Contact Me">
							Contact Me
						</a>
					</div>
				</div>

				<div className="hero-visual flex flex-1 items-center justify-end">
					<div className="visual-card">
						<div className="inner-glass">
							<Image src="/images/my-image.webp" alt="Roshdy_Mammdouh_Frontend_React_NextJS" priority width={500} height={500} fetchPriority="high" loading="eager" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
