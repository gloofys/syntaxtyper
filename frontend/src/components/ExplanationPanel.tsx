import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { examples } from "../examples";

interface Props {
    markdown: string;
    code: string;
    exampleKey?: string;
}

export const ExplanationPanel: React.FC<Props> = ({ markdown, code, exampleKey }) => {
    const ExampleComponent = exampleKey ? examples[exampleKey] : null;

    return (
        <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded shadow">
            <div className="md:w-1/2 prose max-w-none">
                <ReactMarkdown>{markdown}</ReactMarkdown>
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                    {code.trim()}
                </SyntaxHighlighter>
            </div>
            {ExampleComponent && (
                <div className="md:w-1/2 p-4 border rounded">
                    <h4 className="font-semibold mb-2">Live Preview</h4>
                    <ExampleComponent />
                </div>
            )}
        </div>
    );
};
