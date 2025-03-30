import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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
}
declare const RotateObject: React.FC<RotateObjectProps>;

type AnimatedOnHoverProps = {
    src: React.ReactElement;
    width?: number;
    height?: number;
    animation?: String;
};
declare const AnimatedOnHover: ({ src, width, height, animation }: AnimatedOnHoverProps) => react_jsx_runtime.JSX.Element;

type GlowOnHoverProps = {
    src: React.ReactElement;
    width?: number;
    height?: number;
    scaleFactor?: number;
    color?: string;
};
declare const GlowOnHover: ({ src, width, height, scaleFactor, color }: GlowOnHoverProps) => react_jsx_runtime.JSX.Element;

type MorphOnScrollProps = {
    startPath: string;
    endPath: string;
    width?: number;
    height?: number;
    viewBox?: string;
    color?: string;
    scrollSpeed?: number;
    containerId?: string;
    scrollStartOffset?: number;
    scrollEndOffset?: number;
};
declare const MorphOnScroll: ({ startPath, endPath, width, height, viewBox, color, scrollSpeed, containerId, scrollStartOffset, scrollEndOffset, }: MorphOnScrollProps) => react_jsx_runtime.JSX.Element;

export { AnimatedOnHover, GlowOnHover, MorphOnScroll, MultiEyeInteraction, RotateObject, SVGFollowMouse as SvgFollowMouse };
