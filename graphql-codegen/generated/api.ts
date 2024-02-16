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
  BigFloat: { input: string; output: string }
  BigInt: { input: string; output: string }
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
  /** Deletes zero or more records from the `activity_uploaded_files` collection */
  deleteFromactivity_uploaded_filesCollection: Activity_Uploaded_FilesDeleteResponse
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
  /** Adds one or more `activity_uploaded_files` records to the collection */
  insertIntoactivity_uploaded_filesCollection?: Maybe<Activity_Uploaded_FilesInsertResponse>
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
  /** Updates zero or more records in the `activity_uploaded_files` collection */
  updateactivity_uploaded_filesCollection: Activity_Uploaded_FilesUpdateResponse
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
  /** A pagable collection of type `activity_uploaded_files` */
  activity_uploaded_filesCollection?: Maybe<Activity_Uploaded_FilesConnection>
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
  cost?: InputMaybe<BigFloatFilter>
  cost_unit?: InputMaybe<StringFilter>
  created_at?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  image_url?: InputMaybe<StringFilter>
  memo?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
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
  content_type?: InputMaybe<StringFilter>
  created_at?: InputMaybe<DatetimeFilter>
  file_name?: InputMaybe<StringFilter>
  file_url?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
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
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  invitation_url?: InputMaybe<StringFilter>
  invited_by_user_id?: InputMaybe<UuidFilter>
  invitee_user_id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
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
  created_at?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
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
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
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
  cost?: InputMaybe<BigFloatFilter>
  cost_unit?: InputMaybe<StringFilter>
  created_at?: InputMaybe<DatetimeFilter>
  date_from?: InputMaybe<DatetimeFilter>
  date_to?: InputMaybe<DatetimeFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  image_url?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
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
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
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

export const GetUserDocument = gql`
  query getUser($id: UUID!) {
    __typename
    usersCollection(filter: { id: { eq: $id } }) {
      __typename
      edges {
        __typename
        node {
          __typename
          id
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
 *      id: // value for 'id'
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
export const CreateActivityDocument = gql`
  mutation createActivity($object: activityInsertInput!) {
    __typename
    insertIntoactivityCollection(objects: [$object]) {
      __typename
      records {
        __typename
        id
        title
      }
    }
  }
`
export type CreateActivityMutationFn = Apollo.MutationFunction<
  CreateActivityMutation,
  CreateActivityMutationVariables
>

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateActivityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateActivityMutation,
    CreateActivityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateActivityMutation,
    CreateActivityMutationVariables
  >(CreateActivityDocument, options)
}
export type CreateActivityMutationHookResult = ReturnType<
  typeof useCreateActivityMutation
>
export type CreateActivityMutationResult =
  Apollo.MutationResult<CreateActivityMutation>
export type CreateActivityMutationOptions = Apollo.BaseMutationOptions<
  CreateActivityMutation,
  CreateActivityMutationVariables
>
export const CreateActivityUploadedFilesDocument = gql`
  mutation createActivityUploadedFiles(
    $objects: [activity_uploaded_filesInsertInput!]!
  ) {
    __typename
    insertIntoactivity_uploaded_filesCollection(objects: $objects) {
      __typename
      records {
        __typename
        id
        activity_id
        file_name
        file_url
      }
    }
  }
`
export type CreateActivityUploadedFilesMutationFn = Apollo.MutationFunction<
  CreateActivityUploadedFilesMutation,
  CreateActivityUploadedFilesMutationVariables
>

/**
 * __useCreateActivityUploadedFilesMutation__
 *
 * To run a mutation, you first call `useCreateActivityUploadedFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityUploadedFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityUploadedFilesMutation, { data, loading, error }] = useCreateActivityUploadedFilesMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateActivityUploadedFilesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateActivityUploadedFilesMutation,
    CreateActivityUploadedFilesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateActivityUploadedFilesMutation,
    CreateActivityUploadedFilesMutationVariables
  >(CreateActivityUploadedFilesDocument, options)
}
export type CreateActivityUploadedFilesMutationHookResult = ReturnType<
  typeof useCreateActivityUploadedFilesMutation
>
export type CreateActivityUploadedFilesMutationResult =
  Apollo.MutationResult<CreateActivityUploadedFilesMutation>
export type CreateActivityUploadedFilesMutationOptions =
  Apollo.BaseMutationOptions<
    CreateActivityUploadedFilesMutation,
    CreateActivityUploadedFilesMutationVariables
  >
export const UpdateActivityDocument = gql`
  mutation updateActivity($id: UUID!, $set: activityUpdateInput!) {
    __typename
    updateactivityCollection(set: $set, filter: { id: { eq: $id } }) {
      __typename
      records {
        __typename
        id
        title
      }
    }
  }
`
export type UpdateActivityMutationFn = Apollo.MutationFunction<
  UpdateActivityMutation,
  UpdateActivityMutationVariables
>

/**
 * __useUpdateActivityMutation__
 *
 * To run a mutation, you first call `useUpdateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActivityMutation, { data, loading, error }] = useUpdateActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateActivityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateActivityMutation,
    UpdateActivityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateActivityMutation,
    UpdateActivityMutationVariables
  >(UpdateActivityDocument, options)
}
export type UpdateActivityMutationHookResult = ReturnType<
  typeof useUpdateActivityMutation
>
export type UpdateActivityMutationResult =
  Apollo.MutationResult<UpdateActivityMutation>
export type UpdateActivityMutationOptions = Apollo.BaseMutationOptions<
  UpdateActivityMutation,
  UpdateActivityMutationVariables
>
export const ActivityCollectionDocument = gql`
  query activityCollection($id: UUID!) {
    __typename
    activityCollection(filter: { id: { eq: $id } }) {
      __typename
      edges {
        __typename
        node {
          __typename
          id
          trip_id
          title
          time_from
          time_to
          address
          url
          memo
          cost
          cost_unit
          activity_uploaded_filesCollection {
            __typename
            edges {
              __typename
              node {
                __typename
                id
                file_name
                file_url
              }
            }
          }
        }
      }
    }
  }
`

/**
 * __useActivityCollectionQuery__
 *
 * To run a query within a React component, call `useActivityCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActivityCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<
    ActivityCollectionQuery,
    ActivityCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ActivityCollectionQuery,
    ActivityCollectionQueryVariables
  >(ActivityCollectionDocument, options)
}
export function useActivityCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActivityCollectionQuery,
    ActivityCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ActivityCollectionQuery,
    ActivityCollectionQueryVariables
  >(ActivityCollectionDocument, options)
}
export function useActivityCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ActivityCollectionQuery,
    ActivityCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    ActivityCollectionQuery,
    ActivityCollectionQueryVariables
  >(ActivityCollectionDocument, options)
}
export type ActivityCollectionQueryHookResult = ReturnType<
  typeof useActivityCollectionQuery
>
export type ActivityCollectionLazyQueryHookResult = ReturnType<
  typeof useActivityCollectionLazyQuery
>
export type ActivityCollectionSuspenseQueryHookResult = ReturnType<
  typeof useActivityCollectionSuspenseQuery
>
export type ActivityCollectionQueryResult = Apollo.QueryResult<
  ActivityCollectionQuery,
  ActivityCollectionQueryVariables
>
export function refetchActivityCollectionQuery(
  variables: ActivityCollectionQueryVariables
) {
  return { query: ActivityCollectionDocument, variables: variables }
}
export const CreateTagDocument = gql`
  mutation createTag($name: String!, $userId: UUID!) {
    __typename
    insertIntotagsCollection(objects: [{ name: $name, user_id: $userId }]) {
      __typename
      records {
        __typename
        id
        name
      }
    }
  }
`
export type CreateTagMutationFn = Apollo.MutationFunction<
  CreateTagMutation,
  CreateTagMutationVariables
>

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      name: // value for 'name'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateTagMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTagMutation,
    CreateTagMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(
    CreateTagDocument,
    options
  )
}
export type CreateTagMutationHookResult = ReturnType<
  typeof useCreateTagMutation
>
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<
  CreateTagMutation,
  CreateTagMutationVariables
>
export const CreateTripDocument = gql`
  mutation createTrip($object: tripsInsertInput!) {
    __typename
    insertIntotripsCollection(objects: [$object]) {
      __typename
      records {
        __typename
        id
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
 *      object: // value for 'object'
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
export const CreateTripTagDocument = gql`
  mutation createTripTag($tripId: UUID!, $tagId: UUID!) {
    __typename
    insertIntotrip_tagsCollection(
      objects: [{ trip_id: $tripId, tag_id: $tagId }]
    ) {
      __typename
      records {
        __typename
        id
        tag_id
        trip_id
      }
    }
  }
`
export type CreateTripTagMutationFn = Apollo.MutationFunction<
  CreateTripTagMutation,
  CreateTripTagMutationVariables
>

/**
 * __useCreateTripTagMutation__
 *
 * To run a mutation, you first call `useCreateTripTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTripTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTripTagMutation, { data, loading, error }] = useCreateTripTagMutation({
 *   variables: {
 *      tripId: // value for 'tripId'
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function useCreateTripTagMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTripTagMutation,
    CreateTripTagMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateTripTagMutation,
    CreateTripTagMutationVariables
  >(CreateTripTagDocument, options)
}
export type CreateTripTagMutationHookResult = ReturnType<
  typeof useCreateTripTagMutation
>
export type CreateTripTagMutationResult =
  Apollo.MutationResult<CreateTripTagMutation>
export type CreateTripTagMutationOptions = Apollo.BaseMutationOptions<
  CreateTripTagMutation,
  CreateTripTagMutationVariables
>
export const DeleteTagDocument = gql`
  mutation deleteTag($id: UUID!) {
    __typename
    deleteFromtagsCollection(filter: { id: { eq: $id } }) {
      __typename
      records {
        __typename
        id
        name
      }
    }
  }
`
export type DeleteTagMutationFn = Apollo.MutationFunction<
  DeleteTagMutation,
  DeleteTagMutationVariables
>

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTagMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTagMutation,
    DeleteTagMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(
    DeleteTagDocument,
    options
  )
}
export type DeleteTagMutationHookResult = ReturnType<
  typeof useDeleteTagMutation
>
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<
  DeleteTagMutation,
  DeleteTagMutationVariables
>
export const DeleteTripDocument = gql`
  mutation deleteTrip($id: UUID!, $userId: UUID!) {
    __typename
    deleteFromtripsCollection(
      filter: { id: { eq: $id }, user_id: { eq: $userId } }
    ) {
      __typename
      records {
        __typename
        id
        title
      }
    }
  }
`
export type DeleteTripMutationFn = Apollo.MutationFunction<
  DeleteTripMutation,
  DeleteTripMutationVariables
>

/**
 * __useDeleteTripMutation__
 *
 * To run a mutation, you first call `useDeleteTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTripMutation, { data, loading, error }] = useDeleteTripMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteTripMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTripMutation,
    DeleteTripMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteTripMutation, DeleteTripMutationVariables>(
    DeleteTripDocument,
    options
  )
}
export type DeleteTripMutationHookResult = ReturnType<
  typeof useDeleteTripMutation
>
export type DeleteTripMutationResult = Apollo.MutationResult<DeleteTripMutation>
export type DeleteTripMutationOptions = Apollo.BaseMutationOptions<
  DeleteTripMutation,
  DeleteTripMutationVariables
>
export const DeleteTripTagDocument = gql`
  mutation deleteTripTag($id: UUID!) {
    __typename
    deleteFromtrip_tagsCollection(filter: { id: { eq: $id } }) {
      __typename
      records {
        __typename
        id
      }
    }
  }
`
export type DeleteTripTagMutationFn = Apollo.MutationFunction<
  DeleteTripTagMutation,
  DeleteTripTagMutationVariables
>

/**
 * __useDeleteTripTagMutation__
 *
 * To run a mutation, you first call `useDeleteTripTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTripTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTripTagMutation, { data, loading, error }] = useDeleteTripTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTripTagMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTripTagMutation,
    DeleteTripTagMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteTripTagMutation,
    DeleteTripTagMutationVariables
  >(DeleteTripTagDocument, options)
}
export type DeleteTripTagMutationHookResult = ReturnType<
  typeof useDeleteTripTagMutation
>
export type DeleteTripTagMutationResult =
  Apollo.MutationResult<DeleteTripTagMutation>
export type DeleteTripTagMutationOptions = Apollo.BaseMutationOptions<
  DeleteTripTagMutation,
  DeleteTripTagMutationVariables
>
export const UpdateTripDocument = gql`
  mutation updateTrip($id: UUID!, $set: tripsUpdateInput!) {
    __typename
    updatetripsCollection(set: $set, filter: { id: { eq: $id } }) {
      __typename
      records {
        __typename
        id
        title
      }
    }
  }
`
export type UpdateTripMutationFn = Apollo.MutationFunction<
  UpdateTripMutation,
  UpdateTripMutationVariables
>

/**
 * __useUpdateTripMutation__
 *
 * To run a mutation, you first call `useUpdateTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTripMutation, { data, loading, error }] = useUpdateTripMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateTripMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTripMutation,
    UpdateTripMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateTripMutation, UpdateTripMutationVariables>(
    UpdateTripDocument,
    options
  )
}
export type UpdateTripMutationHookResult = ReturnType<
  typeof useUpdateTripMutation
>
export type UpdateTripMutationResult = Apollo.MutationResult<UpdateTripMutation>
export type UpdateTripMutationOptions = Apollo.BaseMutationOptions<
  UpdateTripMutation,
  UpdateTripMutationVariables
>
export const TagsCollectionDocument = gql`
  query tagsCollection($userId: UUID!) {
    __typename
    tagsCollection(
      filter: { user_id: { eq: $userId } }
      orderBy: { created_at: AscNullsLast }
    ) {
      __typename
      edges {
        __typename
        node {
          __typename
          id
          name
        }
      }
    }
  }
`

/**
 * __useTagsCollectionQuery__
 *
 * To run a query within a React component, call `useTagsCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsCollectionQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useTagsCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<
    TagsCollectionQuery,
    TagsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TagsCollectionQuery, TagsCollectionQueryVariables>(
    TagsCollectionDocument,
    options
  )
}
export function useTagsCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TagsCollectionQuery,
    TagsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TagsCollectionQuery, TagsCollectionQueryVariables>(
    TagsCollectionDocument,
    options
  )
}
export function useTagsCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    TagsCollectionQuery,
    TagsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    TagsCollectionQuery,
    TagsCollectionQueryVariables
  >(TagsCollectionDocument, options)
}
export type TagsCollectionQueryHookResult = ReturnType<
  typeof useTagsCollectionQuery
>
export type TagsCollectionLazyQueryHookResult = ReturnType<
  typeof useTagsCollectionLazyQuery
>
export type TagsCollectionSuspenseQueryHookResult = ReturnType<
  typeof useTagsCollectionSuspenseQuery
>
export type TagsCollectionQueryResult = Apollo.QueryResult<
  TagsCollectionQuery,
  TagsCollectionQueryVariables
>
export function refetchTagsCollectionQuery(
  variables: TagsCollectionQueryVariables
) {
  return { query: TagsCollectionDocument, variables: variables }
}
export const TripDetailsDocument = gql`
  query tripDetails($id: UUID) {
    __typename
    tripsCollection(filter: { id: { eq: $id } }) {
      __typename
      edges {
        __typename
        node {
          __typename
          id
          title
          date_from
          date_to
          image_url
          cost
          cost_unit
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
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTripDetailsQuery(
  baseOptions?: Apollo.QueryHookOptions<
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
export function refetchTripDetailsQuery(variables?: TripDetailsQueryVariables) {
  return { query: TripDetailsDocument, variables: variables }
}
export const TripTagsCollectionDocument = gql`
  query tripTagsCollection($filter: trip_tagsFilter) {
    __typename
    trip_tagsCollection(filter: $filter) {
      __typename
      edges {
        __typename
        node {
          __typename
          id
          trip_id
          tag_id
        }
      }
    }
  }
`

/**
 * __useTripTagsCollectionQuery__
 *
 * To run a query within a React component, call `useTripTagsCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripTagsCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripTagsCollectionQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTripTagsCollectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TripTagsCollectionQuery,
    TripTagsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    TripTagsCollectionQuery,
    TripTagsCollectionQueryVariables
  >(TripTagsCollectionDocument, options)
}
export function useTripTagsCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TripTagsCollectionQuery,
    TripTagsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    TripTagsCollectionQuery,
    TripTagsCollectionQueryVariables
  >(TripTagsCollectionDocument, options)
}
export function useTripTagsCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    TripTagsCollectionQuery,
    TripTagsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    TripTagsCollectionQuery,
    TripTagsCollectionQueryVariables
  >(TripTagsCollectionDocument, options)
}
export type TripTagsCollectionQueryHookResult = ReturnType<
  typeof useTripTagsCollectionQuery
>
export type TripTagsCollectionLazyQueryHookResult = ReturnType<
  typeof useTripTagsCollectionLazyQuery
>
export type TripTagsCollectionSuspenseQueryHookResult = ReturnType<
  typeof useTripTagsCollectionSuspenseQuery
>
export type TripTagsCollectionQueryResult = Apollo.QueryResult<
  TripTagsCollectionQuery,
  TripTagsCollectionQueryVariables
>
export function refetchTripTagsCollectionQuery(
  variables?: TripTagsCollectionQueryVariables
) {
  return { query: TripTagsCollectionDocument, variables: variables }
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
          id
          title
          date_from
          date_to
          image_url
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
