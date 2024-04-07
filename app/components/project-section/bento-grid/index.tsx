'use client'

import { cn } from '@/app/utils/cn';
import React from 'react';
import Image from 'next/image';


import {
    SiPrisma,
    SiOpencv,
    SiYolo,
    SiRaspberrypi,
    SiLinux,
    SiAndroid,
    SiKotlin,
} from "react-icons/si";

import {
    BiLogoTailwindCss,
    BiLogoJavascript,
    BiLogoTypescript,
    BiLogoReact,
    BiLogoMongodb,
    BiLogoPython,
    BiLogoJava,
    BiLogoFirebase
} from "react-icons/bi";

const iconMapping: { [key: string]: React.ReactNode | undefined } = {
    Typescript: <BiLogoTypescript className="h-4 w-4" />,
    Javascript: <BiLogoJavascript className="h-4 w-4" />,
    React: <BiLogoReact className="h-4 w-4" />,
    Mongodb: <BiLogoMongodb className="h-4 w-4" />,
    Prisma: <SiPrisma className="h-3 w-3" />,
    Tailwind: <BiLogoTailwindCss className="h-4 w-4" />,
    Python: <BiLogoPython className="h-4 w-4" />,
    Opencv: <SiOpencv className="h-3 w-3" />,
    Yolo: <SiYolo className="h-4 w-4" />,
    Raspberrypi: <SiRaspberrypi className="h-3 w-3" />,
    Linux: <SiLinux className="h-3 w-3" />,
    Android: <SiAndroid className="h-4 w-4" />,
    Kotlin: <SiKotlin className="h-3 w-3" />,
    Firebase: <BiLogoFirebase className="h-4 w-4" />,
    Java: <BiLogoJava className="h-4 w-4" />,
};



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
    projectName,
    description,
    imageName,
    elements,
}: {
    className?: string;
    projectName: string;
    description?: string;
    imageName: string;
    elements: string[];
}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const imageStatic = `/images/${imageName}_thumbnail.png`;
    const imageGif = `/images/${imageName}_thumbnail.gif`;
    const imageKey = isHovered ? 'gif' : 'static';

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
                <div key={imageKey} style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                        src={isHovered ? imageGif : imageStatic}
                        alt={`${projectName} cover`}
                        fill
                        style={{
                            objectFit: 'cover'
                        }}
                        className="rounded-md transition duration-300"
                    />
                </div>
            </div>
            <div
                id="project-icons"
                className="group-hover/bento:translate-x-2 transition duration-200">

                <div className="flex justify-start items-center space-x-1 text-slate-300">
                    {elements?.map((element, index) => (
                        <React.Fragment key={index}>
                            {iconMapping[element]}
                        </React.Fragment>
                    ))}
                </div>
                <div
                    id="projrect-title"
                    className="uppercase font-bold text-highlight mb-2 mt-2"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.1rem'
                    }}>{projectName}
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
