import { gql } from 'graphql-request';

export const GET_ALL_POSTS = gql`
  {
    posts(orderBy: date_DESC) {
      id
      title
      slug
      date
      isFeatured
      image {
        url
        fileName
      }
      excerpt {
        text
      }
    }
  }
`;

export const GET_FEATURED_POSTS = gql`
  {
    posts(orderBy: date_DESC, where: { isFeatured: true }) {
      id
      title
      slug
      date
      isFeatured
      image {
        url
        fileName
      }
      excerpt {
        text
      }
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
      id
      title
      slug
      date
      isFeatured
      image {
        url
        fileName
      }
      excerpt {
        text
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      date
      slug
      isFeatured
      excerpt {
        text
      }
      image {
        url
        fileName
      }
    }
  }
`;
