"use client";
import React from 'react';
import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                
                <div className="footer-left text-gray-400 text-sm">
                    {currentYear} © All rights reserved.
                </div>

                <div className="footer-center">
                    <p className="signature-text">
                        Powered by <span className="name">Roshdy</span> & <span className="ai">AI</span>
                    </p>
                </div>

                <div className="footer-right flex gap-4">
                    <a href="#hero" className="footer-social-icon">
                        <i className="fa-solid fa-arrow-up"></i>
                    </a>
                </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;