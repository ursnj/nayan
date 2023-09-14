import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

interface Props {
  code: string;
  language?: string;
  hasDemo?: boolean;
}

const Code = (props: Props) => {
  const { code, language = 'tsx', hasDemo = false } = props;

  return (
    <div className="mb-5">
      <CodeBlock codeContainerStyle={{ width: '100%' }} text={props.code} language={language} showLineNumbers={false} theme={dracula} />
    </div>
  );
};

export default Code;
