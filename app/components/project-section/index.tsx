import React from "react";
import SectionIntro from '../section-intro';
import { BentoGrid, BentoGridItem } from './bento-grid';

const Project = () => {

    const items = [
        {
            title: "Protfolio Page",
            description: "A sleek personal portfolio page built with Next.js, featuring React, TypeScript, JavaScript, and Tailwind CSS for responsive design, with MongoDB as the backend. Hosted on Vercel for seamless deployment and performance.",
            imageStatic: '/images/Portfolio.png',
            imageGif: '/images/Portfolio.gif',
            elements: ['React', 'Typescript', 'Javascript', 'Tailwind', 'Mongodb', 'Vercel']
        },
        {
            title: "Barbie Gym",
            description: "Barbie Gym's landing page is the start of an expansive project, poised to evolve into a comprehensive login portal for a fitness center in Japan, blending T3 tech with intuitive design.",
            imageStatic: '/images/Barbie.png',
            imageGif: '/images/Barbie.gif',
            elements: ['React', 'Typescript', 'Javascript', 'Tailwind', 'Mysql', 'Prisma', 'Vercel']
        },
    ];

    return (
        <section className="bg-gray-500" id="gallery-section">
            <div className="container mx-auto py-[5rem] lg:py-[6rem] overflow-hidden" id="about-section-content-container">
                <SectionIntro
                    sectionTitle='projects'
                    introTitle="Projects I've Breathed Life Into..."
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
                            elements={item.elements}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Project;