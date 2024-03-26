import React from 'react';
import { ReactTyped } from "react-typed";

interface NameProps {
    startSecondTyped: boolean;
    onCompleteSecondTyped: () => void;
}

const Name: React.FC<NameProps> = ({ startSecondTyped, onCompleteSecondTyped }) => {
    return (
        <h1 className={startSecondTyped ? "text-white uppercase text-center tracking-widest font-bold pt-3 text-3xl sm:text-5xl md:text-6xl mb-2" : "hidden"}
            id="intro-name"
            style={{
                fontFamily: '"Lora", serif',
                lineHeight: '2.4rem'
            }}>
            {startSecondTyped && (
                <ReactTyped
                    strings={["I'm Rui Tang"]}
                    typeSpeed={80}
                    showCursor={true}
                    onComplete={onCompleteSecondTyped}
                />
            )}
        </h1>
    );
};

export default Name;
