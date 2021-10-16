import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { request } from '../../utils/graphql';
import { GET_FEATURED_SLUGS, GET_POST_BY_SLUG } from '../../queries/posts';

import PostContent from '../../components/Post/PostContent';

type Props = {
  title: string;
  image: string;
  content: string;
};

const Post: NextPage<Props> = ({ title, image, content }) => {
  return <PostContent title={title} image={image} content={content} />;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request(GET_FEATURED_SLUGS);

  type Path = {
    params: { slug: string };
  };

  const paths: Path[] = [];

  data.posts.forEach((post: any) => {
    paths.push({ params: { slug: post.slug } });
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async context => {
  try {
    const slug = context.params?.slug;

    const data = await request(GET_POST_BY_SLUG, { slug });

    if (!data) throw 'No data found';

    return {
      props: {
        title: data.post.title,
        image: data.post.image ? data.post.image.url : null,
        content: data.post.content,
      },
    };
  } catch (err) {
    console.error(err);
    return { redirect: { destination: '/', statusCode: 307 } };
  }
};
