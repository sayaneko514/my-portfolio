import ResumeDownload from "../resume-button";
import ProfilePicture from "../profile-picture";

const AboutContent = () => {

    const profilePicture = 'images/profile.jpg';

    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap px-[14rem]">
                <div className="w-full md:w-1/2 p-4" data-aos="fade-right" data-aos-delay="2800">
                    <h3 className="text-xl uppercase font-bold text-sm tracking-widest"
                        style={{
                            fontFamily: '"Poppins", sans-serif',
                            lineHeight: '3rem',
                            letterSpacing: '.2rem'
                        }}>Profile
                    </h3>
                    <div className="flex items-start mt-7">
                        <ProfilePicture image={profilePicture} alt="Profile Picture" />
                    </div>
                    <ul className="list-none">
                        <li>
                            <p className="text-sm uppercase font-bold tracking-widest mt-5"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: '2.6rem',
                                    letterSpacing: '.2rem'
                                }}>FullName:
                            </p>
                            <p className="text-sm text-gray-500 tracking-widest"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: 2,
                                    letterSpacing: '.2rem'
                                }}>Rui Tang
                            </p>
                        </li>
                        <li>
                            <p className="text-sm uppercase font-bold tracking-widest mt-5"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: '2.6rem',
                                    letterSpacing: '.2rem'
                                }}>Location:
                            </p>
                            <p className="text-sm text-gray-500 tracking-widest"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: 2,
                                    letterSpacing: '.2rem'
                                }}>Vancouver, Canada
                            </p>
                        </li>
                        <li>
                            <p className="text-sm uppercase font-bold tracking-widest mt-5"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: '2.6rem',
                                    letterSpacing: '.2rem'
                                }}>Email:
                            </p>
                            <p className="text-sm text-gray-500 tracking-widest"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: 2,
                                    letterSpacing: '.2rem'
                                }}>Sayaneko514@hotmail.com
                            </p>
                        </li>
                        <li>
                            <p className="text-sm uppercase font-bold tracking-widest mt-5"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: '2.6rem',
                                    letterSpacing: '.2rem'
                                }}>Resume/CV:
                            </p>
                            <ResumeDownload />
                        </li>

                    </ul>
                </div>

                <div className="w-full md:w-1/2 p-4" data-aos="fade-left" data-aos-delay="2800">
                    <h3 className="text-xl uppercase font-bold text-sm tracking-widest"
                        style={{
                            fontFamily: '"Poppins", sans-serif',
                            lineHeight: '3rem',
                            letterSpacing: '.2rem'
                        }}>Skills
                    </h3>
                    <ul className="list-none">
                        <li>
                            <p className="text-sm uppercase font-bold tracking-widest mt-5"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: '2.6rem',
                                    letterSpacing: '.2rem'
                                }}>Languages:
                            </p>
                            <p className="text-sm text-gray-500 tracking-widest"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: 2,
                                    letterSpacing: '.2rem'
                                }}>Java/C#/Kotlin, JavaScript/TypeScript, Python, HTML/CSS, C++, SQL, YAML
                            </p>
                        </li>
                        <li>
                            <p className="text-sm uppercase font-bold tracking-widest mt-5"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: '2.6rem',
                                    letterSpacing: '.2rem'
                                }}>Technologies/Tools:
                            </p>
                            <p className="text-sm text-gray-500 tracking-widest"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: 2,
                                    letterSpacing: '.2rem'
                                }}>Azure DevOps, Confluence, Git, Jira, Node.js, TestRail, AWS, Docker, Jenkins
                            </p>
                        </li>
                        <li>
                            <p className="text-sm uppercase font-bold tracking-widest mt-5"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: '2.6rem',
                                    letterSpacing: '.2rem'
                                }}>Frameworks:
                            </p>
                            <p className="text-sm text-gray-500 tracking-widest"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: 2,
                                    letterSpacing: '.2rem'
                                }}>Next.js, React.jS, Angular.js, Express.jS, T3, Cypress, Selenium/Appium, Espressom, JUnit, PlayWright
                            </p>
                        </li>
                        <li>
                            <p className="text-sm uppercase font-bold tracking-widest mt-5"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: '2.6rem',
                                    letterSpacing: '.2rem'
                                }}>Core Competencies:
                            </p>
                            <p className="text-sm text-gray-500 tracking-widest"
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: 2,
                                    letterSpacing: '.2rem'
                                }}>Web Development, Software Development, Software QA, Test Automation, Defect Tracking, Agile Methodologies, CI/CD, SDLC, Team Player, Result-driven
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutContent;