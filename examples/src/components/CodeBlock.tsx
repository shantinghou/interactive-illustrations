import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario  } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({ code, language = "tsx"  }) => {
  return (
    <div className="min-w-2xl max-w-5xl">
      <SyntaxHighlighter
        language={language}
        style={lucario}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1rem',
          fontSize: '0.875rem'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div> 
  );
};