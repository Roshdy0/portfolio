"use client";
import "./footer.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer-section">
			<div className="container mx-auto px-6 py-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="footer-left text-sm" style={{ color: "var(--text-muted)" }}>
						{currentYear} © All rights reserved.
					</div>

					<div className="footer-center">
						<p className="signature-text">
							Powered by <span className="name">Roshdy</span> & <span className="ai">AI</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
