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
  'query activityCollection($id: BigInt!) {\n  activityCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        uuid\n        trip_id\n        title\n        time_from\n        time_to\n        address\n        url\n        memo\n        cost\n        image_storage_object_id\n        trips {\n          id\n          uuid\n          user_id\n          title\n        }\n      }\n    }\n  }\n}':
    types.ActivityCollectionDocument,
  'mutation createTrip($user_id: BigInt!, $title: String!, $date_from: Date, $date_to: Date) {\n  insertIntotripsCollection(\n    objects: [{user_id: $user_id, title: $title, date_from: $date_from, date_to: $date_to}]\n  ) {\n    records {\n      __typename\n      id\n      uuid\n      title\n    }\n  }\n}':
    types.CreateTripDocument,
  'query tripDetails($uuid: UUID!) {\n  tripsCollection(filter: {uuid: {eq: $uuid}}) {\n    edges {\n      node {\n        uuid\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              uuid\n              title\n              time_from\n              time_to\n              address\n            }\n          }\n        }\n        trip_tagsCollection {\n          edges {\n            node {\n              tags {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}':
    types.TripDetailsDocument,
  'query tripsCollection($filter: tripsFilter, $orderBy: [tripsOrderBy!], $first: Int!, $after: Cursor) {\n  tripsCollection(\n    filter: $filter\n    first: $first\n    after: $after\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        uuid\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        created_at\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n  }\n}':
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
  source: 'query activityCollection($id: BigInt!) {\n  activityCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        uuid\n        trip_id\n        title\n        time_from\n        time_to\n        address\n        url\n        memo\n        cost\n        image_storage_object_id\n        trips {\n          id\n          uuid\n          user_id\n          title\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query activityCollection($id: BigInt!) {\n  activityCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        id\n        uuid\n        trip_id\n        title\n        time_from\n        time_to\n        address\n        url\n        memo\n        cost\n        image_storage_object_id\n        trips {\n          id\n          uuid\n          user_id\n          title\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation createTrip($user_id: BigInt!, $title: String!, $date_from: Date, $date_to: Date) {\n  insertIntotripsCollection(\n    objects: [{user_id: $user_id, title: $title, date_from: $date_from, date_to: $date_to}]\n  ) {\n    records {\n      __typename\n      id\n      uuid\n      title\n    }\n  }\n}'
): (typeof documents)['mutation createTrip($user_id: BigInt!, $title: String!, $date_from: Date, $date_to: Date) {\n  insertIntotripsCollection(\n    objects: [{user_id: $user_id, title: $title, date_from: $date_from, date_to: $date_to}]\n  ) {\n    records {\n      __typename\n      id\n      uuid\n      title\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query tripDetails($uuid: UUID!) {\n  tripsCollection(filter: {uuid: {eq: $uuid}}) {\n    edges {\n      node {\n        uuid\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              uuid\n              title\n              time_from\n              time_to\n              address\n            }\n          }\n        }\n        trip_tagsCollection {\n          edges {\n            node {\n              tags {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query tripDetails($uuid: UUID!) {\n  tripsCollection(filter: {uuid: {eq: $uuid}}) {\n    edges {\n      node {\n        uuid\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              uuid\n              title\n              time_from\n              time_to\n              address\n            }\n          }\n        }\n        trip_tagsCollection {\n          edges {\n            node {\n              tags {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query tripsCollection($filter: tripsFilter, $orderBy: [tripsOrderBy!], $first: Int!, $after: Cursor) {\n  tripsCollection(\n    filter: $filter\n    first: $first\n    after: $after\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        uuid\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        created_at\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n  }\n}'
): (typeof documents)['query tripsCollection($filter: tripsFilter, $orderBy: [tripsOrderBy!], $first: Int!, $after: Cursor) {\n  tripsCollection(\n    filter: $filter\n    first: $first\n    after: $after\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        uuid\n        title\n        date_from\n        date_to\n        image_storage_object_id\n        created_at\n        invitationsCollection {\n          edges {\n            node {\n              users {\n                id\n                profile_picture_url\n              }\n            }\n          }\n        }\n        activityCollection {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
