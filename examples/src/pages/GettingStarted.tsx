import { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import { CodeBlock } from '../components/CodeBlock.tsx'

export default function GettingStarted({ onTabSelect }) {

  const npmInstall = `npm install interactive-illustrations`;
  const importComponent = `import { RotateObject } from 'interactive-illustrations';`;

  
  return (
    <div className="space-y-4 m-20 font-body space-y-5">
      <p className="text-sm font-semibold text-gray-500">INSTALLATION</p>
      <p className="text-3xl font-bold">Get started with Svggles</p>
      <p className="text-lg">
      Svggles is a lightweight library that makes interactive illustrations effortless. Whether you want mouse-tracking eyes, animated paths, or scroll-triggered transformations, Svggles gives you plug-and-play components that just work.
      </p>
      <div className="space-y-5 bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold">Installation</h2>
        <ol className="list-outside pl-5 list-decimal list-inside space-y-4 text-sm text-gray-800">
          <li>
            <p><strong>Install Svggles via npm:</strong></p>
            <p>In your terminal...</p>
            <CodeBlock code={npmInstall} language="bash" />
          </li>
          <li>
            <p><strong>Import the components you want to use:</strong></p>
            <p>See example below:</p>
            <CodeBlock code={importComponent} language="tsx" />
          </li>
        </ol>
      </div>
      <div className="p-5 flex items-center space-x-2 justify-end">
        <button 
            className="cursor-pointer rounded-md !bg-[#213547] text-white font-body font-bold px-3 py-2 hover:!bg-[#2c4a5e] transition-colors inline-flex items-center space-x-2" 
            onClick={(e) => {
                onTabSelect && onTabSelect('Documentation/GettingStarted/SvgToReact');
            }}
        >
            Animate your SVGs now <ArrowRight/>
        </button>
      </div>
    </div>
  );
};
