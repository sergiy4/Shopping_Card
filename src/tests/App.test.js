import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
// import {App, LocationDisplay} from './App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test ('full app rendering', async()=>{
  const user = userEvent.setup();
  render(<App/>,{wrapper:BrowserRouter})

  // verify page content for default route
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();

  await user.click(screen.getByText(/about/i))
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();

})

test('rendering bad page', ()=>{
  const badRoute = '/some/bad/route'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App/>
    </MemoryRouter>
  )

  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation',()=>{
  const route = '/some-route'

  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay/>
    </MemoryRouter>
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})


