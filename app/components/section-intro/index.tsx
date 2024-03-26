'use client'

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";

interface IntroTextProps {
    sectionTitle: string;
    introTitle: string;
    introContent: string;
    introTitleColor: string;
}

const SectionIntro: React.FC<IntroTextProps> = ({
    sectionTitle,
    introTitle,
    introTitleColor,
    introContent,
}) => {
    const [typing, setTyping] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const h5Ref = useRef(null);
    const sectionTitleId = sectionTitle + "-section-title";
    const introTitleId = sectionTitle + "-intro-title";
    const introContentId = sectionTitle + "-intro-content";

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setTyping(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (h5Ref.current) {
            observer.observe(h5Ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <h2 data-aos="fade-up" className="text-highlight text-center uppercase font-bold text-xs sm:text-sm lg:text-base tracking-widest text-center" id={sectionTitleId}
                style={{
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 1,
                    letterSpacing: '.2rem'
                }}>
                {sectionTitle}
            </h2>
            <h5 ref={h5Ref} className="text-lg sm:text-2xl lg:text-3xl text-center pt-2 font-bold tracking-widest" id={introTitleId}
                style={{
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: '2rem',
                    color: introTitleColor,
                }}>
                {typing && (
                    <ReactTyped
                        strings={[introTitle]}
                        typeSpeed={40}
                        startDelay={1200}
                        showCursor={true}
                    />
                )}
            </h5>
            <div data-aos="fade-up" data-aos-delay="3000" className="container mb-[3rem]">
                <p className="text-primaryText text-xs sm:text-base lg:text-lg text-gray-500 pt-3 lg:pt-6 px-[2rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[9rem] text-justify"
                    id={introContentId}
                    style={{
                        fontFamily: '"Lora", serif',
                        lineHeight: '1.9rem',
                        maxHeight: isExpanded ? 'none' : 'calc(2rem * 9)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                        WebkitLineClamp: isExpanded ? 'none' : '9',
                    }}>
                    {introContent}
                </p>
                {!isExpanded && (
                    <div className="text-end pr-7">
                        <button onClick={handleExpandClick} className="text-highlight text-[0.5rem] sm:text-xs lg:hidden hover:text-black">
                            Read more...
                        </button>
                    </div>
                )}
            </div>

        </>
    );
};

export default SectionIntro;
