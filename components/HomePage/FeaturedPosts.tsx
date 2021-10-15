import styles from './FeaturedPosts.module.scss';

import React from 'react';
import PostsGrid from '../Posts/PostsGrid';

import type { Props as Post } from '../Posts/PostItem';

type Props = {
  posts: Post[];
};

const FeaturedPosts: React.FC<Props> = ({ posts = [] }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
