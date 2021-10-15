import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// import { request } from '../../utils/graphql';
// import { GET_FEATURED_SLUGS } from '../../queries/posts';

const Post: NextPage = () => {
  return <div>Post by ID</div>;
};

export default Post;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await request(GET_FEATURED_SLUGS);
//
//   type Path = {
//     params: { slug: string };
//   };
//
//   const paths: Path[] = [];
//
//   data.posts.forEach((post: any) => {
//     paths.push({ params: { slug: post.slug } });
//   });
//
//   return {
//     paths,
//     fallback: false,
//   };
// };
//
// export const getStaticProps: GetStaticProps = async context => {
//   const slug = context.params?.slug;
//
//   console.log(slug);
//
//   return {
//     props: {
//       post: '',
//     },
//   };
// };
