import { gql } from 'graphql-request';

const ALL_FIELDS = `
  id
  title
  slug
  date
  isFeatured
  excerpt
  content
  image {
    url
    fileName
  }
`;

const FIELDS_FOR_POSTS_GRID = `
  id
  title
  slug
  date
  isFeatured
  excerpt
  image {
    url
    fileName
  }
`;

export const GET_ALL_POSTS = gql`
  {
    posts(orderBy: date_DESC) {
      ${FIELDS_FOR_POSTS_GRID}
    }
  }
`;

export const GET_FEATURED_POSTS = gql`
  {
    posts(orderBy: date_DESC, where: { isFeatured: true }) {
      ${FIELDS_FOR_POSTS_GRID}
    }
  }
`;

export const GET_FEATURED_SLUGS = gql`
  {
    posts(orderBy: date_DESC, where: { isFeatured: true }) {
      slug
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    post(where: { id: $id }) {
      ${ALL_FIELDS}
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      ${ALL_FIELDS}
    }
  }
`;
