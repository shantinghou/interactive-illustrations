import React from "react";
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
export default RotateObject;
