"use client";
import { useEffect } from "react";

const SecurityProvider = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		const handleContextMenu = (e: MouseEvent) => e.preventDefault();

		const handleKeyDown = (e: KeyboardEvent) => {
			if (
				e.keyCode === 123 || // F12
				(e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
				(e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
				(e.ctrlKey && e.keyCode === 85) // Ctrl+U (View Source)
			) {
				e.preventDefault();
			}
		};

		document.addEventListener("contextmenu", handleContextMenu);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("contextmenu", handleContextMenu);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return <>{children}</>;
};

export default SecurityProvider;
