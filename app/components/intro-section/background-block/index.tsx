import React from 'react';
import Image from 'next/image';
import { INTRO_BACKGROUND_IMAGE_PATH } from '@/app/constants/path';

const IntroBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full" id="intro-background">
            <Image
                src={INTRO_BACKGROUND_IMAGE_PATH}
                alt="Intro Background"
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