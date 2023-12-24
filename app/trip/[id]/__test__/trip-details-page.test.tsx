import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import TripDetailsPage from '../page'
import { tripDetailsMock } from './mock'

const mockedUseRouter = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: jest.fn().mockReturnValue('/some-route')
}))

describe('TripDetailsPage', () => {
  it('should render the page', async () => {
    render(
      <MockedProvider mocks={tripDetailsMock}>
        <TripDetailsPage
          params={{ id: 'af778287-bbdd-48fd-84c5-74b4c8b97eb9' }}
        />
      </MockedProvider>
    )

    const title = await screen.findByText('Tokyo')
    expect(title).toBeInTheDocument()
  })
})
