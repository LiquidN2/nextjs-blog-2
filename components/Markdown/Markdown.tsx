import styles from './Markdown.module.scss';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const MarkdownComponents: object = {
  // Convert Markdown img to next/image component and set height, width and priority
  // example: ![AltText {priority}{768x432}](...
  p: (paragraph: any) => {
    const { node } = paragraph;

    // if the first child node is img, map this p component to Image
    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
      const isPriority = image.properties.alt
        ?.toLowerCase()
        .includes('{priority}');
      const metaWidth = image.properties.alt.match(/{([^}]+)x/);
      const metaHeight = image.properties.alt.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : '600';
      const height = metaHeight ? metaHeight[1] : '300';

      return (
        <div className={styles.image}>
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
          />
        </div>
      );
    }

    // else return a normal p component
    return <p>{paragraph.children}</p>;
  },

  // convert markdown code to custom code component
  code: (code: any) => {
    const { node, inline, className, children, ...props } = code;

    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Markdown: React.FC = ({ children }) => {
  if (typeof children !== 'string') return null;
  return (
    <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
  );
};

export default Markdown;
