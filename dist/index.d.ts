import React from 'react';

interface MultiEyeInteractionProps {
    src: React.ReactNode;
    speed?: number;
    width?: string;
    height?: string;
    responsiveness?: number;
}
declare const MultiEyeInteraction: React.FC<MultiEyeInteractionProps>;

interface SVGFollowMouseProps {
    src: React.ReactNode;
    size?: number;
    opacity?: number;
    delay?: number;
    ease?: string;
}
declare const SVGFollowMouse: React.FC<SVGFollowMouseProps>;

export { MultiEyeInteraction, SVGFollowMouse as SvgFollowMouse };
