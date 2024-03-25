'use client'

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";

const AboutIntro = () => {
    const [typing, setTyping] = useState(false);
    const h5Ref = useRef(null);

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
            <h2 data-aos="fade-up" className="text-highlight uppercase font-bold text-sm tracking-widest text-center" id="about-section-title"
                style={{
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 0.565,
                    letterSpacing: '.2rem',
                    textShadow: '0 0 6px rgba(0, 0, 0, 0.2)'
                }}>
                About
            </h2>
            <h5 ref={h5Ref} className="text-2xl text-center pt-2 font-bold tracking-widest" id="about-intro-title"
                style={{
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: '2rem',
                    textShadow: '0 0 6px rgba(0, 0, 0, 0.2)'
                }}>
                {typing && (
                    <ReactTyped
                        strings={['Little Something about myself...']}
                        typeSpeed={40}
                        startDelay={1200}
                        showCursor={true}
                    />
                )}
            </h5>
            <div data-aos="fade-up" data-aos-delay="3000" className="container mb-[3rem]">
                <p className="text-left text-gray-500 pt-6 px-[15rem]" id="about-intro-content"
                    style={{
                        fontFamily: '"Lora", serif',
                        lineHeight: '1.9rem',
                        textShadow: '0 0 6px rgba(0, 0, 0, 0.2)'
                    }}>
                    My name is Rui Tang, but you could call me Terry, I'm a tech enthusiast with a B.Tech in Information Technology. My adventure in the tech landscape is filled with stories of tackling challenges head-on, from streamlining software processes at renowned firms to diving into projects that spark innovation. I thrive on finding new tasks that push my limits, much like assembling this portfolio webpage. It's not just about coding for me; it's about connecting, learning, and growing. Each project, whether it's enhancing software pipelines or developing a smart garbage management system, is a step towards understanding the harmony between technology and practicality. I'm on a continuous journey of exploration and improvement, always seeking out the next challenge with a warm smile and an eager mind, ready to turn the complex into the beautifully simple.
                </p>
            </div>
        </>
    );
};

export default AboutIntro;
