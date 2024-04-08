'use client'

import React, { useState, useEffect } from "react";
import SectionIntro from '../section-intro';
import { BentoGrid, BentoGridItem } from './bento-grid';

type DetailItem = [string, string, string];

interface ProjectList {
    projectName: string;
    description: string;
    elements: string[];
    startDate: string;
    hasComplete: boolean;
    endDate: string;
    imageName: string;
    detail: DetailItem[]
    link: string;
}

const Project = () => {
    const [projectList, setProjectList] = useState<ProjectList[]>([]);


    useEffect(() => {
        const fetchProjectList = async () => {
            try {
                const response = await fetch('/api/get-project-list');
                const data = await response.json();
                setProjectList(data);
            } catch (error) {
                console.log("Failed to fetch project list:", error);
            }
        };

        fetchProjectList();
    }, []);

    return (
        <section className="bg-gray-500" id="gallery-section">
            <div className="container mx-auto py-[5rem] lg:py-[6rem] overflow-hidden" id="about-section-content-container">
                <SectionIntro
                    sectionTitle='projects'
                    introTitle="Projects I've Breathed Life Into..."
                    introTitleColor='white'
                    introContent='' />
                <BentoGrid className="max-w-4xl mx-auto">
                    {projectList.map((project, index) => (
                        <BentoGridItem
                            key={index}
                            projectName={project.projectName}
                            description={project.description}
                            imageName={project.imageName}
                            elements={project.elements}
                            className={index === 3 || index === 6 ? "md:col-span-2" : ""}
                            startDate={project.startDate}
                            endDate={project.hasComplete ? project.endDate : "Present"}
                            detail={project.detail}
                            link={project.link}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Project;