"use client";
import "./contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact py-20">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-center mb-16">
                    Get In <span className="gradient-text">Touch</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                    <div className="lg:w-1/3 space-y-8">
                        <a href="mailto:roshdy.mammdouh@gmail.com">
                            <div className="card">
                                <i className="fa-solid fa-envelope info-icon"></i>
                                <div>
                                    <h4>Contact Me</h4>
                                    <p>roshdy.mammdouh@gmail.com</p>
                                </div>
                            </div>
                        </a>
                        <div className="card">
                            <i className="fa-solid fa-location-dot info-icon"></i>
                            <div>
                                <h4>Location</h4>
                                <p>Egypt, Cairo</p>
                            </div>
                        </div>

                        <div className="social-links flex gap-4 mt-10">
                            <a href="https://wa.me/+0201117651690" className="social-btn"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="https://github.com/Roshdy0" target="_blank" className="social-btn"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/roshdy-mammdouh-2b29653b1/" className="social-btn"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full">
                        <form className="contact-form" action="https://formspree.io/f/mbdqwodr" method="POST">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <input type="text" placeholder="Your Name" className="form-input" name="name" required />
                                <input type="email" placeholder="Your Email" className="form-input" name="email" required />
                            </div>
                            <input type="text" placeholder="Subject" className="form-input mb-6" name="subject" required />
                            <textarea placeholder="Your Message" rows={6} className="form-input mb-6" name="message" required></textarea>
                            
                            <button type="submit" className="submit-btn">
                                Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;