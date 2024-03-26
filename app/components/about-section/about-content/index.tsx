import ResumeDownload from "../resume-button";
import ProfilePicture from "../profile-picture";
import DetailTitle from "./detail-title-module";
import DetailSubTitle from "./detail-module";

const AboutContent = () => {

    const profilePicture = '/images/profile.jpg';

    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="2800" id="about-left-detail-container">
                    <DetailTitle title="profile" />
                    <div className="flex items-start mt-7" id="about-profile-picture-container">
                        <ProfilePicture />
                    </div>
                    <ul className="list-none" id="about-left-list">
                        <li>
                            <DetailSubTitle title="full name" hasTextContent={true} textContent="Rui Tang" />
                        </li>
                        <li>
                            <DetailSubTitle title="location" hasTextContent={true} textContent="Vancouver, Canada" />
                        </li>
                        <li>
                            <DetailSubTitle title="email" hasTextContent={true} textContent="Sayaneko514@hotmail.com" />
                        </li>
                        <li>
                            <DetailSubTitle title="resume/cv" hasTextContent={false} />
                            <div className="text-center" id="resume-download-button-container">
                                <ResumeDownload />
                            </div>
                        </li>

                    </ul>
                </div>

                <div className="w-full md:w-1/2 mt-12 md:mt-0" data-aos="fade-left" data-aos-delay="2800" id="about-right-detail-container">
                    <DetailTitle title="skills" />
                    <ul className="list-none" id="about-right-list">
                        <li>
                            <DetailSubTitle title="languages" hasTextContent={true} textContent="Java/C#/Kotlin, JavaScript/TypeScript, Python, HTML/CSS, C++, SQL, YAML" />
                        </li>
                        <li>
                            <DetailSubTitle title="technologies/tools" hasTextContent={true} textContent="Azure DevOps, Confluence, Git, Jira, Node.js, TestRail, AWS, Docker, Jenkins" />
                        </li>
                        <li>
                            <DetailSubTitle title="frameworks" hasTextContent={true} textContent="Next.js, React.jS, Angular.js, Express.jS, T3, Cypress, Selenium/Appium, Espressom, JUnit, PlayWright" />
                        </li>
                        <li>
                            <DetailSubTitle title="core competencies" hasTextContent={true} textContent="Web Development, Software Development, Software QA, Test Automation, Defect Tracking, Agile Methodologies, CI/CD, SDLC, Team Player, Result-driven" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutContent;