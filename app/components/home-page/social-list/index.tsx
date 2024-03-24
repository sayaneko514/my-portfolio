import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

const SocialMediaList = () => {
    return (
        <ul className="absolute inset-x-0 bottom-0 pb-10 flex justify-center space-x-10 text-white text-4xl" id="social">
            <li className="inline-block p-0">
                <a href="https://github.com/sayaneko514" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li className="inline-block p-0">
                <a href="https://linkedin.com/in/terry-tang-2600261b3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li className="inline-block p-0">
                <a href="https://discord.com/users/sayaneko8179" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
            </li>
        </ul>
    );
};

export default SocialMediaList;
