import React from 'react';
import { ReactTyped } from "react-typed";

interface HelloWorldProps {
    startTyping: boolean;
    onComplete: () => void;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ startTyping, onComplete }) => {
    return (
        <h5 className="text-highlight uppercase font-bold text-2xl mb-0"
            id="intro-hello-world"
            style={{
                fontFamily: '"Poppins", sans-serif',
                lineHeight: 1.565,
                letterSpacing: '.3rem'
            }}>
            {startTyping && (
                <ReactTyped
                    strings={["Hello, World!"]}
                    typeSpeed={80}
                    showCursor={false}
                    onComplete={onComplete}
                />
            )}
        </h5>
    );
};

export default HelloWorld;
