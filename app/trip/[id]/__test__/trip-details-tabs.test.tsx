import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { TripDetailsTabs } from '../components'
import { tripDetailsMock1, tripDetailsMock2 } from './mock'
import {
  useDeleteActivityMutation,
  useTripsCollectionQuery
} from '@generated/api'

const mockedUseRouter = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: jest.fn().mockReturnValue('/some-route')
}))

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn(),
  useMutation: jest.fn()
}))

jest.mock('../../../../graphql-codegen/generated/api')

describe('TripDetails Tabs', () => {
  describe('Activities without spanning across multiple days', () => {
    beforeEach(() => {
      ;(useDeleteActivityMutation as jest.Mock).mockReturnValue([
        jest.fn(), // mock mutation function
        { loading: false, error: null } // mock result object
      ])
      ;(useTripsCollectionQuery as jest.Mock).mockReturnValue({
        refetch: jest.fn(), // mock refetch function
        loading: false,
        error: null,
        data: undefined
      })

      render(
        <TripDetailsTabs
          activities={
            tripDetailsMock1.map((activity) => ({
              id: activity.id,
              timeFrom: activity.time_from,
              timeTo: activity.time_to,
              title: activity.title,
              address: activity.address
            })) || []
          }
        />
      )
    })

    it('should render tabs based on activity dates', async () => {
      const days = await screen.findAllByText(/Day \d/)
      expect(days[0]).toHaveTextContent('Day 1')
      expect(days[1]).toHaveTextContent('Day 2')
      expect(days[2]).toHaveTextContent('Day 3')
    })

    it('should display activity details on Day 1 as a default', async () => {
      const activity = await screen.findByText(/Activity 1/)
      expect(activity).toBeVisible()
    })

    it('should display activity details based on time_from date', async () => {
      const days = await screen.findAllByText(/Day \d/)
      await user.click(days[1])
      const secondDateActivity = screen.getByText(/Activity 2/)
      expect(secondDateActivity).toBeVisible()

      await user.click(days[2])
      const thirdDateActivity1 = screen.getByText(/Activity 3/)
      const thirdDateActivity2 = screen.getByText(/Activity 4/)

      expect(thirdDateActivity1).toBeVisible()
      expect(thirdDateActivity2).toBeVisible()
    })
  })

  describe('Activities spanning across multiple days', () => {
    beforeEach(() => {
      ;(useDeleteActivityMutation as jest.Mock).mockReturnValue([
        jest.fn(), // mock mutation function
        { loading: false, error: null } // mock result object
      ])
      ;(useTripsCollectionQuery as jest.Mock).mockReturnValue({
        refetch: jest.fn(), // mock refetch function
        loading: false,
        error: null,
        data: undefined
      })

      render(
        <TripDetailsTabs
          activities={
            tripDetailsMock2.map((activity) => ({
              id: activity.id,
              timeFrom: activity.time_from,
              timeTo: activity.time_to,
              title: activity.title,
              address: activity.address
            })) || []
          }
        />
      )
    })

    it('should render all date tabs even though there is an empty date', async () => {
      const days = await screen.findAllByText(/Day \d/)
      expect(days[0]).toHaveTextContent('Day 1')
      expect(days[1]).toHaveTextContent('Day 2')
      expect(days[2]).toHaveTextContent('Day 3')
      expect(days[3]).toHaveTextContent('Day 4')
    })

    it('should display time_to date if the date is different from the current activity date', async () => {
      const days = await screen.findAllByText(/Day \d/)
      await user.click(days[0])

      const visibleTabPanel = screen.getByRole('tabpanel', {
        hidden: false
      })

      expect(
        visibleTabPanel.querySelector('[data-testid="timeToDate"]')
      ).toHaveTextContent('(01/03)')
    })

    it('should display time_from date if the date is different from the current activity date', async () => {
      const days = await screen.findAllByText(/Day \d/)
      await user.click(days[3])

      const visibleTabPanel = screen.getByRole('tabpanel', {
        hidden: false
      })

      expect(
        visibleTabPanel.querySelector('[data-testid="timeFromDate"]')
      ).toHaveTextContent('(01/03)')
    })
  })
})
