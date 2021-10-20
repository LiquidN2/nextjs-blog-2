import type { GetStaticProps, NextPage } from 'next';
import type { Props as Post } from '../components/Posts/PostItem';

import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

import { request } from '../utils/graphql';
import { GET_FEATURED_POSTS } from '../queries/posts';

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts = [] }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await request(GET_FEATURED_POSTS);

    return {
      props: { posts: data.posts },
    };
  } catch (err) {
    return {
      props: { error: 'Unable to fetch post' },
    };
  }
};

export default Home;
