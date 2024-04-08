'use client'

import { cn } from '@/app/utils/cn';
import React, { useState } from 'react';
import Image from 'next/image';
import CardModal from '../card-modal';
import { StickyScroll } from '../sticky-scroll';
import TooltipIcon from '../icon-tooltip';
import { FaLink } from "react-icons/fa6";
import {
    IconBrandMysql,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandPython,
    IconBrandKotlin,
    IconBrandFirebase,
    IconBrandAndroid,
    IconBrandUbuntu,
} from "@tabler/icons-react";
import {
    SiOpencv,
    SiYolo,
    SiRaspberrypi,
} from "react-icons/si";
import {
    BiLogoTailwindCss,
    BiLogoJavascript,
    BiLogoTypescript,
    BiLogoMongodb,
    BiLogoJava,
} from "react-icons/bi";

const iconMapping: { [key: string]: { icon: React.ElementType, label: string, className: string } } = {
    mySQL: { icon: IconBrandMysql, label: "mySQL", className: "h-4 w-4" },
    NextJs: { icon: IconBrandNextjs, label: "Next.js", className: "h-4 w-4" },
    Typescript: { icon: BiLogoTypescript, label: "TypeScript", className: "h-4 w-4" },
    Javascript: { icon: BiLogoJavascript, label: "JavaScript", className: "h-4 w-4" },
    React: { icon: IconBrandReact, label: "React", className: "h-4 w-4" },
    Mongodb: { icon: BiLogoMongodb, label: "MongoDB", className: "h-4 w-4" },
    Tailwind: { icon: BiLogoTailwindCss, label: "Tailwind CSS", className: "h-4 w-4" },
    Python: { icon: IconBrandPython, label: "Python", className: "h-4 w-4" },
    Opencv: { icon: SiOpencv, label: "OpenCV", className: "h-3.5 w-3.5" },
    Yolo: { icon: SiYolo, label: "YOLO", className: "h-5 w-5" },
    Raspberrypi: { icon: SiRaspberrypi, label: "Raspberry Pi", className: "h-3.5 w-3.5" },
    Linux: { icon: IconBrandUbuntu, label: "Linux", className: "h-4 w-4" },
    Android: { icon: IconBrandAndroid, label: "Android", className: "h-4 w-4" },
    Kotlin: { icon: IconBrandKotlin, label: "Kotlin", className: "h-4 w-4" },
    Firebase: { icon: IconBrandFirebase, label: "Firebase", className: "h-4 w-4" },
    Java: { icon: BiLogoJava, label: "Java", className: "h-4 w-4" },
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

type DetailItem = [string, string, string];

export const BentoGridItem = ({
    className,
    projectName,
    description,
    imageName,
    elements,
    startDate,
    endDate,
    detail,
    link,
}: {
    className?: string;
    projectName: string;
    description?: string;
    imageName: string;
    elements: string[];
    startDate: string;
    endDate?: string;
    detail: DetailItem[];
    link: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageStatic = `/images/${imageName}_thumbnail.png`;
    const imageGif = `/images/${imageName}_thumbnail.gif`;
    const imageKey = isHovered ? 'gif' : 'static';

    const projectsDetails = detail.map((item) => ({
        title: item[0],
        description: item[1],
        content: (
            <div className="flex flex-col items-center justify-center w-full h-full text-black">
                <div className="flex justify-center w-full">
                    <Image
                        src={item[2]}
                        width={500}
                        height={500}
                        alt={`${item[0]} image`}
                    />
                </div>
                <div>
                    <div
                        id="project-timeline"
                        className="flex justify-center text-black pt-4"
                        style={{
                            fontFamily: '"Poppins", sans-serif',
                            lineHeight: 1.5,
                            letterSpacing: '.2rem'
                        }}>
                        {startDate} - {endDate}
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaLink className="h-6 w-6 pl-2 drop-shadow-xl transition ease-in-out delay-50 hover:scale-110 hover:text-highlight" />
                        </a>
                    </div >
                    <div className="flex justify-center w-full pt-2 space-x-1 text-gray-700 scale-125">
                        {elements?.map((elementKey, index) => {
                            const Icon = iconMapping[elementKey].icon;
                            const label = iconMapping[elementKey].label;
                            const className = iconMapping[elementKey].className;
                            return (
                                <TooltipIcon
                                    key={index}
                                    IconComponent={Icon}
                                    label={label}
                                    iconProps={{ className }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        ),
    }));

    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-gray-500 border border-white justify-between flex flex-col space-y-4 overflow-hidden",
                className

            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsModalOpen(true)}
        >
            <div
                id="project-cover"
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
                <CardModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    content={<StickyScroll
                        content={projectsDetails}
                        contentClassName="custom-class-for-sticky-scroll-content"
                    />}
                />
            </div>
            <div
                id="project-icons"
                className="group-hover/bento:translate-x-2 transition duration-200">

                <div className="flex justify-start items-center space-x-1 text-slate-300">
                    {elements?.map((elementKey, index) => {
                        const Icon = iconMapping[elementKey].icon;
                        const label = iconMapping[elementKey].label;
                        const className = iconMapping[elementKey].className;
                        return (
                            <TooltipIcon
                                key={index}
                                IconComponent={Icon}
                                label={label}
                                iconProps={{ className }}
                            />
                        );
                    })}
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
