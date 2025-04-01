/// <reference types="vitest/globals" />

export {};

declare global {
    interface SVGElement {
      getBBox(): { x: number; y: number; width: number; height: number };
    }
  }

  
SVGElement.prototype.getBBox = () => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
});