'use client'

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";

interface IntroTextProps {
    introTitle: string;
    introSubTitle: string;
    introText: string;
    introSubTitleColor: string;
}


const SectionIntro: React.FC<IntroTextProps> = ({
    introTitle,
    introSubTitle,
    introSubTitleColor,
    introText,
}) => {

    const [typing, setTyping] = useState(false);
    const h5Ref = useRef(null);
    const dynamicClassName = introSubTitleColor;

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

    return (
        <>
            <h2 data-aos="fade-up" className="text-highlight uppercase font-bold text-base tracking-widest text-center" id="about-section-title"
                style={{
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 0.565,
                    letterSpacing: '.2rem'
                }}>
                {introTitle}
            </h2>
            <h5 ref={h5Ref} className="text-3xl text-center pt-2 font-bold tracking-widest" id="about-intro-title"
                style={{
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: '2rem',
                    color: introSubTitleColor,
                }}>
                {typing && (
                    <ReactTyped
                        strings={[introSubTitle]}
                        typeSpeed={40}
                        startDelay={1200}
                        showCursor={true}
                    />
                )}
            </h5>
            <div data-aos="fade-up" data-aos-delay="3000" className="container mb-[3rem]">
                <p className="text-left text-lg text-gray-500 pt-6 px-[15rem]" id="about-intro-content"
                    style={{
                        fontFamily: '"Lora", serif',
                        lineHeight: '1.9rem'
                    }}>
                    {introText}
                </p>
            </div>
        </>
    );
};

export default SectionIntro;
