import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import SecurityCode from "./component/SecurityCode/SecurityCode";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ROSHDY.DEV | Frontend Developer",
	description: "Portfolio of Roshdy Mammdouh - Modern Web Developer & UI Enthusiast",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="data-theme" defaultTheme="dark">
					<SecurityCode>{children}</SecurityCode>
				</ThemeProvider>
			</body>
		</html>
	);
}
