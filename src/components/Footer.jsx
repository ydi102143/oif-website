import React from 'react';
import { Instagram, Mail } from 'lucide-react';
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
                            <a href="https://x.com/OIF_OMU" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/omu.innovation.frontier" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <Instagram size={20} />
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
