export interface SvgClass {
    name: string;
    description: string;
}

export interface SvgRequirement {
    explanation: string;
    classes: SvgClass[];
    example?: string;
}

export interface Param {
    prop: string;
    description: string;
}

export interface Example {
    title: string;
    code: string;
    file: string;
}