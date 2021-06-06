/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      uid
      author
      caption
      imageUrl
      type
      createdAt
      updatedAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        author
        caption
        imageUrl
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHoge = /* GraphQL */ `
  query GetHoge($id: ID!) {
    getHoge(id: $id) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const listHoges = /* GraphQL */ `
  query ListHoges(
    $filter: ModelHogeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHoges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listArticlesByCreatedAt = /* GraphQL */ `
  query ListArticlesByCreatedAt(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticlesByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        uid
        author
        caption
        imageUrl
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
