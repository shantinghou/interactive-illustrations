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

interface RotateObjectProps {
    src: React.ReactNode;
    size?: number;
    speed?: number;
    offset?: number;
    clockwise?: boolean;
    respondsTo?: string;
    targetClassName?: string;
}
declare const RotateObject: React.FC<RotateObjectProps>;

export { MultiEyeInteraction, RotateObject, SVGFollowMouse as SvgFollowMouse };
