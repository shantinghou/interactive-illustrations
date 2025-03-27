import { Param } from './types';

interface ParamBlockProps {
  params: Param[];
}

export const ParamBlock = ({ params }: ParamBlockProps) => {

  return (
    <table className="table-auto text-left">
      <thead>
        <tr className="text-sm">
          <th className="px-2 py-2.5">Props</th>
          <th className="px-2 py-2.5 pl-10">Description</th>
        </tr>
      </thead>
      <tbody className="border-t border-gray-300 font-code text-xs">
        {params.map((row: Param, i: number) => (
          <tr key={i} className="border-b border-gray-300">
            <td className="p-2">{row.prop}</td>
            <td className="p-2 pl-10">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
