import React from 'react';
import { Twitter, Instagram, Github, Mail } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">OIF.</h2>
                        <p className="footer-desc">
                            大阪公立大学発<br />
                            イノベーション創出コミュニティ
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Links</h3>
                        <ul>
                            <li><HashLink to="/#about" scroll={scrollWithOffset}>About</HashLink></li>
                            <li><HashLink to="/#courses" scroll={scrollWithOffset}>Courses</HashLink></li>
                            <li><HashLink to="/#projects" scroll={scrollWithOffset}>Projects</HashLink></li>
                            <li><HashLink to="/#join" scroll={scrollWithOffset}>Join Us</HashLink></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <div className="social-icons">
                            <a href="https://x.com/OIF_OMU" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com/omu.innovation.frontier" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://github.com/ydi102143" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>
                        <a href="mailto:contact@oif-omu.com" className="contact-link">
                            <Mail size={16} /> お問い合わせフォーム
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} OMU Innovation Frontier. All rights reserved.</p>
                    <p className="university-name">大阪公立大学 (Osaka Metropolitan University)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
