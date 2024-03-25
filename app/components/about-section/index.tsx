import AboutIntro from './about-intro';
import AboutContent from './about-content';

const About = () => {
    return (
        <section className="container mx-auto px-4 py-[8rem]" id="about">
            <AboutIntro />
            <AboutContent />
        </section>
    );
};

export default About;