// // activities are created within specific date ranges without spanning across multiple days.
export const tripDetailsMock1 = [
  {
    address: 'Shibuya',
    time_from: '2024-01-01T10:00:00+09:00',
    time_to: '2024-01-01T11:00:00+09:00',
    title: 'Activity 1',
    id: 'abc1'
  },
  {
    address: 'Asakusa',
    time_from: '2024-01-02T10:00:00+09:00',
    time_to: '2024-01-02T11:00:00+09:00',
    title: 'Activity 2',
    id: 'abc2'
  },
  {
    address: 'Shinjuku',
    time_from: '2024-01-03T11:00:00+09:00',
    time_to: '2024-01-03T12:00:00+09:00',
    title: 'Activity 3',
    id: 'abc3'
  },
  {
    address: 'Yoyogi',
    time_from: '2024-01-03T14:00:00+09:00',
    time_to: '2024-01-03T18:00:00+09:00',
    title: 'Activity 4',
    id: 'abc4'
  }
]

// // activities are created spanning across multiple days, such as from 2021/1/1 12:00 to 2021/1/2 10:00. and there is an empty date"
export const tripDetailsMock2 = [
  {
    address: 'Shibuya',
    time_from: '2021-01-01T10:00:00+09:00',
    time_to: '2021-01-01T11:00:00+09:00',
    title: 'Activity 1',
    id: 'abc1'
  },
  {
    address: 'Asakusa',
    time_from: '2021-01-01T12:00:00+09:00',
    time_to: '2021-01-03T11:00:00+09:00',
    title: 'Activity 2',
    id: 'abc2'
  },
  {
    address: 'Shinjuku',
    time_from: '2021-01-03T11:00:00+09:00',
    time_to: '2021-01-03T12:00:00+09:00',
    title: 'Activity 3',
    id: 'abc3'
  },
  {
    address: 'Yoyogi',
    time_from: '2021-01-03T14:00:00+09:00',
    time_to: '2021-01-04T08:00:00+09:00',
    title: 'Activity 4',
    id: 'abc4'
  }
]
