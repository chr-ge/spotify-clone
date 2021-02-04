/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbumCategory = /* GraphQL */ `
  mutation CreateAlbumCategory(
    $input: CreateAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    createAlbumCategory(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          creator
          likes
          imageUri
          artistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAlbumCategory = /* GraphQL */ `
  mutation UpdateAlbumCategory(
    $input: UpdateAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    updateAlbumCategory(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          creator
          likes
          imageUri
          artistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAlbumCategory = /* GraphQL */ `
  mutation DeleteAlbumCategory(
    $input: DeleteAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    deleteAlbumCategory(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          creator
          likes
          imageUri
          artistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      name
      creator
      likes
      imageUri
      artistHeadline
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      songs {
        items {
          id
          title
          artist
          imageUri
          uri
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      name
      creator
      likes
      imageUri
      artistHeadline
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      songs {
        items {
          id
          title
          artist
          imageUri
          uri
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      name
      creator
      likes
      imageUri
      artistHeadline
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      songs {
        items {
          id
          title
          artist
          imageUri
          uri
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      title
      artist
      imageUri
      uri
      albumId
      album {
        id
        name
        creator
        likes
        imageUri
        artistHeadline
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      title
      artist
      imageUri
      uri
      albumId
      album {
        id
        name
        creator
        likes
        imageUri
        artistHeadline
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      title
      artist
      imageUri
      uri
      albumId
      album {
        id
        name
        creator
        likes
        imageUri
        artistHeadline
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
