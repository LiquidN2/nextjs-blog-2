import type { NextPage } from 'next';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
};

export default Home;
