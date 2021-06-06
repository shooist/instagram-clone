/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArticleInput = {
  id?: string | null,
  userId: string,
  author?: string | null,
  caption?: string | null,
  imageUrl?: string | null,
  type: string,
  createdAt?: string | null,
};

export type ModelArticleConditionInput = {
  userId?: ModelIDInput | null,
  author?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  userId: string,
  author?: string | null,
  caption?: string | null,
  imageUrl?: string | null,
  type: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateArticleInput = {
  id: string,
  userId?: string | null,
  author?: string | null,
  caption?: string | null,
  imageUrl?: string | null,
  type?: string | null,
  createdAt?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateHogeInput = {
  id?: string | null,
};

export type ModelHogeConditionInput = {
  and?: Array< ModelHogeConditionInput | null > | null,
  or?: Array< ModelHogeConditionInput | null > | null,
  not?: ModelHogeConditionInput | null,
};

export type Hoge = {
  __typename: "Hoge",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHogeInput = {
  id: string,
};

export type DeleteHogeInput = {
  id: string,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  author?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items?:  Array<Article | null > | null,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelHogeFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelHogeFilterInput | null > | null,
  or?: Array< ModelHogeFilterInput | null > | null,
  not?: ModelHogeFilterInput | null,
};

export type ModelHogeConnection = {
  __typename: "ModelHogeConnection",
  items?:  Array<Hoge | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    userId: string,
    author?: string | null,
    caption?: string | null,
    imageUrl?: string | null,
    type: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    userId: string,
    author?: string | null,
    caption?: string | null,
    imageUrl?: string | null,
    type: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    userId: string,
    author?: string | null,
    caption?: string | null,
    imageUrl?: string | null,
    type: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHogeMutationVariables = {
  input: CreateHogeInput,
  condition?: ModelHogeConditionInput | null,
};

export type CreateHogeMutation = {
  createHoge?:  {
    __typename: "Hoge",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHogeMutationVariables = {
  input: UpdateHogeInput,
  condition?: ModelHogeConditionInput | null,
};

export type UpdateHogeMutation = {
  updateHoge?:  {
    __typename: "Hoge",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHogeMutationVariables = {
  input: DeleteHogeInput,
  condition?: ModelHogeConditionInput | null,
};

export type DeleteHogeMutation = {
  deleteHoge?:  {
    __typename: "Hoge",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    userId: string,
    author?: string | null,
    caption?: string | null,
    imageUrl?: string | null,
    type: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items?:  Array< {
      __typename: "Article",
      id: string,
      userId: string,
      author?: string | null,
      caption?: string | null,
      imageUrl?: string | null,
      type: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHogeQueryVariables = {
  id: string,
};

export type GetHogeQuery = {
  getHoge?:  {
    __typename: "Hoge",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHogesQueryVariables = {
  filter?: ModelHogeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHogesQuery = {
  listHoges?:  {
    __typename: "ModelHogeConnection",
    items?:  Array< {
      __typename: "Hoge",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListArticlesByCreatedAtQueryVariables = {
  type?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesByCreatedAtQuery = {
  listArticlesByCreatedAt?:  {
    __typename: "ModelArticleConnection",
    items?:  Array< {
      __typename: "Article",
      id: string,
      userId: string,
      author?: string | null,
      caption?: string | null,
      imageUrl?: string | null,
      type: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    userId: string,
    author?: string | null,
    caption?: string | null,
    imageUrl?: string | null,
    type: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    userId: string,
    author?: string | null,
    caption?: string | null,
    imageUrl?: string | null,
    type: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    userId: string,
    author?: string | null,
    caption?: string | null,
    imageUrl?: string | null,
    type: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHogeSubscription = {
  onCreateHoge?:  {
    __typename: "Hoge",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHogeSubscription = {
  onUpdateHoge?:  {
    __typename: "Hoge",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHogeSubscription = {
  onDeleteHoge?:  {
    __typename: "Hoge",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
