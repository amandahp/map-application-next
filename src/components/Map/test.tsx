import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
    //screen.logTestingPlaygroundURL();
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Cascavel',
      slug: 'cascavel',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const place2 = {
      id: '2',
      name: 'Nova York',
      slug: 'nova york',
      location: {
        latitude: 120,
        longitude: -50
      }
    }

    render(<Map places={[place, place2]} />)

    expect(screen.getByTitle(/cascavel/i)).toBeInTheDocument()
  })
})
