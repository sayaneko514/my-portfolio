import React from 'react';
import Image from 'next/image';
import { PROFILE_IMAGE_PATH } from '@/app/constants/path';

const ProfilePicture = () => {
    return (
        <>
            <Image className="mx-auto w-24 h-24 rounded-full transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200" src={PROFILE_IMAGE_PATH} alt="Profile Picture" width="384" height="512" id="about-profile-picture" />
        </>
    );
};

export default ProfilePicture;