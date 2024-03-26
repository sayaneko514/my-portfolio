import SectionIntro from '../section-intro';

const ExperienceIntro = () => {
    return (
        <section className="bg-gray-200" id="exp-section">
            <div className="container mx-auto px-4 py-[8rem]">
                <SectionIntro
                    sectionTitle='experience'
                    introTitle='More regarding my credentials...'
                    introTitleColor='black'
                    introContent='Tech grad with hands-on SDET, software development, and web development experience, adept in test automation, agile methodologies, and innovative project leadership.' />
            </div>
        </section>
    );
};

export default ExperienceIntro;