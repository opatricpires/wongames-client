import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('Should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('Should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('Should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('Should render a normal logo whn size is default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('Should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)

    expect(
      screen.getByLabelText(/Won Games/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', { media: '(max-width: 768px)' })
  })
})
