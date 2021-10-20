import type { GetStaticProps, NextPage } from 'next';
import type { Post } from '../../types/Post';

import Head from 'next/head';
import AllPosts from '../../components/Posts/AllPosts';

import { request } from '../../utils/graphql';
import { GET_ALL_POSTS } from '../../queries/posts';

type Props = {
  posts: Post[];
};

const Posts: NextPage<Props> = ({ posts = [] }) => {
  return (
    <>
      <Head>
        <title>Hugh Nguyen - All Blog Posts</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const data = await request(GET_ALL_POSTS);

  const posts = data.posts;

  return {
    props: {
      posts: posts,
    },
  };
};
