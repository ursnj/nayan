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
      <CodeBlock
        theme={dracula}
        text={props.code}
        language={language}
        showLineNumbers={false}
        customStyle={{
          maxHeight: '600px',
          overflow: 'scroll',
          width: '100%',
          maxWidth: '100%',
          backgroundColor: 'var(--COLOR_CARD)',
          padding: '10px'
        }}
      />
    </div>
  );
};

export default Code;
