/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'query getUser($id: UUID!) {\n  usersCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        email\n        name\n        profile_picture_url\n      }\n    }\n  }\n}':
    types.GetUserDocument,
  'query activityCollection($id: UUID!) {\n  activityCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        trip_id\n        title\n        time_from\n        time_to\n        address\n        url\n        memo\n        cost\n        image_storage_object_id\n      }\n    }\n  }\n}':
    types.ActivityCollectionDocument,
  'mutation createTag($name: String!, $userId: UUID!) {\n  insertIntotagsCollection(objects: [{name: $name, user_id: $userId}]) {\n    records {\n      __typename\n      id\n      name\n    }\n  }\n}':
    types.CreateTagDocument,
  'mutation createTrip($user_id: UUID!, $title: String!, $date_from: Date, $date_to: Date) {\n  insertIntotripsCollection(\n    objects: [{user_id: $user_id, title: $title, date_from: $date_from, date_to: $date_to}]\n  ) {\n    records {\n      __typename\n      id\n      title\n    }\n  }\n}':
    types.CreateTripDocument,
  'mutation deleteTag($id: UUID!) {\n  deleteFromtagsCollection(filter: {id: {eq: $id}}) {\n    records {\n      __typename\n      id\n      name\n    }\n  }\n}':
    types.DeleteTagDocument,
  'query tagsCollection($userId: UUID!) {\n  tagsCollection(\n    filter: {user_id: {eq: $userId}}\n    orderBy: {created_at: AscNullsLast}\n  ) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}':
    types.TagsCollectionDocument,
  'query tripDetails($id: UUID!) {\n  tripsCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        cost\n        cost_unit\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n              title\n              time_from\n              time_to\n              address\n            }\n          }\n        }\n        trip_tagsCollection {\n          edges {\n            node {\n              tags {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}':
    types.TripDetailsDocument,
  'query tripsCollection($filter: tripsFilter, $orderBy: [tripsOrderBy!], $first: Int!, $after: Cursor) {\n  tripsCollection(\n    filter: $filter\n    first: $first\n    after: $after\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        id\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        created_at\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n  }\n}':
    types.TripsCollectionDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getUser($id: UUID!) {\n  usersCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        email\n        name\n        profile_picture_url\n      }\n    }\n  }\n}'
): (typeof documents)['query getUser($id: UUID!) {\n  usersCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        email\n        name\n        profile_picture_url\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query activityCollection($id: UUID!) {\n  activityCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        trip_id\n        title\n        time_from\n        time_to\n        address\n        url\n        memo\n        cost\n        image_storage_object_id\n      }\n    }\n  }\n}'
): (typeof documents)['query activityCollection($id: UUID!) {\n  activityCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        trip_id\n        title\n        time_from\n        time_to\n        address\n        url\n        memo\n        cost\n        image_storage_object_id\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation createTag($name: String!, $userId: UUID!) {\n  insertIntotagsCollection(objects: [{name: $name, user_id: $userId}]) {\n    records {\n      __typename\n      id\n      name\n    }\n  }\n}'
): (typeof documents)['mutation createTag($name: String!, $userId: UUID!) {\n  insertIntotagsCollection(objects: [{name: $name, user_id: $userId}]) {\n    records {\n      __typename\n      id\n      name\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation createTrip($user_id: UUID!, $title: String!, $date_from: Date, $date_to: Date) {\n  insertIntotripsCollection(\n    objects: [{user_id: $user_id, title: $title, date_from: $date_from, date_to: $date_to}]\n  ) {\n    records {\n      __typename\n      id\n      title\n    }\n  }\n}'
): (typeof documents)['mutation createTrip($user_id: UUID!, $title: String!, $date_from: Date, $date_to: Date) {\n  insertIntotripsCollection(\n    objects: [{user_id: $user_id, title: $title, date_from: $date_from, date_to: $date_to}]\n  ) {\n    records {\n      __typename\n      id\n      title\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation deleteTag($id: UUID!) {\n  deleteFromtagsCollection(filter: {id: {eq: $id}}) {\n    records {\n      __typename\n      id\n      name\n    }\n  }\n}'
): (typeof documents)['mutation deleteTag($id: UUID!) {\n  deleteFromtagsCollection(filter: {id: {eq: $id}}) {\n    records {\n      __typename\n      id\n      name\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query tagsCollection($userId: UUID!) {\n  tagsCollection(\n    filter: {user_id: {eq: $userId}}\n    orderBy: {created_at: AscNullsLast}\n  ) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}'
): (typeof documents)['query tagsCollection($userId: UUID!) {\n  tagsCollection(\n    filter: {user_id: {eq: $userId}}\n    orderBy: {created_at: AscNullsLast}\n  ) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query tripDetails($id: UUID!) {\n  tripsCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        cost\n        cost_unit\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n              title\n              time_from\n              time_to\n              address\n            }\n          }\n        }\n        trip_tagsCollection {\n          edges {\n            node {\n              tags {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query tripDetails($id: UUID!) {\n  tripsCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        cost\n        cost_unit\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n              title\n              time_from\n              time_to\n              address\n            }\n          }\n        }\n        trip_tagsCollection {\n          edges {\n            node {\n              tags {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query tripsCollection($filter: tripsFilter, $orderBy: [tripsOrderBy!], $first: Int!, $after: Cursor) {\n  tripsCollection(\n    filter: $filter\n    first: $first\n    after: $after\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        id\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        created_at\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n  }\n}'
): (typeof documents)['query tripsCollection($filter: tripsFilter, $orderBy: [tripsOrderBy!], $first: Int!, $after: Cursor) {\n  tripsCollection(\n    filter: $filter\n    first: $first\n    after: $after\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        id\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        created_at\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
