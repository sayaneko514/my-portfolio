import ResumeDownload from "../resume-button";
import ProfilePicture from "../profile-picture";
import DetailTitle from "./detail-title-module";
import DetailSubTitle from "./detail-module";
import QueryList from "./query-module";

const AboutContent = () => {

    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 px-2" data-aos="fade-right" data-aos-delay="400" id="about-left-detail-container">
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

                <div className="w-full md:w-1/2 mt-12 md:mt-0 px-2" data-aos="fade-left" data-aos-delay="400" id="about-right-detail-container">
                    <DetailTitle title="skills" />
                    <ul className="list-none" id="about-right-list">
                        <li><QueryList query="languages" api="/api/get-language-list" /></li>
                        <li><QueryList query="technologies" api="/api/get-technology-list" /></li>
                        <li><QueryList query="tools" api="/api/get-tool-list" /></li>
                        <li><QueryList query="frameworks" api="/api/get-framework-list" /></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutContent;