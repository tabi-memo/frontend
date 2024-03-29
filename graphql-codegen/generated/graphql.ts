/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any }
  /** A date wihout time information */
  Date: { input: string; output: string }
  /** A date and time */
  Datetime: { input: string; output: string }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any }
  /** A time without date information */
  Time: { input: string; output: string }
  /** A universally unique identifier */
  UUID: { input: string; output: string }
}

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>
  gt?: InputMaybe<Scalars['BigFloat']['input']>
  gte?: InputMaybe<Scalars['BigFloat']['input']>
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['BigFloat']['input']>
  lte?: InputMaybe<Scalars['BigFloat']['input']>
  neq?: InputMaybe<Scalars['BigFloat']['input']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>
  gt?: InputMaybe<Scalars['BigInt']['input']>
  gte?: InputMaybe<Scalars['BigInt']['input']>
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['BigInt']['input']>
  lte?: InputMaybe<Scalars['BigInt']['input']>
  neq?: InputMaybe<Scalars['BigInt']['input']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>
  is?: InputMaybe<FilterIs>
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>
  gt?: InputMaybe<Scalars['Date']['input']>
  gte?: InputMaybe<Scalars['Date']['input']>
  in?: InputMaybe<Array<Scalars['Date']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Date']['input']>
  lte?: InputMaybe<Scalars['Date']['input']>
  neq?: InputMaybe<Scalars['Date']['input']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>
  gt?: InputMaybe<Scalars['Datetime']['input']>
  gte?: InputMaybe<Scalars['Datetime']['input']>
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Datetime']['input']>
  lte?: InputMaybe<Scalars['Datetime']['input']>
  neq?: InputMaybe<Scalars['Datetime']['input']>
}

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<Scalars['Float']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  neq?: InputMaybe<Scalars['Float']['input']>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>
}

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  neq?: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation'
  /** Deletes zero or more records from the `activity` collection */
  deleteFromactivityCollection: ActivityDeleteResponse
  /** Deletes zero or more records from the `activity_uploaded_files` collection */
  deleteFromactivity_uploaded_filesCollection: Activity_Uploaded_FilesDeleteResponse
  /** Deletes zero or more records from the `invitations` collection */
  deleteFrominvitationsCollection: InvitationsDeleteResponse
  /** Deletes zero or more records from the `tags` collection */
  deleteFromtagsCollection: TagsDeleteResponse
  /** Deletes zero or more records from the `trip_tags` collection */
  deleteFromtrip_tagsCollection: Trip_TagsDeleteResponse
  /** Deletes zero or more records from the `trips` collection */
  deleteFromtripsCollection: TripsDeleteResponse
  /** Deletes zero or more records from the `users` collection */
  deleteFromusersCollection: UsersDeleteResponse
  /** Adds one or more `activity` records to the collection */
  insertIntoactivityCollection?: Maybe<ActivityInsertResponse>
  /** Adds one or more `activity_uploaded_files` records to the collection */
  insertIntoactivity_uploaded_filesCollection?: Maybe<Activity_Uploaded_FilesInsertResponse>
  /** Adds one or more `invitations` records to the collection */
  insertIntoinvitationsCollection?: Maybe<InvitationsInsertResponse>
  /** Adds one or more `tags` records to the collection */
  insertIntotagsCollection?: Maybe<TagsInsertResponse>
  /** Adds one or more `trip_tags` records to the collection */
  insertIntotrip_tagsCollection?: Maybe<Trip_TagsInsertResponse>
  /** Adds one or more `trips` records to the collection */
  insertIntotripsCollection?: Maybe<TripsInsertResponse>
  /** Adds one or more `users` records to the collection */
  insertIntousersCollection?: Maybe<UsersInsertResponse>
  /** Updates zero or more records in the `activity` collection */
  updateactivityCollection: ActivityUpdateResponse
  /** Updates zero or more records in the `activity_uploaded_files` collection */
  updateactivity_uploaded_filesCollection: Activity_Uploaded_FilesUpdateResponse
  /** Updates zero or more records in the `invitations` collection */
  updateinvitationsCollection: InvitationsUpdateResponse
  /** Updates zero or more records in the `tags` collection */
  updatetagsCollection: TagsUpdateResponse
  /** Updates zero or more records in the `trip_tags` collection */
  updatetrip_tagsCollection: Trip_TagsUpdateResponse
  /** Updates zero or more records in the `trips` collection */
  updatetripsCollection: TripsUpdateResponse
  /** Updates zero or more records in the `users` collection */
  updateusersCollection: UsersUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationDeleteFromactivityCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ActivityFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromactivity_Uploaded_FilesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<Activity_Uploaded_FilesFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFrominvitationsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<InvitationsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromtagsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<TagsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromtrip_TagsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<Trip_TagsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromtripsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<TripsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromusersCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<UsersFilter>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoactivityCollectionArgs = {
  objects: Array<ActivityInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoactivity_Uploaded_FilesCollectionArgs = {
  objects: Array<Activity_Uploaded_FilesInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoinvitationsCollectionArgs = {
  objects: Array<InvitationsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntotagsCollectionArgs = {
  objects: Array<TagsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntotrip_TagsCollectionArgs = {
  objects: Array<Trip_TagsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntotripsCollectionArgs = {
  objects: Array<TripsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntousersCollectionArgs = {
  objects: Array<UsersInsertInput>
}

/** The root type for creating and mutating data */
export type MutationUpdateactivityCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ActivityFilter>
  set: ActivityUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateactivity_Uploaded_FilesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<Activity_Uploaded_FilesFilter>
  set: Activity_Uploaded_FilesUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateinvitationsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<InvitationsFilter>
  set: InvitationsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdatetagsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<TagsFilter>
  set: TagsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdatetrip_TagsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<Trip_TagsFilter>
  set: Trip_TagsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdatetripsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<TripsFilter>
  set: TripsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateusersCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<UsersFilter>
  set: UsersUpdateInput
}

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output']
}

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>
  is?: InputMaybe<FilterIs>
}

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The root type for querying data */
export type Query = {
  __typename?: 'Query'
  /** A pagable collection of type `activity` */
  activityCollection?: Maybe<ActivityConnection>
  /** A pagable collection of type `activity_uploaded_files` */
  activity_uploaded_filesCollection?: Maybe<Activity_Uploaded_FilesConnection>
  /** A pagable collection of type `invitations` */
  invitationsCollection?: Maybe<InvitationsConnection>
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `tags` */
  tagsCollection?: Maybe<TagsConnection>
  /** A pagable collection of type `trip_tags` */
  trip_tagsCollection?: Maybe<Trip_TagsConnection>
  /** A pagable collection of type `trips` */
  tripsCollection?: Maybe<TripsConnection>
  /** A pagable collection of type `users` */
  usersCollection?: Maybe<UsersConnection>
}

/** The root type for querying data */
export type QueryActivityCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ActivityFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ActivityOrderBy>>
}

/** The root type for querying data */
export type QueryActivity_Uploaded_FilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<Activity_Uploaded_FilesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<Activity_Uploaded_FilesOrderBy>>
}

/** The root type for querying data */
export type QueryInvitationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<InvitationsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<InvitationsOrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type QueryTagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TagsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TagsOrderBy>>
}

/** The root type for querying data */
export type QueryTrip_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<Trip_TagsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<Trip_TagsOrderBy>>
}

/** The root type for querying data */
export type QueryTripsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TripsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TripsOrderBy>>
}

/** The root type for querying data */
export type QueryUsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<UsersFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<UsersOrderBy>>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  iregex?: InputMaybe<Scalars['String']['input']>
  is?: InputMaybe<FilterIs>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  neq?: InputMaybe<Scalars['String']['input']>
  regex?: InputMaybe<Scalars['String']['input']>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>
  gt?: InputMaybe<Scalars['Time']['input']>
  gte?: InputMaybe<Scalars['Time']['input']>
  in?: InputMaybe<Array<Scalars['Time']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Time']['input']>
  lte?: InputMaybe<Scalars['Time']['input']>
  neq?: InputMaybe<Scalars['Time']['input']>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>
  in?: InputMaybe<Array<Scalars['UUID']['input']>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<Scalars['UUID']['input']>
}

export type Activity = Node & {
  __typename?: 'activity'
  activity_uploaded_filesCollection?: Maybe<Activity_Uploaded_FilesConnection>
  address?: Maybe<Scalars['String']['output']>
  cost?: Maybe<Scalars['BigFloat']['output']>
  cost_unit?: Maybe<Scalars['String']['output']>
  created_at: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  image_url?: Maybe<Scalars['String']['output']>
  memo?: Maybe<Scalars['String']['output']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  time_from: Scalars['Datetime']['output']
  time_to?: Maybe<Scalars['Datetime']['output']>
  title: Scalars['String']['output']
  trip_id: Scalars['UUID']['output']
  trips: Trips
  url?: Maybe<Scalars['String']['output']>
}

export type ActivityActivity_Uploaded_FilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<Activity_Uploaded_FilesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<Activity_Uploaded_FilesOrderBy>>
}

export type ActivityConnection = {
  __typename?: 'activityConnection'
  edges: Array<ActivityEdge>
  pageInfo: PageInfo
}

export type ActivityDeleteResponse = {
  __typename?: 'activityDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Activity>
}

export type ActivityEdge = {
  __typename?: 'activityEdge'
  cursor: Scalars['String']['output']
  node: Activity
}

export type ActivityFilter = {
  address?: InputMaybe<StringFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ActivityFilter>>
  cost?: InputMaybe<BigFloatFilter>
  cost_unit?: InputMaybe<StringFilter>
  created_at?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  image_url?: InputMaybe<StringFilter>
  memo?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ActivityFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ActivityFilter>>
  time_from?: InputMaybe<DatetimeFilter>
  time_to?: InputMaybe<DatetimeFilter>
  title?: InputMaybe<StringFilter>
  trip_id?: InputMaybe<UuidFilter>
  url?: InputMaybe<StringFilter>
}

export type ActivityInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>
  cost?: InputMaybe<Scalars['BigFloat']['input']>
  cost_unit?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  image_url?: InputMaybe<Scalars['String']['input']>
  memo?: InputMaybe<Scalars['String']['input']>
  time_from?: InputMaybe<Scalars['Datetime']['input']>
  time_to?: InputMaybe<Scalars['Datetime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  trip_id?: InputMaybe<Scalars['UUID']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type ActivityInsertResponse = {
  __typename?: 'activityInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Activity>
}

export type ActivityOrderBy = {
  address?: InputMaybe<OrderByDirection>
  cost?: InputMaybe<OrderByDirection>
  cost_unit?: InputMaybe<OrderByDirection>
  created_at?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  image_url?: InputMaybe<OrderByDirection>
  memo?: InputMaybe<OrderByDirection>
  time_from?: InputMaybe<OrderByDirection>
  time_to?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
  trip_id?: InputMaybe<OrderByDirection>
  url?: InputMaybe<OrderByDirection>
}

export type ActivityUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>
  cost?: InputMaybe<Scalars['BigFloat']['input']>
  cost_unit?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  image_url?: InputMaybe<Scalars['String']['input']>
  memo?: InputMaybe<Scalars['String']['input']>
  time_from?: InputMaybe<Scalars['Datetime']['input']>
  time_to?: InputMaybe<Scalars['Datetime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  trip_id?: InputMaybe<Scalars['UUID']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type ActivityUpdateResponse = {
  __typename?: 'activityUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Activity>
}

export type Activity_Uploaded_Files = Node & {
  __typename?: 'activity_uploaded_files'
  activity: Activity
  activity_id: Scalars['UUID']['output']
  content_type?: Maybe<Scalars['String']['output']>
  created_at: Scalars['Datetime']['output']
  file_data?: Maybe<Scalars['JSON']['output']>
  file_name: Scalars['String']['output']
  file_url: Scalars['String']['output']
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
}

export type Activity_Uploaded_FilesConnection = {
  __typename?: 'activity_uploaded_filesConnection'
  edges: Array<Activity_Uploaded_FilesEdge>
  pageInfo: PageInfo
}

export type Activity_Uploaded_FilesDeleteResponse = {
  __typename?: 'activity_uploaded_filesDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Activity_Uploaded_Files>
}

export type Activity_Uploaded_FilesEdge = {
  __typename?: 'activity_uploaded_filesEdge'
  cursor: Scalars['String']['output']
  node: Activity_Uploaded_Files
}

export type Activity_Uploaded_FilesFilter = {
  activity_id?: InputMaybe<UuidFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Activity_Uploaded_FilesFilter>>
  content_type?: InputMaybe<StringFilter>
  created_at?: InputMaybe<DatetimeFilter>
  file_name?: InputMaybe<StringFilter>
  file_url?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<Activity_Uploaded_FilesFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Activity_Uploaded_FilesFilter>>
}

export type Activity_Uploaded_FilesInsertInput = {
  activity_id?: InputMaybe<Scalars['UUID']['input']>
  content_type?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  file_data?: InputMaybe<Scalars['JSON']['input']>
  file_name?: InputMaybe<Scalars['String']['input']>
  file_url?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
}

export type Activity_Uploaded_FilesInsertResponse = {
  __typename?: 'activity_uploaded_filesInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Activity_Uploaded_Files>
}

export type Activity_Uploaded_FilesOrderBy = {
  activity_id?: InputMaybe<OrderByDirection>
  content_type?: InputMaybe<OrderByDirection>
  created_at?: InputMaybe<OrderByDirection>
  file_name?: InputMaybe<OrderByDirection>
  file_url?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
}

export type Activity_Uploaded_FilesUpdateInput = {
  activity_id?: InputMaybe<Scalars['UUID']['input']>
  content_type?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  file_data?: InputMaybe<Scalars['JSON']['input']>
  file_name?: InputMaybe<Scalars['String']['input']>
  file_url?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
}

export type Activity_Uploaded_FilesUpdateResponse = {
  __typename?: 'activity_uploaded_filesUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Activity_Uploaded_Files>
}

export type Invitations = Node & {
  __typename?: 'invitations'
  email: Scalars['String']['output']
  id: Scalars['UUID']['output']
  invitation_url: Scalars['String']['output']
  invited_by_user_id?: Maybe<Scalars['UUID']['output']>
  invitee_user_id?: Maybe<Scalars['UUID']['output']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  permission_level: Permission_Level_Enum
  trip_id?: Maybe<Scalars['UUID']['output']>
  trips?: Maybe<Trips>
  users?: Maybe<Users>
}

export type InvitationsConnection = {
  __typename?: 'invitationsConnection'
  edges: Array<InvitationsEdge>
  pageInfo: PageInfo
}

export type InvitationsDeleteResponse = {
  __typename?: 'invitationsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Invitations>
}

export type InvitationsEdge = {
  __typename?: 'invitationsEdge'
  cursor: Scalars['String']['output']
  node: Invitations
}

export type InvitationsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<InvitationsFilter>>
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  invitation_url?: InputMaybe<StringFilter>
  invited_by_user_id?: InputMaybe<UuidFilter>
  invitee_user_id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<InvitationsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<InvitationsFilter>>
  permission_level?: InputMaybe<Permission_Level_EnumFilter>
  trip_id?: InputMaybe<UuidFilter>
}

export type InvitationsInsertInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  invitation_url?: InputMaybe<Scalars['String']['input']>
  invited_by_user_id?: InputMaybe<Scalars['UUID']['input']>
  invitee_user_id?: InputMaybe<Scalars['UUID']['input']>
  permission_level?: InputMaybe<Permission_Level_Enum>
  trip_id?: InputMaybe<Scalars['UUID']['input']>
}

export type InvitationsInsertResponse = {
  __typename?: 'invitationsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Invitations>
}

export type InvitationsOrderBy = {
  email?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  invitation_url?: InputMaybe<OrderByDirection>
  invited_by_user_id?: InputMaybe<OrderByDirection>
  invitee_user_id?: InputMaybe<OrderByDirection>
  permission_level?: InputMaybe<OrderByDirection>
  trip_id?: InputMaybe<OrderByDirection>
}

export type InvitationsUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  invitation_url?: InputMaybe<Scalars['String']['input']>
  invited_by_user_id?: InputMaybe<Scalars['UUID']['input']>
  invitee_user_id?: InputMaybe<Scalars['UUID']['input']>
  permission_level?: InputMaybe<Permission_Level_Enum>
  trip_id?: InputMaybe<Scalars['UUID']['input']>
}

export type InvitationsUpdateResponse = {
  __typename?: 'invitationsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Invitations>
}

export enum Permission_Level_Enum {
  Editable = 'editable',
  ViewOnly = 'view_only'
}

/** Boolean expression comparing fields on type "permission_level_enum" */
export type Permission_Level_EnumFilter = {
  eq?: InputMaybe<Permission_Level_Enum>
  in?: InputMaybe<Array<Permission_Level_Enum>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<Permission_Level_Enum>
}

export type Tags = Node & {
  __typename?: 'tags'
  created_at: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  trip_tagsCollection?: Maybe<Trip_TagsConnection>
  user_id: Scalars['UUID']['output']
  users: Users
}

export type TagsTrip_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<Trip_TagsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<Trip_TagsOrderBy>>
}

export type TagsConnection = {
  __typename?: 'tagsConnection'
  edges: Array<TagsEdge>
  pageInfo: PageInfo
}

export type TagsDeleteResponse = {
  __typename?: 'tagsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Tags>
}

export type TagsEdge = {
  __typename?: 'tagsEdge'
  cursor: Scalars['String']['output']
  node: Tags
}

export type TagsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TagsFilter>>
  created_at?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<TagsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TagsFilter>>
  user_id?: InputMaybe<UuidFilter>
}

export type TagsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  user_id?: InputMaybe<Scalars['UUID']['input']>
}

export type TagsInsertResponse = {
  __typename?: 'tagsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Tags>
}

export type TagsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  user_id?: InputMaybe<OrderByDirection>
}

export type TagsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  user_id?: InputMaybe<Scalars['UUID']['input']>
}

export type TagsUpdateResponse = {
  __typename?: 'tagsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Tags>
}

export type Trip_Tags = Node & {
  __typename?: 'trip_tags'
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  tag_id: Scalars['UUID']['output']
  tags: Tags
  trip_id: Scalars['UUID']['output']
  trips: Trips
}

export type Trip_TagsConnection = {
  __typename?: 'trip_tagsConnection'
  edges: Array<Trip_TagsEdge>
  pageInfo: PageInfo
}

export type Trip_TagsDeleteResponse = {
  __typename?: 'trip_tagsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Trip_Tags>
}

export type Trip_TagsEdge = {
  __typename?: 'trip_tagsEdge'
  cursor: Scalars['String']['output']
  node: Trip_Tags
}

export type Trip_TagsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Trip_TagsFilter>>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<Trip_TagsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Trip_TagsFilter>>
  tag_id?: InputMaybe<UuidFilter>
  trip_id?: InputMaybe<UuidFilter>
}

export type Trip_TagsInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>
  tag_id?: InputMaybe<Scalars['UUID']['input']>
  trip_id?: InputMaybe<Scalars['UUID']['input']>
}

export type Trip_TagsInsertResponse = {
  __typename?: 'trip_tagsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Trip_Tags>
}

export type Trip_TagsOrderBy = {
  id?: InputMaybe<OrderByDirection>
  tag_id?: InputMaybe<OrderByDirection>
  trip_id?: InputMaybe<OrderByDirection>
}

export type Trip_TagsUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>
  tag_id?: InputMaybe<Scalars['UUID']['input']>
  trip_id?: InputMaybe<Scalars['UUID']['input']>
}

export type Trip_TagsUpdateResponse = {
  __typename?: 'trip_tagsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Trip_Tags>
}

export type Trips = Node & {
  __typename?: 'trips'
  activityCollection?: Maybe<ActivityConnection>
  cost?: Maybe<Scalars['BigFloat']['output']>
  cost_unit?: Maybe<Scalars['String']['output']>
  created_at: Scalars['Datetime']['output']
  date_from: Scalars['Datetime']['output']
  date_to?: Maybe<Scalars['Datetime']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['UUID']['output']
  image_url?: Maybe<Scalars['String']['output']>
  invitationsCollection?: Maybe<InvitationsConnection>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  title: Scalars['String']['output']
  trip_tagsCollection?: Maybe<Trip_TagsConnection>
  user_id: Scalars['UUID']['output']
  users: Users
}

export type TripsActivityCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ActivityFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ActivityOrderBy>>
}

export type TripsInvitationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<InvitationsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<InvitationsOrderBy>>
}

export type TripsTrip_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<Trip_TagsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<Trip_TagsOrderBy>>
}

export type TripsConnection = {
  __typename?: 'tripsConnection'
  edges: Array<TripsEdge>
  pageInfo: PageInfo
}

export type TripsDeleteResponse = {
  __typename?: 'tripsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Trips>
}

export type TripsEdge = {
  __typename?: 'tripsEdge'
  cursor: Scalars['String']['output']
  node: Trips
}

export type TripsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TripsFilter>>
  cost?: InputMaybe<BigFloatFilter>
  cost_unit?: InputMaybe<StringFilter>
  created_at?: InputMaybe<DatetimeFilter>
  date_from?: InputMaybe<DatetimeFilter>
  date_to?: InputMaybe<DatetimeFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  image_url?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<TripsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TripsFilter>>
  title?: InputMaybe<StringFilter>
  user_id?: InputMaybe<UuidFilter>
}

export type TripsInsertInput = {
  cost?: InputMaybe<Scalars['BigFloat']['input']>
  cost_unit?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  date_from?: InputMaybe<Scalars['Datetime']['input']>
  date_to?: InputMaybe<Scalars['Datetime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  image_url?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  user_id?: InputMaybe<Scalars['UUID']['input']>
}

export type TripsInsertResponse = {
  __typename?: 'tripsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Trips>
}

export type TripsOrderBy = {
  cost?: InputMaybe<OrderByDirection>
  cost_unit?: InputMaybe<OrderByDirection>
  created_at?: InputMaybe<OrderByDirection>
  date_from?: InputMaybe<OrderByDirection>
  date_to?: InputMaybe<OrderByDirection>
  description?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  image_url?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
  user_id?: InputMaybe<OrderByDirection>
}

export type TripsUpdateInput = {
  cost?: InputMaybe<Scalars['BigFloat']['input']>
  cost_unit?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  date_from?: InputMaybe<Scalars['Datetime']['input']>
  date_to?: InputMaybe<Scalars['Datetime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  image_url?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  user_id?: InputMaybe<Scalars['UUID']['input']>
}

export type TripsUpdateResponse = {
  __typename?: 'tripsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Trips>
}

export type Users = Node & {
  __typename?: 'users'
  email: Scalars['String']['output']
  id: Scalars['UUID']['output']
  invitationsCollection?: Maybe<InvitationsConnection>
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile_picture_url?: Maybe<Scalars['String']['output']>
  tagsCollection?: Maybe<TagsConnection>
  tripsCollection?: Maybe<TripsConnection>
}

export type UsersInvitationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<InvitationsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<InvitationsOrderBy>>
}

export type UsersTagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TagsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TagsOrderBy>>
}

export type UsersTripsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TripsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TripsOrderBy>>
}

export type UsersConnection = {
  __typename?: 'usersConnection'
  edges: Array<UsersEdge>
  pageInfo: PageInfo
}

export type UsersDeleteResponse = {
  __typename?: 'usersDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Users>
}

export type UsersEdge = {
  __typename?: 'usersEdge'
  cursor: Scalars['String']['output']
  node: Users
}

export type UsersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UsersFilter>>
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<UsersFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersFilter>>
  profile_picture_url?: InputMaybe<StringFilter>
}

export type UsersInsertInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  profile_picture_url?: InputMaybe<Scalars['String']['input']>
}

export type UsersInsertResponse = {
  __typename?: 'usersInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Users>
}

export type UsersOrderBy = {
  email?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  profile_picture_url?: InputMaybe<OrderByDirection>
}

export type UsersUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  profile_picture_url?: InputMaybe<Scalars['String']['input']>
}

export type UsersUpdateResponse = {
  __typename?: 'usersUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Users>
}

export type GetUserQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type GetUserQuery = {
  __typename: 'Query'
  usersCollection?: {
    __typename: 'usersConnection'
    edges: Array<{
      __typename: 'usersEdge'
      node: {
        __typename: 'users'
        id: string
        email: string
        name: string
        profile_picture_url?: string | null
      }
    }>
  } | null
}

export type CreateActivityMutationVariables = Exact<{
  object: ActivityInsertInput
}>

export type CreateActivityMutation = {
  __typename: 'Mutation'
  insertIntoactivityCollection?: {
    __typename: 'activityInsertResponse'
    records: Array<{ __typename: 'activity'; id: string; title: string }>
  } | null
}

export type CreateActivityUploadedFilesMutationVariables = Exact<{
  objects:
    | Array<Activity_Uploaded_FilesInsertInput>
    | Activity_Uploaded_FilesInsertInput
}>

export type CreateActivityUploadedFilesMutation = {
  __typename: 'Mutation'
  insertIntoactivity_uploaded_filesCollection?: {
    __typename: 'activity_uploaded_filesInsertResponse'
    records: Array<{
      __typename: 'activity_uploaded_files'
      id: string
      activity_id: string
      file_name: string
      file_url: string
    }>
  } | null
}

export type DeleteActivityMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteActivityMutation = {
  __typename: 'Mutation'
  deleteFromactivityCollection: {
    __typename: 'activityDeleteResponse'
    records: Array<{
      __typename: 'activity'
      id: string
      trip_id: string
      title: string
    }>
  }
}

export type UpdateActivityMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  set: ActivityUpdateInput
}>

export type UpdateActivityMutation = {
  __typename: 'Mutation'
  updateactivityCollection: {
    __typename: 'activityUpdateResponse'
    records: Array<{ __typename: 'activity'; id: string; title: string }>
  }
}

export type ActivityCollectionQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type ActivityCollectionQuery = {
  __typename: 'Query'
  activityCollection?: {
    __typename: 'activityConnection'
    edges: Array<{
      __typename: 'activityEdge'
      node: {
        __typename: 'activity'
        id: string
        trip_id: string
        title: string
        time_from: string
        time_to?: string | null
        address?: string | null
        url?: string | null
        memo?: string | null
        cost?: string | null
        cost_unit?: string | null
        activity_uploaded_filesCollection?: {
          __typename: 'activity_uploaded_filesConnection'
          edges: Array<{
            __typename: 'activity_uploaded_filesEdge'
            node: {
              __typename: 'activity_uploaded_files'
              id: string
              file_name: string
              file_url: string
            }
          }>
        } | null
      }
    }>
  } | null
}

export type DeleteInvitationMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteInvitationMutation = {
  __typename: 'Mutation'
  deleteFrominvitationsCollection: {
    __typename: 'invitationsDeleteResponse'
    records: Array<{
      __typename: 'invitations'
      id: string
      email: string
      permission_level: Permission_Level_Enum
    }>
  }
}

export type UpdateInvitationMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  set: InvitationsUpdateInput
}>

export type UpdateInvitationMutation = {
  __typename: 'Mutation'
  updateinvitationsCollection: {
    __typename: 'invitationsUpdateResponse'
    records: Array<{
      __typename: 'invitations'
      id: string
      email: string
      permission_level: Permission_Level_Enum
    }>
  }
}

export type TripSharedUsersQueryVariables = Exact<{
  tripId: Scalars['UUID']['input']
}>

export type TripSharedUsersQuery = {
  __typename: 'Query'
  tripsCollection?: {
    __typename: 'tripsConnection'
    edges: Array<{
      __typename: 'tripsEdge'
      node: {
        __typename: 'trips'
        id: string
        title: string
        users: {
          __typename: 'users'
          id: string
          name: string
          profile_picture_url?: string | null
          email: string
        }
        invitationsCollection?: {
          __typename: 'invitationsConnection'
          edges: Array<{
            __typename: 'invitationsEdge'
            node: {
              __typename: 'invitations'
              id: string
              permission_level: Permission_Level_Enum
              users?: {
                __typename: 'users'
                id: string
                name: string
                email: string
                profile_picture_url?: string | null
              } | null
            }
          }>
        } | null
      }
    }>
  } | null
}

export type CreateTagMutationVariables = Exact<{
  name: Scalars['String']['input']
  userId: Scalars['UUID']['input']
}>

export type CreateTagMutation = {
  __typename: 'Mutation'
  insertIntotagsCollection?: {
    __typename: 'tagsInsertResponse'
    records: Array<{ __typename: 'tags'; id: string; name: string }>
  } | null
}

export type CreateTripMutationVariables = Exact<{
  object: TripsInsertInput
}>

export type CreateTripMutation = {
  __typename: 'Mutation'
  insertIntotripsCollection?: {
    __typename: 'tripsInsertResponse'
    records: Array<{ __typename: 'trips'; id: string; title: string }>
  } | null
}

export type CreateTripTagMutationVariables = Exact<{
  tripId: Scalars['UUID']['input']
  tagId: Scalars['UUID']['input']
}>

export type CreateTripTagMutation = {
  __typename: 'Mutation'
  insertIntotrip_tagsCollection?: {
    __typename: 'trip_tagsInsertResponse'
    records: Array<{
      __typename: 'trip_tags'
      id: string
      tag_id: string
      trip_id: string
    }>
  } | null
}

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteTagMutation = {
  __typename: 'Mutation'
  deleteFromtagsCollection: {
    __typename: 'tagsDeleteResponse'
    records: Array<{ __typename: 'tags'; id: string; name: string }>
  }
}

export type DeleteTripMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  userId: Scalars['UUID']['input']
}>

export type DeleteTripMutation = {
  __typename: 'Mutation'
  deleteFromtripsCollection: {
    __typename: 'tripsDeleteResponse'
    records: Array<{ __typename: 'trips'; id: string; title: string }>
  }
}

export type DeleteTripTagMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteTripTagMutation = {
  __typename: 'Mutation'
  deleteFromtrip_tagsCollection: {
    __typename: 'trip_tagsDeleteResponse'
    records: Array<{ __typename: 'trip_tags'; id: string }>
  }
}

export type UpdateTripMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  set: TripsUpdateInput
}>

export type UpdateTripMutation = {
  __typename: 'Mutation'
  updatetripsCollection: {
    __typename: 'tripsUpdateResponse'
    records: Array<{ __typename: 'trips'; id: string; title: string }>
  }
}

export type TagsCollectionQueryVariables = Exact<{
  userId: Scalars['UUID']['input']
}>

export type TagsCollectionQuery = {
  __typename: 'Query'
  tagsCollection?: {
    __typename: 'tagsConnection'
    edges: Array<{
      __typename: 'tagsEdge'
      node: { __typename: 'tags'; id: string; name: string }
    }>
  } | null
}

export type TripDetailsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>
}>

export type TripDetailsQuery = {
  __typename: 'Query'
  tripsCollection?: {
    __typename: 'tripsConnection'
    edges: Array<{
      __typename: 'tripsEdge'
      node: {
        __typename: 'trips'
        id: string
        title: string
        date_from: string
        date_to?: string | null
        image_url?: string | null
        cost?: string | null
        cost_unit?: string | null
        users: {
          __typename: 'users'
          id: string
          profile_picture_url?: string | null
        }
        invitationsCollection?: {
          __typename: 'invitationsConnection'
          edges: Array<{
            __typename: 'invitationsEdge'
            node: {
              __typename: 'invitations'
              users?: {
                __typename: 'users'
                id: string
                profile_picture_url?: string | null
              } | null
            }
          }>
        } | null
        activityCollection?: {
          __typename: 'activityConnection'
          edges: Array<{
            __typename: 'activityEdge'
            node: {
              __typename: 'activity'
              id: string
              title: string
              time_from: string
              time_to?: string | null
              address?: string | null
            }
          }>
        } | null
        trip_tagsCollection?: {
          __typename: 'trip_tagsConnection'
          edges: Array<{
            __typename: 'trip_tagsEdge'
            node: {
              __typename: 'trip_tags'
              tags: { __typename: 'tags'; id: string; name: string }
            }
          }>
        } | null
      }
    }>
  } | null
}

export type TripTagsCollectionQueryVariables = Exact<{
  filter?: InputMaybe<Trip_TagsFilter>
}>

export type TripTagsCollectionQuery = {
  __typename: 'Query'
  trip_tagsCollection?: {
    __typename: 'trip_tagsConnection'
    edges: Array<{
      __typename: 'trip_tagsEdge'
      node: {
        __typename: 'trip_tags'
        id: string
        trip_id: string
        tag_id: string
      }
    }>
  } | null
}

export type TripsCollectionQueryVariables = Exact<{
  filter?: InputMaybe<TripsFilter>
  orderBy?: InputMaybe<Array<TripsOrderBy> | TripsOrderBy>
  first: Scalars['Int']['input']
  after?: InputMaybe<Scalars['Cursor']['input']>
}>

export type TripsCollectionQuery = {
  __typename: 'Query'
  tripsCollection?: {
    __typename: 'tripsConnection'
    edges: Array<{
      __typename: 'tripsEdge'
      node: {
        __typename: 'trips'
        id: string
        title: string
        date_from: string
        date_to?: string | null
        image_url?: string | null
        created_at: string
        users: {
          __typename: 'users'
          id: string
          name: string
          profile_picture_url?: string | null
        }
        invitationsCollection?: {
          __typename: 'invitationsConnection'
          edges: Array<{
            __typename: 'invitationsEdge'
            node: {
              __typename: 'invitations'
              users?: {
                __typename: 'users'
                id: string
                profile_picture_url?: string | null
              } | null
            }
          }>
        } | null
        activityCollection?: {
          __typename: 'activityConnection'
          edges: Array<{
            __typename: 'activityEdge'
            node: { __typename: 'activity'; id: string }
          }>
        } | null
      }
    }>
    pageInfo: {
      __typename: 'PageInfo'
      startCursor?: string | null
      endCursor?: string | null
      hasPreviousPage: boolean
      hasNextPage: boolean
    }
  } | null
}

export const GetUserDocument = {
  __meta__: { hash: '00c528b2b1c851c06119aedb1fba6b5c885713cf' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'usersCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'email' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' }
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'profile_picture_url'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>
export const CreateActivityDocument = {
  __meta__: { hash: '374de4fe4f2de1741f44619ae25c008fee655937' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createActivity' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'object' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'activityInsertInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntoactivityCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'Variable',
                      name: { kind: 'Name', value: 'object' }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  CreateActivityMutation,
  CreateActivityMutationVariables
>
export const CreateActivityUploadedFilesDocument = {
  __meta__: { hash: '9b12c83c4bb7cae7ead1221919c3842b1d446e35' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createActivityUploadedFiles' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'objects' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'activity_uploaded_filesInsertInput'
                  }
                }
              }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'insertIntoactivity_uploaded_filesCollection'
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'objects' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'activity_id' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'file_name' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'file_url' }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  CreateActivityUploadedFilesMutation,
  CreateActivityUploadedFilesMutationVariables
>
export const DeleteActivityDocument = {
  __meta__: { hash: 'f86bef447c736e2937994ec37ca883ee109fa6c5' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteActivity' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteFromactivityCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'trip_id' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  DeleteActivityMutation,
  DeleteActivityMutationVariables
>
export const UpdateActivityDocument = {
  __meta__: { hash: 'd6d6be943e738534556ff6a112b8dea268daf1f6' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateActivity' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'set' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'activityUpdateInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateactivityCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'set' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'set' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  UpdateActivityMutation,
  UpdateActivityMutationVariables
>
export const ActivityCollectionDocument = {
  __meta__: { hash: '3e04fac286fc4b6bc6c6d91483ca2b248b25bad6' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'activityCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'activityCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'trip_id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'time_from' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'time_to' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memo' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'cost' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'cost_unit' }
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'activity_uploaded_filesCollection'
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'edges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: '__typename'
                                          }
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: '__typename'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'id'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'file_name'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'file_url'
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  ActivityCollectionQuery,
  ActivityCollectionQueryVariables
>
export const DeleteInvitationDocument = {
  __meta__: { hash: 'f83929f3ffa8a8ea910e5e66156925ab379aa04d' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteInvitation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteFrominvitationsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permission_level' }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  DeleteInvitationMutation,
  DeleteInvitationMutationVariables
>
export const UpdateInvitationDocument = {
  __meta__: { hash: '173d22f901d3e0b557eb5eb4ce5ab0adededf9e7' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateInvitation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'set' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'invitationsUpdateInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateinvitationsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'set' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'set' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permission_level' }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  UpdateInvitationMutation,
  UpdateInvitationMutationVariables
>
export const TripSharedUsersDocument = {
  __meta__: { hash: '16ece6918ea030b3bf8bcf763c1a296e90d6dcf9' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'tripSharedUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tripId' }
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tripsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'tripId' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'users' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'profile_picture_url'
                                    }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' }
                                  }
                                ]
                              }
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'invitationsCollection'
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'edges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: '__typename'
                                          }
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: '__typename'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'id'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'permission_level'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'users'
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: '__typename'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'id'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'name'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'email'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value:
                                                          'profile_picture_url'
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  TripSharedUsersQuery,
  TripSharedUsersQueryVariables
>
export const CreateTagDocument = {
  __meta__: { hash: '9ecd6081f83febe06337ebd01345eef596b81cf9' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createTag' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' }
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntotagsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'name' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'name' }
                          }
                        },
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'user_id' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'userId' }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<CreateTagMutation, CreateTagMutationVariables>
export const CreateTripDocument = {
  __meta__: { hash: '68140ac8465fd7c6f5bab39db9eec02dab9501ef' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createTrip' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'object' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'tripsInsertInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntotripsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'Variable',
                      name: { kind: 'Name', value: 'object' }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<CreateTripMutation, CreateTripMutationVariables>
export const CreateTripTagDocument = {
  __meta__: { hash: 'b86b0c68b8ee2697ff1b539e5df92575cedb30f0' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createTripTag' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tripId' }
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tagId' }
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntotrip_tagsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'trip_id' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'tripId' }
                          }
                        },
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'tag_id' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'tagId' }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tag_id' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'trip_id' }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  CreateTripTagMutation,
  CreateTripTagMutationVariables
>
export const DeleteTagDocument = {
  __meta__: { hash: 'c661c9a00fdae1dbac69eeb283611e0c9202cf55' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteTag' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteFromtagsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<DeleteTagMutation, DeleteTagMutationVariables>
export const DeleteTripDocument = {
  __meta__: { hash: '6e8dd46bc33661ac768394595679671f8b605429' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteTrip' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' }
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteFromtripsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user_id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'userId' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<DeleteTripMutation, DeleteTripMutationVariables>
export const DeleteTripTagDocument = {
  __meta__: { hash: '1a4d048db574dedfebd859dc737e16a42021f3ff' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteTripTag' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteFromtrip_tagsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  DeleteTripTagMutation,
  DeleteTripTagMutationVariables
>
export const UpdateTripDocument = {
  __meta__: { hash: '7b9783d44e5c70098239e977664434de3eae6204' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateTrip' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'set' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'tripsUpdateInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updatetripsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'set' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'set' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<UpdateTripMutation, UpdateTripMutationVariables>
export const TagsCollectionDocument = {
  __meta__: { hash: '994a2e7e0694c279cbfeff6c8696cbbe6a0c687c' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'tagsCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' }
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tagsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user_id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'userId' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'created_at' },
                      value: { kind: 'EnumValue', value: 'AscNullsLast' }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<TagsCollectionQuery, TagsCollectionQueryVariables>
export const TripDetailsDocument = {
  __meta__: { hash: 'e40d7c2a09852d29b44908c4c24cbcfa2dbce660' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'tripDetails' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tripsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'date_from' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'date_to' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image_url' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'cost' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'cost_unit' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'users' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'profile_picture_url'
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'invitationsCollection'
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'edges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: '__typename'
                                          }
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: '__typename'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'users'
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: '__typename'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'id'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value:
                                                          'profile_picture_url'
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'activityCollection'
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'edges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: '__typename'
                                          }
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: '__typename'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'id'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'title'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'time_from'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'time_to'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'address'
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'trip_tagsCollection'
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'edges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: '__typename'
                                          }
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: '__typename'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'tags'
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: '__typename'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'id'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'name'
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<TripDetailsQuery, TripDetailsQueryVariables>
export const TripTagsCollectionDocument = {
  __meta__: { hash: 'f4142b2a2f4ab96ce0e69488851fdff976486652' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'tripTagsCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' }
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'trip_tagsFilter' }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'trip_tagsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'trip_id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tag_id' }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  TripTagsCollectionQuery,
  TripTagsCollectionQueryVariables
>
export const TripsCollectionDocument = {
  __meta__: { hash: '848b1879d86d9282d2bb3a3d1016f42dd7e5cc56' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'tripsCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' }
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'tripsFilter' }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' }
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'tripsOrderBy' }
              }
            }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' }
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' }
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Cursor' } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tripsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'date_from' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'date_to' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image_url' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'created_at' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'users' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'profile_picture_url'
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'invitationsCollection'
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'edges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: '__typename'
                                          }
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: '__typename'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'users'
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: '__typename'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'id'
                                                      }
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value:
                                                          'profile_picture_url'
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'activityCollection'
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'edges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: '__typename'
                                          }
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: '__typename'
                                                }
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'id'
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startCursor' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasPreviousPage' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  TripsCollectionQuery,
  TripsCollectionQueryVariables
>
