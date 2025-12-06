import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: '/#about' },
        { name: 'Courses', to: '/#courses' },
        { name: 'Activities', to: '/#activities' },
        { name: 'Join', to: '/#join' },
    ];

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
                    OIF<span className="logo-dot">.</span>
                </Link>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <HashLink
                            key={link.name}
                            to={link.to}
                            className="nav-link"
                            scroll={scrollWithOffset}
                        >
                            <span className="nav-number">0{navLinks.indexOf(link) + 1}.</span> {link.name}
                        </HashLink>
                    ))}
                    <HashLink to="/#join" className="cta-button-small" scroll={scrollWithOffset}>
                        Join Us
                    </HashLink>
                </div>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {isOpen && (
                    <div className="mobile-menu glass-panel">
                        {navLinks.map((link) => (
                            <HashLink
                                key={link.name}
                                to={link.to}
                                className="mobile-link"
                                onClick={() => setIsOpen(false)}
                                scroll={scrollWithOffset}
                            >
                                {link.name}
                            </HashLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
