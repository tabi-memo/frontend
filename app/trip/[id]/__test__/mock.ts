import { TripDetailsDocument } from '@generated/api'

// activities are created within specific date ranges without spanning across multiple days.
export const tripDetailsMock1 = [
  {
    request: {
      query: TripDetailsDocument,
      variables: {
        id: 'trip-uuid-1'
      }
    },
    result: {
      data: {
        tripsCollection: {
          edges: [
            {
              node: {
                id: 'trip-uuid-1',
                image_url: null,
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
                        id: 'abc1'
                      }
                    },
                    {
                      node: {
                        address: 'Asakusa',
                        time_from: '2021-01-02T10:00:00+00:00',
                        time_to: '2021-01-02T11:00:00+00:00',
                        title: 'Activity 2',
                        id: 'abc2'
                      }
                    },
                    {
                      node: {
                        address: 'Shinjuku',
                        time_from: '2021-01-03T11:00:00+00:00',
                        time_to: '2021-01-03T12:00:00+00:00',
                        title: 'Activity 3',
                        id: 'abc3'
                      }
                    },
                    {
                      node: {
                        address: 'Yoyogi',
                        time_from: '2021-01-03T14:00:00+00:00',
                        time_to: '2021-01-03T08:00:00+00:00',
                        title: 'Activity 4',
                        id: 'abc4'
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

// activities are created spanning across multiple days, such as from 2021/1/1 12:00 to 2021/1/2 10:00. and there is an empty date"
export const tripDetailsMock2 = [
  {
    request: {
      query: TripDetailsDocument,
      variables: {
        id: 'trip-uuid-2'
      }
    },
    result: {
      data: {
        tripsCollection: {
          edges: [
            {
              node: {
                id: 'trip-uuid-2',
                image_url: null,
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
                        id: 'abc1'
                      }
                    },
                    {
                      node: {
                        address: 'Asakusa',
                        time_from: '2021-01-01T12:00:00+00:00',
                        time_to: '2021-01-03T11:00:00+00:00',
                        title: 'Activity 2',
                        id: 'abc2'
                      }
                    },
                    {
                      node: {
                        address: 'Shinjuku',
                        time_from: '2021-01-03T11:00:00+00:00',
                        time_to: '2021-01-03T12:00:00+00:00',
                        title: 'Activity 3',
                        id: 'abc3'
                      }
                    },
                    {
                      node: {
                        address: 'Yoyogi',
                        time_from: '2021-01-03T14:00:00+00:00',
                        time_to: '2021-01-04T08:00:00+00:00',
                        title: 'Activity 4',
                        id: 'abc4'
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
