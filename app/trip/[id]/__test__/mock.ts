import { TripDetailsDocument } from '@generated/api'

export const tripDetailsMock = [
  {
    request: {
      query: TripDetailsDocument,
      variables: {
        uuid: 'af778287-bbdd-48fd-84c5-74b4c8b97eb9'
      }
    },
    result: {
      data: {
        tripsCollection: {
          edges: [
            {
              node: {
                uuid: 'af778287-bbdd-48fd-84c5-74b4c8b97eb9',
                image_storage_object_id: null,
                title: 'Tokyo',
                date_from: '2021-01-01',
                date_to: '2021-01-01',
                invitationsCollection: {
                  edges: [
                    {
                      node: {
                        users: {
                          id: 'user-id',
                          profile_picture_url: 'profile-picture-url'
                        }
                      }
                    }
                  ]
                },
                trip_tagsCollection: {
                  edges: [
                    {
                      node: {
                        tags: {
                          id: '1',
                          name: 'Tag 1'
                        }
                      }
                    }
                  ]
                },
                activityCollection: {
                  edges: [
                    {
                      node: {
                        address: 'Shibuya',
                        time_from: '2021-01-01T10:00:00+00:00',
                        time_to: '2021-01-01T11:00:00+00:00',
                        title: 'Activity 1',
                        uuid: '7c2ba625-2d50-478e-adfc-cae6dac99e57'
                      }
                    },
                    {
                      node: {
                        address: 'Asakusa',
                        time_from: '2021-01-03T10:00:00+00:00',
                        time_to: '2021-01-03T11:00:00+00:00',
                        title: 'Activity 2',
                        uuid: '7c2ba625-2d50-478e-adfc-cae6dac99e57'
                      }
                    },
                    {
                      node: {
                        address: 'Shinjuku',
                        time_from: '2021-01-03T10:00:00+00:00',
                        time_to: '2021-01-03T11:00:00+00:00',
                        title: 'Activity 3',
                        uuid: '7c2ba625-2d50-478e-adfc-cae6dac99e57'
                      }
                    },
                    {
                      node: {
                        address: 'Yoyogi',
                        time_from: '2021-01-03T14:00:00+00:00',
                        time_to: '2021-01-03T18:00:00+00:00',
                        title: 'Activity 3',
                        uuid: '7c2ba625-2d50-478e-adfc-cae6dac99e57'
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
]
