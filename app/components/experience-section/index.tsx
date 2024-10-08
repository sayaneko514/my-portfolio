'use client'

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SectionIntro from '../section-intro';
import WorkTimeLine from './work-timeline-module';
import EducationTimeLine from './education-timeline-module';

interface WorkHistory {
    role: string;
    roleType: string;
    companyName: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    isCurrent: boolean;
    url: string;
}

interface EducationHistory {
    schoolName: string;
    location: string;
    programName: string;
    programType: string;
    startDate: string;
    endDate: string;
    hasComplete: boolean;
    url: string;
}

const Experience = () => {
    const [workHistory, setWorkHistory] = useState<WorkHistory[]>([]);
    const [educationHistory, setEducationHistory] = useState<EducationHistory[]>([]);

    const [isVisible1, setIsVisible1] = useState(true);
    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };

    const [isVisible2, setIsVisible2] = useState(true);
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };


    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        const fetchWorkHistory = async () => {
            try {
                const response = await fetch('/api/get-work-list');
                const data = await response.json();
                setWorkHistory(data);
            } catch (error) {
                console.log("Failed to fetch work history:", error);
            }
        };

        fetchWorkHistory();
    }, []);

    useEffect(() => {
        const fetchEducationHistory = async () => {
            try {
                const response = await fetch('/api/get-education-list');
                const data = await response.json();
                setEducationHistory(data);
            } catch (error) {
                console.log("Failed to fetch education history:", error);
            }
        };

        fetchEducationHistory();
    }, []);

    return (
        <section className="bg-gray-200 overflow-hidden" id="experience-section">
            <div className="container mx-auto py-[5rem] lg:py-[6rem]" id="experience-section-content-container">
                <SectionIntro
                    sectionTitle='experiences'
                    introTitle='More Regarding My Credentials...'
                    introTitleColor='black'
                    introContent='Tech graduate specializing in Information Technology with extensive hands-on experience as a SDET and web development. Proficient in test automation and well-versed in Agile methodologies and CI/CD practices. Skilled in a variety of programming languages and experienced in implementing cutting-edge solutions to enhance project outcomes.' />
                <h5 className="text-lg sm:text-2xl lg:text-3xl text-center pt-2 py-6 font-bold tracking-widest lg:pb-[5rem]"
                    id="work-timeline-title"
                    data-aos="fade-up" data-aos-delay="200"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: '2rem'
                    }}>Work Experiences
                    <button
                        onClick={toggleVisibility1}
                        id="work-history-toggle button"
                        className="pl-2"
                        style={{ width: '20px', height: '20px' }}>
                        {isVisible1 ? <FontAwesomeIcon icon={faEye}
                            className="text-slate-800 text-xs md:text-sm pl-2 drop-shadow transition ease-in-out delay-50 hover:-translate-y-1 hover:text-slate-500 duration-200" /> :
                            <FontAwesomeIcon icon={faEyeSlash}
                                className="text-slate-500 text-xs md:text-sm pl-2 drop-shadow transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:text-slate-800 duration-200" />
                        }
                    </button>
                </h5>
                {isVisible1 && (
                    <div
                        id="work-history"
                        className="transition-opacity duration-400"
                        style={{
                            opacity: isVisible1 ? '100' : '0',
                            transition: 'opacity 0.3s ease-in-out',
                        }}>
                        {workHistory.map((work, index) => (
                            <WorkTimeLine
                                key={index}
                                role={work.role}
                                roleType={work.roleType}
                                companyName={work.companyName}
                                location={work.location}
                                startDate={work.startDate}
                                endDate={work.isCurrent ? 'Current' : work.endDate}
                                description={work.description}
                                url={work.url}

                            />
                        ))}
                    </div>)}
                <h5 className="text-lg sm:text-2xl lg:text-3xl text-center font-bold tracking-widest py-6 md:py-[5rem]"
                    id="Education-timeline-title"
                    data-aos="fade-up" data-aos-delay="200"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: '2rem'
                    }}>Academic History
                    <button
                        onClick={toggleVisibility2}
                        id="work-history-toggle button"
                        className="pl-2"
                        style={{ width: '20px', height: '20px' }}>
                        {isVisible2 ?
                            <FontAwesomeIcon icon={faEye}
                                className="text-slate-800 text-xs md:text-sm pl-2 drop-shadow transition ease-in-out delay-50 hover:-translate-y-1 hover:text-slate-500 duration-200" /> :
                            <FontAwesomeIcon icon={faEyeSlash}
                                className="text-slate-500 text-xs md:text-sm pl-2 drop-shadow transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:text-slate-800 duration-200" />
                        }
                    </button>
                </h5>
                {isVisible2 && (
                    <div
                        id="work-history"
                        className="transition-opacity duration-400"
                        style={{
                            opacity: isVisible2 ? '100' : '0',
                            transition: 'opacity 0.3s ease-in-out',
                        }}>
                        {educationHistory.map((education, index) => (
                            <EducationTimeLine
                                key={index}
                                programName={education.programName}
                                programType={education.programType}
                                schoolName={education.schoolName}
                                location={education.location}
                                startDate={education.startDate}
                                endDate={education.hasComplete ? education.endDate : 'Present'}
                                url={education.url}
                            />
                        ))}
                    </div>)}
            </div>
        </section>
    );
};

export default Experience;