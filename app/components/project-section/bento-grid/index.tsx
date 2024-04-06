'use client'

import { cn } from '@/app/utils/cn';
import React from 'react';

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    imageStatic,
    imageGif,
    icons,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    imageStatic?: string;
    imageGif?: string;
    icons?: [React.ReactNode];
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-gray-500 border border-white justify-between flex flex-col space-y-4 overflow-hidden",
                className
            )}
        >
            <div
                id="project-cover"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white overflow-hidden"

            >
                <img
                    id="project-cover-image"
                    className="rounded-md w-full object-cover transition duration-300"
                    src={isHovered ? imageGif : imageStatic}
                    alt="card"
                    loading="lazy"
                />
            </div>
            <div
                id="project-icons"
                className="group-hover/bento:translate-x-2 transition duration-200">
                {icons && icons.map((icon, index) => (
                    <div key={index} className="flex justify-start items-center space-x-1 text-slate-300">
                        {icon}
                    </div>
                ))}
                <div
                    id="projrect-title"
                    className="uppercase font-bold text-highlight mb-2 mt-2"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.1rem'
                    }}>{title}
                </div>
                <div
                    id="project-description"
                    className="font-normal text-white text-xs"
                >
                    {description}
                </div>
            </div>
        </div>
    );
};
