import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'

import Badge from './Badge'

describe('Badge', () => {
  it('renders a badge', () => {
    render(<Badge text={5} />)
    const renderedBadge = screen.getByText('5')
    expect(renderedBadge).toHaveClass('badge__text')
  })

  it('renders the correct text', () => {
    render(<Badge text={5} />)
    const renderedBadge = screen.getByText('5')
    expect(renderedBadge).toBeInTheDocument()
  })

  it('renders the correct long text', () => {
    render(<Badge text="2 de 5" />)
    const renderedBadge = screen.getByText('2 de 5')
    expect(renderedBadge).toBeInTheDocument()
  })
})
