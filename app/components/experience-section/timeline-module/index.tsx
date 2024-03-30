'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

interface TimeLineProps {
    role: string;
    roleType: string;
    companyName: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

const TimeLine: React.FC<TimeLineProps> = ({
    role,
    roleType,
    companyName,
    location,
    startDate,
    endDate,
    description

}) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <div className="relative grid grid-cols-7 items-start overflow-hidden" id="time-line-container">
            <div className="col-span-3 text-right pr-4" id="left-column-container">
                <h3 className="text-xs sm:text-sm md:text-base uppercase font-bold tracking-widest text-right"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}
                    id="role-title">{role}
                </h3>
                <h5 className="text-xs md:text-sm text-slate-600 text-right font-bold"
                    id="role-duration"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{roleType}
                </h5>
                <p className={`text-xs md:text-sm text-slate-500 text-right mt-4 transition-opacity duration-400 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    id="role-duration"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{startDate} to {endDate}
                </p>
            </div>
            <div className="col-span-1 text-center z-10">
                <button
                    onClick={toggleVisibility}
                    className="mx-auto rounded-full p-3 bg-highlight text-white inline-block drop-shadow-xl transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 hover:bg-black duration-200"
                >
                    <FontAwesomeIcon icon={faBriefcase} size="lg" />
                </button>
            </div>
            <div className="col-span-3 pl-4" id="right-column-container">
                <h3 className="text-xs sm:text-sm md:text-base uppercase font-bold tracking-widest text-left"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}
                    id="company-name">{companyName}
                </h3>
                <h5 className="text-xs md:text-sm text-slate-600 text-left font-bold"
                    id="role-description"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{location}
                </h5>
                <p className={`text-xs md:text-sm text-slate-500 text-left mt-4 mb-6 transition-opacity duration-400 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    id="role-duration"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                        letterSpacing: '.2rem'
                    }}>{description}
                </p>
            </div>
            <div className="absolute inset-0 col-span-9">
                <div className="h-full border-r border-slate-600 mx-auto" style={{ width: '1px' }}></div>
            </div>
        </div>
    )
}

export default TimeLine;