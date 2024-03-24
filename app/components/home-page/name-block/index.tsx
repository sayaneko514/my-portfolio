import React from 'react';
import { ReactTyped } from "react-typed";

interface NameProps {
    startSecondTyped: boolean;
    onCompleteSecondTyped: () => void;
}

const Name: React.FC<NameProps> = ({ startSecondTyped, onCompleteSecondTyped }) => {
    return (
        <h1 className={startSecondTyped ? "text-white uppercase tracking-widest font-bold pt-3 text-6xl mb-2" : "hidden"}
            style={{
                fontFamily: '"Lora", serif',
                lineHeight: '2.4rem',
                textShadow: '0 0 6px rgba(0, 0, 0, 0.2)'
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
