// ComponentLoader.tsx
import React, { Suspense } from "react";

const componentMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  "ExampleEyeInteraction": () => import("../example-interactions/mouse-follow/ExampleEyeInteraction.tsx"),
  "ExampleMouseRotateFullObject": () => import("..//example-interactions/mouse-follow/ExampleMouseRotateFullObject.tsx"),
  "ExampleMouseRotateObject": () => import("..//example-interactions/mouse-follow/ExampleMouseRotateObject.tsx"),
  "ExampleMouseFollow": () => import("..//example-interactions/mouse-follow/ExampleMouseFollow.tsx"),
  "ExampleScrollRotateObject": () => import("..//example-interactions/scroll/ExampleScrollRotateObject.tsx"),
  // Add more mappings here if needed
};

interface ComponentLoaderProps {
  file: string;
}

export const ComponentLoader: React.FC<ComponentLoaderProps> = ({ file }) => {
  const LazyComponent = React.lazy(componentMap[file]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

