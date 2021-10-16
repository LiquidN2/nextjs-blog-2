import styles from './PostContent.module.scss';

import React from 'react';
import PostHeader from './PostHeader';

import Markdown from '../Markdown/Markdown';

type Props = {
  title: string;
  image: string;
  content: string;
};

const PostContent: React.FC<Props> = ({ title, image, content }) => {
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={image} />
      <Markdown>{content}</Markdown>
    </article>
  );
};

export default PostContent;
