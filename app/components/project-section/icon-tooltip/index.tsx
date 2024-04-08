'use client'

import React, { useState } from 'react';

interface TooltipIconProps {
    IconComponent: React.ElementType;
    label: string;
    iconProps?: React.SVGProps<SVGSVGElement>;
}

const TooltipIcon: React.FC<TooltipIconProps> = ({ IconComponent, label, iconProps }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center justify-center"
        >
            {isHovered && (
                <div className="absolute bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded">
                    {label}
                </div>
            )}
            <IconComponent {...iconProps} />
        </div>
    );
};

export default TooltipIcon;
