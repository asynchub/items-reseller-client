import gql from 'graphql-tag'
import {
  FRAGMENT_ItemFields
} from './fragments'

export const MUTATION_createItem = gql`
  mutation createItem(
    $item: ItemInput!
  ) {
    createItem(
      item: $item
    ) {
      ...ItemFields
    }
  }
  ${FRAGMENT_ItemFields}
`

export const MUTATION_updateItem = gql`
  mutation updateItem(
    $item: ItemInputUpdate!
  ) {
    updateItem(
      item: $item
    ) {
      ...ItemFields
    }
  }
  ${FRAGMENT_ItemFields}
`

export const MUTATION_deleteItem = gql`
  mutation deleteItem(
    $itemId: String!
  ) {
    deleteItem(
      itemId: $itemId
    )
  }
`