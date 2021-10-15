import { GraphQLClient, gql } from 'graphql-request';

export const request = async (query: string, variables: {} | null = null) => {
  try {
    // validate environment variables
    const CONTENT_API = process.env.CONTENT_API;
    const CONTENT_PAT = process.env.CONTENT_PAT;
    if (!CONTENT_API || !CONTENT_PAT)
      throw 'Please specify content api and/or auth token in .env.local';

    const client = new GraphQLClient(CONTENT_API, {
      headers: {
        Authorization: `Bearer ${CONTENT_PAT}`,
      },
    });

    const data = await client.request(query, variables);

    if (!data) throw 'No data found';

    return data;
  } catch (err) {
    throw err;
  }
};
