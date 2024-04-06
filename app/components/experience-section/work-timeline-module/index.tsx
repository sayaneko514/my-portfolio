'use client'

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TimeLineProps {
    role: string;
    roleType: string;
    companyName: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    url: string;
}

const WorkTimeLine: React.FC<TimeLineProps> = ({
    role,
    roleType,
    companyName,
    location,
    startDate,
    endDate,
    description,
    url

}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const maxHeight = isExpanded ? '1000px' : '265px';

    const toggleExpandText = () => setIsExpanded(!isExpanded);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);


    return (
        <div className="relative grid grid-cols-4 lg:grid-cols-7 items-start" id="work-time-line-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-span-4 lg:col-span-2 order-2 lg:order-1 text-right pl-[4rem] md:pl-[10rem] lg:pl-0 pr-4" id="left-column-container">
                <h3 className="text-xs sm:text-sm md:text-base uppercase font-bold tracking-widest text-center lg:text-right"
                    id="role-title"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{role}
                </h3>
                <h5 className="text-sm text-slate-600 text-center lg:text-right font-bold hidden lg:inline"
                    id="role-type"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{roleType}
                </h5>
                <p className="text-[0.6rem] md:text-xs text-slate-500 text-center lg:text-right transition-opacity duration-400 py-2"
                    id="role-duration"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{startDate} to {endDate}
                </p>
            </div>
            <div className="absolute inset-y-0 w-full col-start-1 col-end-2 lg:col-start-3 lg:col-end-4" id="time-line" data-aos="fade-up" data-aos-delay="400">
                <div className="h-full w-px bg-slate-600 mx-auto"></div>
            </div>
            <div className="col-span-1 order-1 lg:order-2 text-center" id="work-button-container" data-aos="fade-up" data-aos-delay="400">
                <Link href={url}>
                    <button
                        className="flex mx-auto items-center justify-center p-1 rounded-full bg-highlight text-white inline-block drop-shadow-xl transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 hover:bg-slate-600 duration-200"
                        id="work-button"
                        style={{ width: '50px', height: '50px' }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                    >
                        <FontAwesomeIcon icon={faBriefcase} />
                    </button>
                </Link>
            </div>
            <div className=" order-3 col-span-4 lg:order-3 pr-4 pl-[4rem] md:pl-[10rem] lg:pl-4" id="right-column-container" data-aos="fade-up" data-aos-delay="600">
                <h3 className="text-xs sm:text-sm md:text-base uppercase font-bold tracking-widest text-center lg:text-left"
                    id="company-name"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}
                >{companyName}
                </h3>
                <h5 className="text-sm text-slate-600 text-center lg:text-left font-bold hidden lg:inline"
                    id="company-location"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{location}
                </h5>
                <p className="text-xs md:text-sm text-slate-500 text-center lg:text-left mt-4 pr-[10px] sm:pr-[20px] md:pr-[25px] lg:pr-[30px] 1440:pr-[40px] 1440:mb-[4rem] transition-opacity duration-400"
                    id="role-description"
                    style={{
                        fontFamily: '"Lora", serif',
                        lineHeight: '1.9rem',
                        maxHeight: maxHeight,
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out',
                    }}>{description}
                </p>
                {description.length > 300 && (
                    <div className="text-center text-highlight mb-[4rem] text-[0.65rem] sm:text-xs md:text-sm lg:text-base 1440:hidden">
                        <button onClick={toggleExpandText}>
                            {isExpanded ? "Show Less " : "Show More "}
                            {isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WorkTimeLine;