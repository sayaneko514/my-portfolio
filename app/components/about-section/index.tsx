import AboutContent from './about-content';
import SectionIntro from '../section-intro';

const About = () => {
    return (
        <section id="about-section">
            <div className="container mx-auto py-[5rem] lg:py-[6rem]" id="about-section-content-container">
                <SectionIntro
                    sectionTitle='about'
                    introTitle='A Little Something About Myself...'
                    introTitleColor='black'
                    introContent='My name is Rui Tang, but you could call me Terry, I&apos;m a tech enthusiast with a B.Tech in Information Technology. My adventure in the tech landscape is filled with stories of tackling challenges head-on, from streamlining software processes at renowned firms to diving into projects that spark innovation. I thrive on finding new tasks that push my limits, much like assembling this portfolio webpage. It&apos;s not just about coding for me; it&apos;s about connecting, learning, and growing. Each project, whether it&apos;s enhancing software pipelines or developing a smart garbage management system, is a step towards understanding the harmony between technology and practicality. I&apos;m on a continuous journey of exploration and improvement, always seeking out the next challenge with a warm smile and an eager mind, ready to turn the complex into the beautifully simple.' />
                <AboutContent />
            </div>
        </section>
    );
};

export default About;