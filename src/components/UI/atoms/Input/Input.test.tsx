import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import Input from './Input'

describe('Input', () => {
  it('renders an input', () => {
    render(<Input size="full" type="text" placeholder="Placeholder" />)
    const renderedInput = screen.getByPlaceholderText('Placeholder')
    expect(renderedInput).toBeInTheDocument()
  })

  it('renders the correct size', () => {
    render(<Input size="full" type="text" placeholder="Placeholder" />)
    const renderedInput = screen.getByPlaceholderText('Placeholder')
    expect(renderedInput).toHaveClass('input--large')
  })

  it('renders the correct type', () => {
    render(<Input size="full" placeholder="Placeholder" type="text" />)
    const renderedInput = screen.getByPlaceholderText('Placeholder')
    expect(renderedInput).toHaveAttribute('type', 'text')
  })

  it('renders the correct placeholder', () => {
    render(<Input size="full" placeholder="Example Placeholder" type="text" />)
    const renderedInput = screen.getByRole('textbox')
    expect(renderedInput).toHaveAttribute('placeholder', 'Example Placeholder')
  })

  it('renders the correct disabled state', () => {
    render(<Input size="full" placeholder="Placeholder" type="text" disabled />)
    const renderedInput = screen.getByPlaceholderText('Placeholder')
    expect(renderedInput).toHaveAttribute('disabled')
  })
})
