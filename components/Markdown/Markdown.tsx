import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Custom components
import Anchor from './Anchor';
import Code from './Code';
import Paragraph from './Paragraph';

// Map default markdown components to custom components
const MarkdownComponents: object = {
  a: Anchor,
  code: Code,
  p: Paragraph,
};

const Markdown: React.FC = ({ children }) => {
  if (typeof children !== 'string') return null;

  return (
    <ReactMarkdown components={MarkdownComponents} remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
