import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface AboutMeButtonProps {
    showButton: boolean;
}

const AboutMeButton: React.FC<AboutMeButtonProps> = ({ showButton }) => {
    return (
        <CSSTransition
            in={showButton}
            timeout={500}
            classNames="fade-up"
            unmountOnExit
        >
            <a
                href="#about-section"
                id="about-button"
                className="inline-block text-white border border-white-30 hover:border-highlight focus:border-highlight hover:text-highlight hover:bg-black hover:bg-opacity-20 px-7 py-0.5 text-sm sm:text-base md:text-lg uppercase tracking-widest transition-colors duration-300 ease-in-out"
            >
                About Me
            </a>
        </CSSTransition>
    );
};

export default AboutMeButton;