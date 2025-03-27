import { ParamBlock } from "./ParamBlock.tsx";
import { CodeBlock } from "./CodeBlock.tsx";
import { SVGFormatBlock } from './SVGFormatBlock.tsx';
import { ComponentLoader } from './ComponentLoader.tsx';
import { SvgRequirement, Param, Example } from './types';


interface FeatureFile {
  tab: string;
  feature: string;
  featureDescription: string;
  params: Param[];
  examples: Example[];
  ['svg-requirement']?: SvgRequirement;
}

interface FeaturePageProps {
  featureFile: FeatureFile;
}

export const FeaturePage = ({ featureFile }: FeaturePageProps) => {
  const { tab, feature, featureDescription, params, examples } = featureFile;

  return (
    <div className="space-y-4 m-20 font-body space-y-5">
        <p className="text-sm font-semibold text-gray-500">{tab.toUpperCase()}</p>
        <p className="text-3xl font-bold">{feature}</p>
        <p className="text-base text-gray-700">{featureDescription}</p>

        <ParamBlock params={params} />

        {featureFile['svg-requirement'] && (
          <SVGFormatBlock format={featureFile['svg-requirement']} />
        )}

        <p className="text-base font-semibold mt-6">EXAMPLES</p>
        {examples && examples.map((example: Example, idx: number) => (
          <div key={idx}>
            <p className="text-lg font-bold pb-5">{example.title}</p>
            <div className="flex gap-15 items-center">
              <div>
                  <ComponentLoader file={example.file} />
                  <p className="text-xs pt-2 text-center text-gray-500">Example illustration</p>
              </div>
              <div className={"min-w-2xl max-w-3xl"}>
                <CodeBlock code={example.code} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};