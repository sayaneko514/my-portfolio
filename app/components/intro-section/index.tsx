'use client'

import React, { useState } from 'react';
import IntroBackground from './background-block';
import HelloWorld from './hello-world';
import Name from './name-block';
import TitleList from './title-list';
import AboutMeButton from './about-button';
import SocialMediaList from './social-list';


interface IntroProps {
    children?: React.ReactNode;
}

const Intro = ({ children }: IntroProps) => {

    const [startFirstTyped] = useState(true);
    const [startSecondTyped, setStartSecondTyped] = useState(false);
    const [startThirdTyped, setStartThirdTyped] = useState(false);

    const [showItem, setItem] = useState(false);

    const onCompleteFirstTyped = () => {
        setStartSecondTyped(true);
    };

    const onCompleteSecondTyped = () => {
        setStartThirdTyped(true);
        setTimeout(() => {
            setItem(true);
        }, 600);
    };

    const backgroundImage = '/images/intro_bg.jpg';

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center" id="intro-section">
            <div className="absolute top-0 left-0 w-full h-full" id="intro-background-container">
                <IntroBackground />
            </div>
            <div className="absolute w-full h-full bg-[#111111] opacity-80" id="intro-background-filter"></div>
            <div className="z-20 relative flex flex-col justify-center items-center" style={{ transform: 'translateY(-2.1rem)' }} id="intro-content-container">
                <HelloWorld startTyping={startFirstTyped} onComplete={onCompleteFirstTyped} />
                <Name startSecondTyped={startSecondTyped} onCompleteSecondTyped={onCompleteSecondTyped} />
                <TitleList showTitle={showItem} />
                <AboutMeButton showButton={showItem} />
            </div>
            <SocialMediaList />
        </section >
    );
};

export default Intro;