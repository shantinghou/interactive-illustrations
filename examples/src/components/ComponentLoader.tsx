// ComponentLoader.tsx
import React, { Suspense } from "react";

const componentMap: Record<string, () => Promise<{ default: React.ComponentType<unknown> }>> = {
  "ExampleEyeInteraction": () => import("../example-interactions/mouse-follow/ExampleEyeInteraction.tsx"),
  "ExampleMouseRotateFullObject": () => import("..//example-interactions/mouse-follow/ExampleMouseRotateFullObject.tsx"),
  "ExampleMouseRotateObject": () => import("..//example-interactions/mouse-follow/ExampleMouseRotateObject.tsx"),
  "ExampleMouseFollow": () => import("..//example-interactions/mouse-follow/ExampleMouseFollow.tsx"),
  "ExampleScrollRotateObject": () => import("..//example-interactions/scroll/ExampleScrollRotateObject.tsx"),
  "ExampleMorphOnScroll": () => import("..//example-interactions/scroll/ExampleMorphOnScroll.tsx"),
  "ExampleGlowOnHover": () => import("..//example-interactions/hover/ExampleGlowOnHover.tsx"),
  "ExampleAnimateOnHover": () => import("..//example-interactions/hover/ExampleAnimateOnHover.tsx")
  // Add more mappings here if needed
};

interface ComponentLoaderProps {
  file: string;
}

export const ComponentLoader: React.FC<ComponentLoaderProps> = ({ file }) => {
  const component = componentMap[file];

  if (!component) return <div />;

  const LazyComponent = React.lazy(component);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

