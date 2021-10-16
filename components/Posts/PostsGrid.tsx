import styles from './PostsGrid.module.scss';

import React from 'react';
import PostItem from './PostItem';

import type { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

const PostsGrid: React.FC<Props> = ({ posts = [] }) => {
  if (posts.length === 0) return null;

  return (
    <ul className={styles.grid}>
      {posts.map((post, i) => (
        <PostItem key={i} {...post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
