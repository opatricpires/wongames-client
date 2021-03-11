import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(
      <Main
        title="React avançado"
        description="TypseScript, ReactJS, NextJS e Styled Component"
      />
    )

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render colors correctly', () => {
    const { container } = render(
      <Main
        title="React avançado"
        description="TypseScript, ReactJS, NextJS e Styled Component"
      />
    )

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
