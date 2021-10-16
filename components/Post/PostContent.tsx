import styles from './PostContent.module.scss';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PostHeader from './PostHeader';

type Props = {
  title: string;
  image: string;
  content: string;
};

const PostContent: React.FC<Props> = ({ title, image, content }) => {
  return (
    <article>
      <PostHeader title={title} image={image} />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
