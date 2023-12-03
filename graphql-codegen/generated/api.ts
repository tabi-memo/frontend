import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
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
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigFloat: { input: number; output: number }
  BigInt: { input: number; output: number }
  Cursor: { input: any; output: any }
  Date: { input: string; output: string }
  Datetime: { input: string; output: string }
  JSON: { input: string; output: string }
  Opaque: { input: any; output: any }
  Time: { input: string; output: string }
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
  /** Deletes zero or more records from the `invitations` collection */
  deleteFrominvitationsCollection: InvitationsDeleteResponse
  /** Deletes zero or more records from the `tags` collection */
  deleteFromtagsCollection: TagsDeleteResponse
  /** Deletes zero or more records from the `test_tenant` collection */
  deleteFromtest_tenantCollection: Test_TenantDeleteResponse
  /** Deletes zero or more records from the `trip_tags` collection */
  deleteFromtrip_tagsCollection: Trip_TagsDeleteResponse
  /** Deletes zero or more records from the `trips` collection */
  deleteFromtripsCollection: TripsDeleteResponse
  /** Deletes zero or more records from the `users` collection */
  deleteFromusersCollection: UsersDeleteResponse
  /** Adds one or more `activity` records to the collection */
  insertIntoactivityCollection?: Maybe<ActivityInsertResponse>
  /** Adds one or more `invitations` records to the collection */
  insertIntoinvitationsCollection?: Maybe<InvitationsInsertResponse>
  /** Adds one or more `tags` records to the collection */
  insertIntotagsCollection?: Maybe<TagsInsertResponse>
  /** Adds one or more `test_tenant` records to the collection */
  insertIntotest_tenantCollection?: Maybe<Test_TenantInsertResponse>
  /** Adds one or more `trip_tags` records to the collection */
  insertIntotrip_tagsCollection?: Maybe<Trip_TagsInsertResponse>
  /** Adds one or more `trips` records to the collection */
  insertIntotripsCollection?: Maybe<TripsInsertResponse>
  /** Adds one or more `users` records to the collection */
  insertIntousersCollection?: Maybe<UsersInsertResponse>
  /** Updates zero or more records in the `activity` collection */
  updateactivityCollection: ActivityUpdateResponse
  /** Updates zero or more records in the `invitations` collection */
  updateinvitationsCollection: InvitationsUpdateResponse
  /** Updates zero or more records in the `tags` collection */
  updatetagsCollection: TagsUpdateResponse
  /** Updates zero or more records in the `test_tenant` collection */
  updatetest_tenantCollection: Test_TenantUpdateResponse
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
export type MutationDeleteFromtest_TenantCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<Test_TenantFilter>
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
export type MutationInsertIntoinvitationsCollectionArgs = {
  objects: Array<InvitationsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntotagsCollectionArgs = {
  objects: Array<TagsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntotest_TenantCollectionArgs = {
  objects: Array<Test_TenantInsertInput>
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
export type MutationUpdatetest_TenantCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<Test_TenantFilter>
  set: Test_TenantUpdateInput
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
  /** A pagable collection of type `invitations` */
  invitationsCollection?: Maybe<InvitationsConnection>
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `tags` */
  tagsCollection?: Maybe<TagsConnection>
  /** A pagable collection of type `test_tenant` */
  test_tenantCollection?: Maybe<Test_TenantConnection>
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
export type QueryTest_TenantCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<Test_TenantFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<Test_TenantOrderBy>>
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
  address?: Maybe<Scalars['String']['output']>
  cost?: Maybe<Scalars['BigFloat']['output']>
  id: Scalars['BigInt']['output']
  image_storage_object_id?: Maybe<Scalars['UUID']['output']>
  memo?: Maybe<Scalars['String']['output']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  time_from: Scalars['Datetime']['output']
  time_to?: Maybe<Scalars['Datetime']['output']>
  title: Scalars['String']['output']
  trip_id?: Maybe<Scalars['BigInt']['output']>
  trips?: Maybe<Trips>
  url?: Maybe<Scalars['String']['output']>
  uuid: Scalars['UUID']['output']
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
  cost?: InputMaybe<BigFloatFilter>
  id?: InputMaybe<BigIntFilter>
  image_storage_object_id?: InputMaybe<UuidFilter>
  memo?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  time_from?: InputMaybe<DatetimeFilter>
  time_to?: InputMaybe<DatetimeFilter>
  title?: InputMaybe<StringFilter>
  trip_id?: InputMaybe<BigIntFilter>
  url?: InputMaybe<StringFilter>
  uuid?: InputMaybe<UuidFilter>
}

export type ActivityInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>
  cost?: InputMaybe<Scalars['BigFloat']['input']>
  image_storage_object_id?: InputMaybe<Scalars['UUID']['input']>
  memo?: InputMaybe<Scalars['String']['input']>
  time_from?: InputMaybe<Scalars['Datetime']['input']>
  time_to?: InputMaybe<Scalars['Datetime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  trip_id?: InputMaybe<Scalars['BigInt']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
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
  id?: InputMaybe<OrderByDirection>
  image_storage_object_id?: InputMaybe<OrderByDirection>
  memo?: InputMaybe<OrderByDirection>
  time_from?: InputMaybe<OrderByDirection>
  time_to?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
  trip_id?: InputMaybe<OrderByDirection>
  url?: InputMaybe<OrderByDirection>
  uuid?: InputMaybe<OrderByDirection>
}

export type ActivityUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>
  cost?: InputMaybe<Scalars['BigFloat']['input']>
  image_storage_object_id?: InputMaybe<Scalars['UUID']['input']>
  memo?: InputMaybe<Scalars['String']['input']>
  time_from?: InputMaybe<Scalars['Datetime']['input']>
  time_to?: InputMaybe<Scalars['Datetime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  trip_id?: InputMaybe<Scalars['BigInt']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
}

export type ActivityUpdateResponse = {
  __typename?: 'activityUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Activity>
}

export type Invitations = Node & {
  __typename?: 'invitations'
  email: Scalars['String']['output']
  id: Scalars['BigInt']['output']
  invitation_url: Scalars['String']['output']
  invited_by_user_id?: Maybe<Scalars['BigInt']['output']>
  invitee_user_id?: Maybe<Scalars['BigInt']['output']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  permission_level: Permission_Level_Enum
  trip_id?: Maybe<Scalars['BigInt']['output']>
  trips?: Maybe<Trips>
  users?: Maybe<Users>
  uuid: Scalars['UUID']['output']
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
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<BigIntFilter>
  invitation_url?: InputMaybe<StringFilter>
  invited_by_user_id?: InputMaybe<BigIntFilter>
  invitee_user_id?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  permission_level?: InputMaybe<Permission_Level_EnumFilter>
  trip_id?: InputMaybe<BigIntFilter>
  uuid?: InputMaybe<UuidFilter>
}

export type InvitationsInsertInput = {
  email?: InputMaybe<Scalars['String']['input']>
  invitation_url?: InputMaybe<Scalars['String']['input']>
  invited_by_user_id?: InputMaybe<Scalars['BigInt']['input']>
  invitee_user_id?: InputMaybe<Scalars['BigInt']['input']>
  permission_level?: InputMaybe<Permission_Level_Enum>
  trip_id?: InputMaybe<Scalars['BigInt']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
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
  uuid?: InputMaybe<OrderByDirection>
}

export type InvitationsUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>
  invitation_url?: InputMaybe<Scalars['String']['input']>
  invited_by_user_id?: InputMaybe<Scalars['BigInt']['input']>
  invitee_user_id?: InputMaybe<Scalars['BigInt']['input']>
  permission_level?: InputMaybe<Permission_Level_Enum>
  trip_id?: InputMaybe<Scalars['BigInt']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
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
  id: Scalars['BigInt']['output']
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  trip_tagsCollection?: Maybe<Trip_TagsConnection>
  uuid: Scalars['UUID']['output']
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
  id?: InputMaybe<BigIntFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  uuid?: InputMaybe<UuidFilter>
}

export type TagsInsertInput = {
  name?: InputMaybe<Scalars['String']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
}

export type TagsInsertResponse = {
  __typename?: 'tagsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Tags>
}

export type TagsOrderBy = {
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  uuid?: InputMaybe<OrderByDirection>
}

export type TagsUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
}

export type TagsUpdateResponse = {
  __typename?: 'tagsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Tags>
}

export type Test_Tenant = Node & {
  __typename?: 'test_tenant'
  details?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
}

export type Test_TenantConnection = {
  __typename?: 'test_tenantConnection'
  edges: Array<Test_TenantEdge>
  pageInfo: PageInfo
}

export type Test_TenantDeleteResponse = {
  __typename?: 'test_tenantDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Test_Tenant>
}

export type Test_TenantEdge = {
  __typename?: 'test_tenantEdge'
  cursor: Scalars['String']['output']
  node: Test_Tenant
}

export type Test_TenantFilter = {
  details?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  nodeId?: InputMaybe<IdFilter>
}

export type Test_TenantInsertInput = {
  details?: InputMaybe<Scalars['String']['input']>
}

export type Test_TenantInsertResponse = {
  __typename?: 'test_tenantInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Test_Tenant>
}

export type Test_TenantOrderBy = {
  details?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
}

export type Test_TenantUpdateInput = {
  details?: InputMaybe<Scalars['String']['input']>
}

export type Test_TenantUpdateResponse = {
  __typename?: 'test_tenantUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Test_Tenant>
}

export type Trip_Tags = Node & {
  __typename?: 'trip_tags'
  id: Scalars['BigInt']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  tag_id?: Maybe<Scalars['BigInt']['output']>
  tags?: Maybe<Tags>
  trip_id?: Maybe<Scalars['BigInt']['output']>
  trips?: Maybe<Trips>
  uuid: Scalars['UUID']['output']
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
  id?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  tag_id?: InputMaybe<BigIntFilter>
  trip_id?: InputMaybe<BigIntFilter>
  uuid?: InputMaybe<UuidFilter>
}

export type Trip_TagsInsertInput = {
  tag_id?: InputMaybe<Scalars['BigInt']['input']>
  trip_id?: InputMaybe<Scalars['BigInt']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
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
  uuid?: InputMaybe<OrderByDirection>
}

export type Trip_TagsUpdateInput = {
  tag_id?: InputMaybe<Scalars['BigInt']['input']>
  trip_id?: InputMaybe<Scalars['BigInt']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
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
  created_at: Scalars['Datetime']['output']
  date_from: Scalars['Date']['output']
  date_to?: Maybe<Scalars['Date']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['BigInt']['output']
  image_storage_object_id?: Maybe<Scalars['UUID']['output']>
  invitationsCollection?: Maybe<InvitationsConnection>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  title: Scalars['String']['output']
  trip_tagsCollection?: Maybe<Trip_TagsConnection>
  user_id?: Maybe<Scalars['BigInt']['output']>
  users?: Maybe<Users>
  uuid: Scalars['UUID']['output']
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
  cost?: InputMaybe<BigFloatFilter>
  created_at?: InputMaybe<DatetimeFilter>
  date_from?: InputMaybe<DateFilter>
  date_to?: InputMaybe<DateFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<BigIntFilter>
  image_storage_object_id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  title?: InputMaybe<StringFilter>
  user_id?: InputMaybe<BigIntFilter>
  uuid?: InputMaybe<UuidFilter>
}

export type TripsInsertInput = {
  cost?: InputMaybe<Scalars['BigFloat']['input']>
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  date_from?: InputMaybe<Scalars['Date']['input']>
  date_to?: InputMaybe<Scalars['Date']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  image_storage_object_id?: InputMaybe<Scalars['UUID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  user_id?: InputMaybe<Scalars['BigInt']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
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
  created_at?: InputMaybe<OrderByDirection>
  date_from?: InputMaybe<OrderByDirection>
  date_to?: InputMaybe<OrderByDirection>
  description?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  image_storage_object_id?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
  user_id?: InputMaybe<OrderByDirection>
  uuid?: InputMaybe<OrderByDirection>
}

export type TripsUpdateInput = {
  cost?: InputMaybe<Scalars['BigFloat']['input']>
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  date_from?: InputMaybe<Scalars['Date']['input']>
  date_to?: InputMaybe<Scalars['Date']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  image_storage_object_id?: InputMaybe<Scalars['UUID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  user_id?: InputMaybe<Scalars['BigInt']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
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
  id: Scalars['BigInt']['output']
  invitationsCollection?: Maybe<InvitationsConnection>
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile_picture_url?: Maybe<Scalars['String']['output']>
  tripsCollection?: Maybe<TripsConnection>
  uuid: Scalars['UUID']['output']
}

export type UsersInvitationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<InvitationsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<InvitationsOrderBy>>
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
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<BigIntFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  profile_picture_url?: InputMaybe<StringFilter>
  uuid?: InputMaybe<UuidFilter>
}

export type UsersInsertInput = {
  email?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  profile_picture_url?: InputMaybe<Scalars['String']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
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
  uuid?: InputMaybe<OrderByDirection>
}

export type UsersUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  profile_picture_url?: InputMaybe<Scalars['String']['input']>
  uuid?: InputMaybe<Scalars['UUID']['input']>
}

export type UsersUpdateResponse = {
  __typename?: 'usersUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Users>
}

export type GetUserQueryVariables = Exact<{
  uuid: Scalars['UUID']['input']
}>

export type GetUserQuery = {
  __typename: 'Query'
  usersCollection?: {
    __typename: 'usersConnection'
    edges: Array<{
      __typename: 'usersEdge'
      node: {
        __typename: 'users'
        uuid: string
        email: string
        name: string
        profile_picture_url?: string | null
      }
    }>
  } | null
}

export type CreateTripMutationVariables = Exact<{
  user_id: Scalars['BigInt']['input']
  title: Scalars['String']['input']
  date_from?: InputMaybe<Scalars['Date']['input']>
  date_to?: InputMaybe<Scalars['Date']['input']>
}>

export type CreateTripMutation = {
  __typename: 'Mutation'
  insertIntotripsCollection?: {
    __typename: 'tripsInsertResponse'
    records: Array<{
      __typename: 'trips'
      id: number
      uuid: string
      title: string
    }>
  } | null
}

export type TripDetailsQueryVariables = Exact<{
  uuid: Scalars['UUID']['input']
}>

export type TripDetailsQuery = {
  __typename: 'Query'
  tripsCollection?: {
    __typename: 'tripsConnection'
    edges: Array<{
      __typename: 'tripsEdge'
      node: {
        __typename: 'trips'
        uuid: string
        title: string
        date_from: string
        date_to?: string | null
        image_storage_object_id?: string | null
        invitationsCollection?: {
          __typename: 'invitationsConnection'
          edges: Array<{
            __typename: 'invitationsEdge'
            node: {
              __typename: 'invitations'
              users?: {
                __typename: 'users'
                id: number
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
              uuid: string
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
              tags?: { __typename: 'tags'; id: number; name: string } | null
            }
          }>
        } | null
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
        id: number
        uuid: string
        title: string
        date_from: string
        date_to?: string | null
        image_storage_object_id?: string | null
        created_at: string
        invitationsCollection?: {
          __typename: 'invitationsConnection'
          edges: Array<{
            __typename: 'invitationsEdge'
            node: {
              __typename: 'invitations'
              users?: {
                __typename: 'users'
                id: number
                profile_picture_url?: string | null
              } | null
            }
          }>
        } | null
        activityCollection?: {
          __typename: 'activityConnection'
          edges: Array<{
            __typename: 'activityEdge'
            node: { __typename: 'activity'; id: number }
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

export const GetUserDocument = gql`
  query getUser($uuid: UUID!) {
    __typename
    usersCollection(filter: { uuid: { eq: $uuid } }) {
      __typename
      edges {
        __typename
        node {
          __typename
          uuid
          email
          name
          profile_picture_url
        }
      }
    }
  }
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  )
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  )
}
export function useGetUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  )
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserSuspenseQueryHookResult = ReturnType<
  typeof useGetUserSuspenseQuery
>
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>
export function refetchGetUserQuery(variables: GetUserQueryVariables) {
  return { query: GetUserDocument, variables: variables }
}
export const CreateTripDocument = gql`
  mutation createTrip(
    $user_id: BigInt!
    $title: String!
    $date_from: Date
    $date_to: Date
  ) {
    __typename
    insertIntotripsCollection(
      objects: [
        {
          user_id: $user_id
          title: $title
          date_from: $date_from
          date_to: $date_to
        }
      ]
    ) {
      __typename
      records {
        __typename
        id
        uuid
        title
      }
    }
  }
`
export type CreateTripMutationFn = Apollo.MutationFunction<
  CreateTripMutation,
  CreateTripMutationVariables
>

/**
 * __useCreateTripMutation__
 *
 * To run a mutation, you first call `useCreateTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTripMutation, { data, loading, error }] = useCreateTripMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      title: // value for 'title'
 *      date_from: // value for 'date_from'
 *      date_to: // value for 'date_to'
 *   },
 * });
 */
export function useCreateTripMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTripMutation,
    CreateTripMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateTripMutation, CreateTripMutationVariables>(
    CreateTripDocument,
    options
  )
}
export type CreateTripMutationHookResult = ReturnType<
  typeof useCreateTripMutation
>
export type CreateTripMutationResult = Apollo.MutationResult<CreateTripMutation>
export type CreateTripMutationOptions = Apollo.BaseMutationOptions<
  CreateTripMutation,
  CreateTripMutationVariables
>
export const TripDetailsDocument = gql`
  query tripDetails($uuid: UUID!) {
    __typename
    tripsCollection(filter: { uuid: { eq: $uuid } }) {
      __typename
      edges {
        __typename
        node {
          __typename
          uuid
          title
          date_from
          date_to
          image_storage_object_id
          invitationsCollection {
            __typename
            edges {
              __typename
              node {
                __typename
                users {
                  __typename
                  id
                  profile_picture_url
                }
              }
            }
          }
          activityCollection {
            __typename
            edges {
              __typename
              node {
                __typename
                uuid
                title
                time_from
                time_to
                address
              }
            }
          }
          trip_tagsCollection {
            __typename
            edges {
              __typename
              node {
                __typename
                tags {
                  __typename
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

/**
 * __useTripDetailsQuery__
 *
 * To run a query within a React component, call `useTripDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripDetailsQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useTripDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    TripDetailsQuery,
    TripDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TripDetailsQuery, TripDetailsQueryVariables>(
    TripDetailsDocument,
    options
  )
}
export function useTripDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TripDetailsQuery,
    TripDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TripDetailsQuery, TripDetailsQueryVariables>(
    TripDetailsDocument,
    options
  )
}
export function useTripDetailsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    TripDetailsQuery,
    TripDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<TripDetailsQuery, TripDetailsQueryVariables>(
    TripDetailsDocument,
    options
  )
}
export type TripDetailsQueryHookResult = ReturnType<typeof useTripDetailsQuery>
export type TripDetailsLazyQueryHookResult = ReturnType<
  typeof useTripDetailsLazyQuery
>
export type TripDetailsSuspenseQueryHookResult = ReturnType<
  typeof useTripDetailsSuspenseQuery
>
export type TripDetailsQueryResult = Apollo.QueryResult<
  TripDetailsQuery,
  TripDetailsQueryVariables
>
export function refetchTripDetailsQuery(variables: TripDetailsQueryVariables) {
  return { query: TripDetailsDocument, variables: variables }
}
export const TripsCollectionDocument = gql`
  query tripsCollection(
    $filter: tripsFilter
    $orderBy: [tripsOrderBy!]
    $first: Int!
    $after: Cursor
  ) {
    __typename
    tripsCollection(
      filter: $filter
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      __typename
      edges {
        __typename
        node {
          __typename
          id
          uuid
          title
          date_from
          date_to
          image_storage_object_id
          created_at
          invitationsCollection {
            __typename
            edges {
              __typename
              node {
                __typename
                users {
                  __typename
                  id
                  profile_picture_url
                }
              }
            }
          }
          activityCollection {
            __typename
            edges {
              __typename
              node {
                __typename
                id
              }
            }
          }
        }
      }
      pageInfo {
        __typename
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`

/**
 * __useTripsCollectionQuery__
 *
 * To run a query within a React component, call `useTripsCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripsCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripsCollectionQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useTripsCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<
    TripsCollectionQuery,
    TripsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TripsCollectionQuery, TripsCollectionQueryVariables>(
    TripsCollectionDocument,
    options
  )
}
export function useTripsCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TripsCollectionQuery,
    TripsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    TripsCollectionQuery,
    TripsCollectionQueryVariables
  >(TripsCollectionDocument, options)
}
export function useTripsCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    TripsCollectionQuery,
    TripsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    TripsCollectionQuery,
    TripsCollectionQueryVariables
  >(TripsCollectionDocument, options)
}
export type TripsCollectionQueryHookResult = ReturnType<
  typeof useTripsCollectionQuery
>
export type TripsCollectionLazyQueryHookResult = ReturnType<
  typeof useTripsCollectionLazyQuery
>
export type TripsCollectionSuspenseQueryHookResult = ReturnType<
  typeof useTripsCollectionSuspenseQuery
>
export type TripsCollectionQueryResult = Apollo.QueryResult<
  TripsCollectionQuery,
  TripsCollectionQueryVariables
>
export function refetchTripsCollectionQuery(
  variables: TripsCollectionQueryVariables
) {
  return { query: TripsCollectionDocument, variables: variables }
}
