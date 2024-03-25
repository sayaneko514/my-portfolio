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
            <Image className="w-24 h-24 rounded-full" src="/images/profile.jpg" alt="Profile picture" width="384" height="512" />
        </>
    );
};

export default ProfilePicture;