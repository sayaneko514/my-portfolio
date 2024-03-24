import React from 'react';
import Image from 'next/image';

interface IntroBackgroundProps {
    image: string;
    alt: string;
}

const IntroBackground: React.FC<IntroBackgroundProps> = ({
    image,
    alt
}) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <Image
                src={image}
                alt={alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center bottom"
                quality={100}
            />
        </div>
    );
};

export default IntroBackground;