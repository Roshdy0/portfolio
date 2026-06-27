"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="theme-toggle" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
			{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
};

export default ThemeToggle;
