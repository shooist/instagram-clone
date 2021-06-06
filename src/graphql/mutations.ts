/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createHoge = /* GraphQL */ `
  mutation CreateHoge(
    $input: CreateHogeInput!
    $condition: ModelHogeConditionInput
  ) {
    createHoge(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateHoge = /* GraphQL */ `
  mutation UpdateHoge(
    $input: UpdateHogeInput!
    $condition: ModelHogeConditionInput
  ) {
    updateHoge(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteHoge = /* GraphQL */ `
  mutation DeleteHoge(
    $input: DeleteHogeInput!
    $condition: ModelHogeConditionInput
  ) {
    deleteHoge(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
