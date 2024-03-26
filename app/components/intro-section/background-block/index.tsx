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
        <div className="absolute top-0 left-0 w-full h-full" id="intro-background">
            <Image
                src={image}
                alt={alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center bottom"
                quality={100}
                priority={true}
            />
        </div>
    );
};

export default IntroBackground;