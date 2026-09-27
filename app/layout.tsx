import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import SecurityCode from "./component/SecurityCode/SecurityCode";
import "./globals.css";
export const dynamic = "force-static";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	title: "ROSHDY.DEV | Frontend Developer",
	description: "Portfolio of Roshdy Mammdouh - Modern Web Developer & UI Enthusiast",
	metadataBase: new URL("https://portfolio-blush-theta-7kv6gy2k7x.vercel.app/"),
	alternates: {
		canonical: "/",
	},
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Roshdy Mammdouh",
		url: "https://portfolio-blush-theta-7kv6gy2k7x.vercel.app/",
		jobTitle: "Frontend Developer",
		knowsAbout: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Web Performance", "SEO"],
		sameAs: ["https://github.com/Roshdy0", "https://www.behance.net/Roshdy0", "https://www.linkedin.com/in/roshdi-mammdoh-27a004209/"],
	};

	return (
		<html lang="en" className={`${spaceGrotesk.className} ${spaceGrotesk.variable}`} suppressHydrationWarning>
			<head>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
			</head>
			<body>
				<ThemeProvider attribute="data-theme" defaultTheme="dark">
					<SecurityCode>{children}</SecurityCode>
				</ThemeProvider>
			</body>
		</html>
	);
}
