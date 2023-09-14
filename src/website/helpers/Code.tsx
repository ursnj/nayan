import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

interface Props {
  code: string;
  language?: string;
}

const Code = (props: Props) => {
  const { code, language = 'tsx' } = props;

  return (
    <div className="mb-5">
      <CodeBlock codeContainerStyle={{ width: '100%' }} text={props.code} language={language} showLineNumbers={false} theme={dracula} />
    </div>
  );
};

export default Code;
