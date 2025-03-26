import React from "react";
type AnimationType = "pulse" | "spin" | "wiggle" | "tilt" | "jelly" | "pop";
type AnimatedOnHoverProps = {
    src: React.ReactElement;
    width?: number;
    height?: number;
    animation?: AnimationType;
};
declare const AnimatedOnHover: ({ src, width, height, animation }: AnimatedOnHoverProps) => import("react/jsx-runtime").JSX.Element;
export default AnimatedOnHover;
