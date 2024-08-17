import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./../css/navbar.css";

function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                document.querySelector('.navbar').classList.add("sticky");
            }
            else {
                document.querySelector('.navbar').classList.remove("sticky");
            }
            if (window.scrollY > 500) {
                document.querySelector('.scroll-up-btn').classList.add("show");
            }
            else {
                document.querySelector('.scroll-up-btn').classList.remove("show");
            }
        };

        const handleClickOutside = (event) => {
            if (!document.querySelector('.navbar .menu').contains(event.target) &&
                !document.querySelector('.menu-btn').contains(event.target)) {
                closeMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn').classList.toggle("active");
        document.querySelector('.maincontainer').classList.toggle("blur");
    };

    const closeMenu = () => {
        document.querySelector('.navbar .menu').classList.remove("active");
        document.querySelector('.menu-btn').classList.remove("active");
        document.querySelector('.maincontainer').classList.remove("blur");
    };

    return (
        <div className='maincontainer'>
            <div className="scroll-up-btn" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>

            <nav className="navbar">
                <div className="container max-width">
                    <div className="logo">
                        <div className="menu-btn" onClick={toggleMenu}>
                            <div className="nav-but-wrap">
                                <div className="menu-icon hover-target">
                                    <span className="menu-icon__line menu-icon__line-left"></span>
                                    <span className="menu-icon__line"></span>
                                    <span className="menu-icon__line menu-icon__line-right"></span>
                                </div>
                            </div>
                        </div>
                        <a className='port' href="#home"><img alt='S' src="https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif" className='logoPic'></img><span>Port</span><span>folio</span></a>
                    </div>
                    <div>
                        <ul className='media-icon'>
                            <li><a href="https://www.linkedin.com/in/supratit-datta-1b902b258" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a href="https://twitter.com/Supratit_datta?" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="https://github.com/SupratitDatta" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="https://www.instagram.com/its_supratit_here?igsh=MWJuMXNjZG5xNGRiOA==" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="menu navigation hide">
                            <li><a href="#home" className="menu-btn" onClick={smoothScroll}>Home</a></li>
                            <li><a href="#about" className="menu-btn" onClick={smoothScroll}>About</a></li>
                            <li><a href="#skill" className="menu-btn" onClick={smoothScroll}>Skills</a></li>
                            <li><a href="#project" className="menu-btn" onClick={smoothScroll}>Projects</a></li>
                            <li><a href="#contact" className="menu-btn" onClick={smoothScroll}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;