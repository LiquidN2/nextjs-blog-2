import styles from './AllPosts.module.scss';

import React from 'react';
import PostsGrid from './PostsGrid';

import type { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

const AllPosts: React.FC<Props> = ({ posts = [] }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
