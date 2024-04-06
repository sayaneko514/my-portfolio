'use client'

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface TimeLineProps {
    programName: string;
    programType: string;
    schoolName: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    url: string;
}

const EducationTimeLine: React.FC<TimeLineProps> = ({
    programName,
    programType,
    schoolName,
    location,
    startDate,
    endDate,
    description,
    url

}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxHeight = isExpanded ? '1000px' : '160px';

    const toggleExpandText = () => setIsExpanded(!isExpanded);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative grid grid-cols-4 lg:grid-cols-7" id="education=time-line-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-span-4 order-3 lg:col-span-4 pl-[4rem] md:pl-[10rem] lg:pl-0 pr-4 justify-center" id="left-column-container">
                <h3 className="text-xs sm:text-sm md:text-base uppercase font-bold tracking-widest text-center lg:text-right"
                    id="program-name"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{programName}
                </h3>
                <div className="text-right" id="program-type-container">
                    <h5 className="text-sm text-slate-600 font-bold hidden lg:inline"
                        id="program-type"
                        style={{
                            fontFamily: '"Poppins", sans-serif',
                            lineHeight: 1.5,
                            letterSpacing: '.2rem'
                        }}>{programType}
                    </h5></div>
                <p className="text-xs md:text-sm text-slate-500 text-center pr-4 lg:pr-0 lg:text-right mt-4 1440:mb-[4rem] transition-opacity duration-400"
                    id="program-description"
                    style={{
                        fontFamily: '"Lora", serif',
                        lineHeight: '1.9rem',
                        maxHeight: maxHeight,
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out',
                    }}>{description}
                </p>
                {description.length > 270 && (
                    <div className="text-center text-highlight mb-[4rem] text-[0.65rem] sm:text-xs md:text-sm lg:text-base 1440:hidden">
                        <button onClick={toggleExpandText}>
                            {isExpanded ? "Show Less " : "Show More "}
                            {isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </button>
                    </div>
                )}
            </div>
            <div className="absolute inset-y-0 w-full col-start-1 col-end-2 lg:col-start-5 lg:col-end-6" id="time-line" data-aos="fade-up" data-aos-delay="400">
                <div className="h-full w-px bg-slate-600 mx-auto"></div>
            </div>
            <div className="col-span-1 order-1 lg:order-3" id="education-button-container" data-aos="fade-up" data-aos-delay="400">
                <Link href={url}>
                    <button
                        className="flex mx-auto items-center justify-center p-1 rounded-full bg-highlight text-white inline-block drop-shadow-xl transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 hover:bg-slate-600 duration-200"
                        id="education-button"
                        style={{ width: '50px', height: '50px' }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                    >
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </button>
                </Link>
            </div>
            <div className="col-span-4 order-2 lg:col-span-2 pl-[4rem] md:pl-[10rem] lg:pl-0 pr-4 lg:order-3 justify-center" id="right-column-container" data-aos="fade-up" data-aos-delay="600">
                <h3 className="text-xs sm:text-sm md:text-base uppercase font-bold tracking-widest text-center lg:text-left"
                    id="school-name"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}
                >{schoolName}
                </h3>
                <h5 className="text-sm text-slate-600 text-center lg:text-left font-bold hidden lg:inline"
                    id="school-location"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{location}
                </h5>
                <p className="text-[0.6rem] md:text-xs text-slate-500 text-center lg:text-left py-2 lg:pr-[30px] 1440:pr-[40px] transition-opacity duration-400"
                    id="program-duration"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{startDate} to {endDate}
                </p>
            </div>
        </div>
    )
}

export default EducationTimeLine;