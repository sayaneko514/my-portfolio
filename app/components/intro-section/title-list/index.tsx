import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactTyped } from "react-typed";

interface TitleListProps {
    showTitle: boolean;
}

const TitleList: React.FC<TitleListProps> = ({ showTitle }) => {
    return (
        <CSSTransition
            in={showTitle}
            timeout={500}
            classNames="fade-up"
            unmountOnExit
        >
            <p className="font-lora uppercase text-[0.5rem] sm:text-xs md:text-sm leading-9 tracking-widest pt-2 pb-6 text-white" id="intro-title-list">
                <span className="inline-block before:content-['['] before:text-center before:inline-block before:px-2 before:text-white before:opacity-30 after:content-[']'] after:text-center after:inline-block after:pl-2 after:pr-3 after:text-white after:opacity-30" id="intro-title-list-text">
                    <ReactTyped
                        strings={["Software Developer", "Web Developer", "Software Developer in Test"]}
                        typeSpeed={120}
                        loop
                        backSpeed={20}
                        backDelay={7000}
                        startDelay={200}
                        showCursor={false}
                    />
                </span>
            </p>
        </CSSTransition>
    );
};

export default TitleList;
