/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHoge = /* GraphQL */ `
  subscription OnCreateHoge {
    onCreateHoge {
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHoge = /* GraphQL */ `
  subscription OnUpdateHoge {
    onUpdateHoge {
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHoge = /* GraphQL */ `
  subscription OnDeleteHoge {
    onDeleteHoge {
      id
      createdAt
      updatedAt
    }
  }
`;
