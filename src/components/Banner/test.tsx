import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Banner from '.'

const props = {
  img: 'aaa',
  title: 'Banner component',
  subtitle: 'This is a game',
  buttonLabel: 'Buy now',
  buttonLink: '/page/checkout'
}

describe('<Banner />', () => {
  it('Should render the Banners', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('heading', { name: /Banner component/i }))
      .toBeInTheDocument

    expect(screen.getByRole('heading', { name: /This is a game/i }))
      .toBeInTheDocument

    expect(screen.getByRole('img', { name: /Banner component/i }))
      .toBeInTheDocument

    expect(container.firstChild).toMatchSnapshot()
  })
})
