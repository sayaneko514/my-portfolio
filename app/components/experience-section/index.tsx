import React from 'react';
import SectionIntro from '../section-intro';
import TimeLine from './timeline-module';

const Experience = () => {
    return (
        <section className="bg-gray-200" id="experience-section">
            <div className="container mx-auto py-[5rem] lg:py-[6rem]" id="experience-section-content-container">
                <SectionIntro
                    sectionTitle='experience'
                    introTitle='More Regarding My Credentials...'
                    introTitleColor='black'
                    introContent='Tech graduate specializing in Information Technology with extensive hands-on experience as a SDET and web development. Proficient in test automation and well-versed in Agile methodologies and CI/CD practices. Skilled in a variety of programming languages and experienced in implementing cutting-edge solutions to enhance project outcomes.' />
                <h5 className="text-highlight text-lg sm:text-2xl lg:text-3xl text-center pt-2 font-bold tracking-widest pb-[4rem] md:pb-[5rem]"
                    id="work-timeline-title"
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: '2rem'
                    }}>Work Experience
                </h5>
                <TimeLine role="Role" roleType="Role Type" companyName="Company Name" location="Geo Location" startDate="20xx-xx" endDate="20xx-xx"
                    description="Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt." />
                <TimeLine role="Role" roleType="Role Type" companyName="Company Name" location="Geo Location" startDate="20xx-xx" endDate="20xx-xx"
                    description="Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt." />
            </div>
        </section>
    );
};

export default Experience;