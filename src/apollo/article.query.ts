import { gql } from "@apollo/client";

export const ARTICLES_QUERY = `
  query {
    getArticles {
      id
      uid
      author
      caption
      imageUrl
    }
  }
`;
