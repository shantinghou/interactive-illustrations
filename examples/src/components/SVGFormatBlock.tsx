import { useState } from "react";
import { CodeBlock } from "./CodeBlock"; // Adjust the import if needed
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SvgRequirement, SvgClass } from "./types";

interface SVGFormatBlockProps {
  format: SvgRequirement;
}

export const SVGFormatBlock = ({ format }: SVGFormatBlockProps) => {
  const [expanded, setExpanded] = useState(false);
  const { explanation, classes, example } = format;

  const handleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="my-10 bg-[#F3F1F1] p-5 rounded-md">
      <p className="text-lg font-bold">Input SVG structure requirement</p>
      <p className="text-base">
        {explanation}
      </p>

      <table className="table-auto text-left ml-5">
        <tbody>
          {classes.map((row: SvgClass, i: number) => (
            <tr key={i}>
              <td className="font-bold pr-4">{row.name}</td>
              <td className="pl-4">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {example && <div
        className="cursor-pointer bg-[#DFE5D6] p-3 rounded-md w-full mt-5"
        onClick={handleExpanded}
      >
        <p className="font-semibold flex items-center justify-between font-code text-sm text-[#58AE1B]">
          Example SVG component
          <span className="ml-2">{expanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}</span>
        </p>
      </div>}
      
      {expanded && example && <CodeBlock code={example} />}
    </div>
  );
};