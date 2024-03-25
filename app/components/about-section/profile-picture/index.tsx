import React from 'react';
import Image from 'next/image';

interface ProfilePictureProps {
    image: string;
    alt: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
    image,
    alt
}) => {
    return (
        <>
            <Image className="w-24 h-24 rounded-full transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200" src="/images/profile.jpg" alt="Profile picture" width="384" height="512" />
        </>
    );
};

export default ProfilePicture;