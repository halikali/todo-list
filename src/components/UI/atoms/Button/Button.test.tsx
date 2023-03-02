import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders a button', () => {
    const { getByRole } = render(<Button size="large" label="button" />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('renders the correct label', () => {
    render(<Button size="large" label="Example Label" />)
    const renderedLabel = screen.getByText('Example Label')
    expect(renderedLabel).toBeInTheDocument()
  })

  it('renders the correct size', () => {
    render(<Button size="large" label="button" />)
    const renderedButton = screen.getByRole('button')
    expect(renderedButton).toHaveClass('button--large')
  })

  it('renders the correct mode', () => {
    render(<Button size="large" label="button" mode="with-icon" />)
    const renderedButton = screen.getByRole('button')
    expect(renderedButton).toHaveClass('button--with-icon')
  })

  it('renders the correct priority', () => {
    render(<Button size="large" label="button" priority="secondary" />)
    const renderedButton = screen.getByRole('button')
    expect(renderedButton).toHaveClass('button--secondary')
  })

  it('renders the correct icon', () => {
    render(
      <Button size="large" label="button" mode="with-icon">
        <span>icon</span>
      </Button>
    )
    const renderedButton = screen.getByRole('button')
    expect(renderedButton).toHaveTextContent('icon')
  })

  it('renders a button without a label', () => {
    render(<Button size="large" label="Example Label" mode="just-icon" />)
    const renderedButton = screen.getByRole('button')
    expect(renderedButton).toHaveTextContent('')
  })
})
