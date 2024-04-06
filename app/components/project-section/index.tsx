import React from "react";
import SectionIntro from '../section-intro';
import { BentoGrid, BentoGridItem } from './bento-grid';
import {
    IconBrandTypescript,
    IconBrandJavascript,
    IconBrandReact,
    IconBrandMongodb,
    IconBrandPrisma,
    IconBrandMysql,
    IconBrandTailwind,
    IconBrandVercel,
} from "@tabler/icons-react";

const Project = () => {

    const items = [
        {
            title: "Protfolio Page",
            description: "A sleek personal portfolio page built with Next.js, featuring React, TypeScript, JavaScript, and Tailwind CSS for responsive design, with MongoDB as the backend. Hosted on Vercel for seamless deployment and performance.",
            imageStatic: '/images/portfolio.png',
            imageGif: '/images/portfolio.gif',
            icon: [
                <IconBrandTypescript className="h-4 w-4" />,
                <IconBrandJavascript className="h-4 w-4" />,
                <IconBrandReact className="h-4 w-4" />,
                <IconBrandTailwind className="h-4 w-4" />,
                <IconBrandMongodb className="h-4 w-4" />,
                <IconBrandVercel className="h-4 w-4" />,
            ]
        },
        {
            title: "Barbie Gym",
            description: "Barbie Gym's landing page is the start of an expansive project, poised to evolve into a comprehensive login portal for a fitness center in Japan, blending T3 tech with intuitive design.",
            imageStatic: '/images/barbie.png',
            imageGif: '/images/barbie.gif',
            icon: [
                <IconBrandTypescript className="h-4 w-4" />,
                <IconBrandJavascript className="h-4 w-4" />,
                <IconBrandReact className="h-4 w-4" />,
                <IconBrandTailwind className="h-4 w-4" />,
                <IconBrandMysql className="h-4 w-4" />,
                <IconBrandPrisma className="h-4 w-4" />,
            ]
        },
    ];

    return (
        <section className="bg-gray-500" id="gallery-section">
            <div className="container mx-auto py-[5rem] lg:py-[6rem] overflow-hidden" id="about-section-content-container">
                <SectionIntro
                    sectionTitle='projects'
                    introTitle='Things That I Had Worked On...'
                    introTitleColor='white'
                    introContent='' />
                <BentoGrid className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            imageStatic={item.imageStatic}
                            imageGif={item.imageGif}
                            icons={[item.icon]}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Project;