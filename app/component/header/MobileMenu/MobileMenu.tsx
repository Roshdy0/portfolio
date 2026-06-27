"use client";
import { Link } from "react-scroll";
import { X, Home, Code, User, Briefcase, Mail } from "lucide-react";

import "./MobileMenu.css";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	const menuLinks = [
		{ to: "home", name: "Home", href: "#home", icon: <Home size={20} /> },
		{ to: "skills", name: "Skills", href: "#skills", icon: <Code size={20} /> },
		{ to: "about", name: "About", href: "#about", icon: <User size={20} /> },
		{ to: "projects", name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
		{ to: "contact", name: "Contact", href: "#contact", icon: <Mail size={20} /> },
	];

	if (!isOpen) return null;

	return (
		<div className="mobile-menu-overlay" onClick={onClose}>
			<div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
				<div className="mobile-menu-header">
					<span className="mobile-logo">ROSHDY.DEV</span>
					<button className="close-btn" onClick={onClose} aria-label="Close Menu">
						<X size={28} />
					</button>
				</div>

				<nav className="mobile-nav">
					{menuLinks.map((link, index) => (
						<Link key={index} to={link.to} spy={true} smooth={true} duration={1000} onClick={onClose} className="mobile-nav-link" aria-label={link.name}>
							<span className="link-icon">{link.icon}</span>
							{link.name}
						</Link>
					))}
				</nav>

				<div className="mobile-menu-footer">
					<button className="mobile-cta" aria-label="Let's Talk">
						Let's Talk
					</button>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
