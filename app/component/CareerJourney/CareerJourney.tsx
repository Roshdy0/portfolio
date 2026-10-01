import React from "react";
import styles from "./CareerJourney.module.css";

interface ExperienceItem {
	id: string;
	role: string;
	company?: string;
	period: string;
	highlights: string[];
}

const experiences: ExperienceItem[] = [
	{
		id: "exp-1",
		role: "Contract Frontend Developer",
		period: "Jun 2023 – Present",
		highlights: [
			"Engineered high-performance web applications using Next.js (App Router), TypeScript, and Tailwind CSS.",
			"Optimized Core Web Vitals (LCP < 1.1s, 0ms TBT) achieving 100% Lighthouse Accessibility & SEO scores.",
			"Implemented clean state management using Zustand with persistent dynamic updates.",
		],
	},
	{
		id: "exp-2",
		role: "Frontend Developer (E-commerce Solutions)",
		period: "Sep 2021 – May 2023",
		highlights: [
			"Spearheaded frontend architecture for custom e-commerce storefronts, doubling page load speeds.",
			"Implemented lazy loading, asset optimization, and clean component-driven architecture.",
		],
	},
	{
		id: "exp-3",
		role: "MIS Analyst (Internship)",
		company: "Ministry of Military Production",
		period: "Dec 2020 – Jan 2021",
		highlights: [
			"Audited personnel records and restructured legacy data entry processes into structured databases.",
			"Supervised critical data backup workflows to prevent data loss across governmental databases.",
		],
	},
	{
		id: "exp-4",
		role: "Web Developer Trainee",
		company: "Vodafone",
		period: "Dec 2019 – Feb 2020",
		highlights: ["Collaborated with senior engineers to translate UI mockups into responsive web interfaces using HTML5, CSS3, and JavaScript."],
	},
];

export const CareerJourney: React.FC = () => {
	return (
		<section id="CareerJourney" aria-label="Career Journey and Professional Experience" className={styles.careerSection}>
			<div className={styles.headerWrapper}>
				<h2 className={styles.sectionTitle}>
					Career <span className={styles.highlight}>Journey</span>
				</h2>
				<p className={styles.sectionSubtitle}>My professional timeline and engineering experience</p>
			</div>

			<div className={styles.timeline}>
				<div className="grid grid-cols-1 gap-8 md:gap-10">
					{experiences.map((item) => (
						<article key={item.id} className={styles.timelineItem}>
							<span className={styles.timelineDot} aria-hidden="true" />

							<div className={styles.card}>
								<header className={styles.cardHeader}>
									<div className="grid grid-cols-1 gap-1 md:grid-cols-[1fr_auto] md:items-center">
										<div>
											<h3 className={styles.roleTitle}>{item.role}</h3>
											{item.company && <span className={styles.companyName}>{item.company}</span>}
										</div>
										<span className={styles.dateBadge}>{item.period}</span>
									</div>
								</header>

								<ul className={styles.descriptionList} aria-label={`${item.role} accomplishments`}>
									{item.highlights.map((highlight, idx) => (
										<li key={idx}>{highlight}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default CareerJourney;
