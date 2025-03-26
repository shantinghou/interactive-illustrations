import { useState, useEffect } from 'react';
import { CodeBlock } from "../components/CodeBlock.tsx"

const code = `const Example = () => (
    <svg width="208" height="187" viewBox="0 0 208 187" fill="none"
      <rect width="208" height="187" rx="25" fill="#7BB7DD"/>
      <g className="eye"> {/*labelled for interaction*/}
        <circle className="bounding" cx="57.5" cy="127.5" r="33.5" fill="white"/>
        <circle className="moving" cx="57.5" cy="132.5" r="15.5" fill="black"/>
      </g>
      <g className="eye"> {/*labelled for interaction*/}
        <circle className="bounding" cx="149.5" cy="127.5" r="33.5" fill="white"/>
        <circle className="moving" cx="149.5" cy="132.5" r="15.5" fill="black"/>
      </g>
    </svg>
);`
export default function SVGToReactGuide() {
  return (
    <div className="space-y-4 m-20 font-body space-y-5">
      <p className="text-sm font-semibold text-gray-500">CORE CONCEPTS</p>
      <p className="text-3xl font-bold">Converting your SVG to React Component</p>

      <div className="space-y-3 bg-[#F3F1F1] p-5 rounded-md">
        <p className="text-lg">
          Converting an SVG to a React component allows you to manipulate it with props, styling, and React logic.
          Here's a simple step-by-step guide:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            <strong>Copy the SVG code:</strong> Open your SVG file in a text editor and copy everything inside the <code>&lt;svg&gt;</code> tag.
          </li>
          <li>
            <strong>Create a new React component:</strong> Inside your project, make a new file like <code>MyIcon.tsx</code> or <code>MyIcon.jsx</code>.
          </li>
          <li>
            <strong>Paste the code:</strong> Paste the SVG into the return statement of a functional component.
          </li>
          <li>
            <strong>Add relevant classNames for interaction</strong> Use <code>className</code> and add relevant classNames to activate certain interactions (specified under each page)
          </li>
          <li>
            <strong>Export the component:</strong> Export it like any other React component so you can reuse it throughout your app.
          </li>
        </ol>

        <p className="font-bold mt-5">
          Your final component might look like this:
        </p>

        <CodeBlock code={code}
        />

        <p>
          That's it! You can now use your SVG as a React component: <code>&lt;Example /&gt;</code>
        </p>
      </div>
    </div>
  );
}
