import React from 'react';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Code = (props: any) => {
  const { node, inline, className, children, ...otherProps } = props;

  // get the language
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <SyntaxHighlighter
      style={atomDark}
      language={match[1]}
      PreTag="div"
      {...otherProps}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...otherProps}>
      {children}
    </code>
  );
};

export default Code;
