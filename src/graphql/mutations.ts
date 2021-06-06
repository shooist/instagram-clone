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
      userId
      author
      caption
      imageUrl
      type
      user {
        id
        name
        createdAt
        updatedAt
      }
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
      userId
      author
      caption
      imageUrl
      type
      user {
        id
        name
        createdAt
        updatedAt
      }
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
      userId
      author
      caption
      imageUrl
      type
      user {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
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
