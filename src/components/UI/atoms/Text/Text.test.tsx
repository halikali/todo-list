import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Text from './Text'

describe('Text', () => {
  it('should render text', () => {
    render(<Text text="Example text" color="#4EA8DE" />)
    const renderedText = screen.getByText('Example text')
    expect(renderedText).toBeInTheDocument()
  })

  it('should render text with color', () => {
    render(<Text text="Example text" color="#4EA8DE" />)
    const renderedText = screen.getByText('Example text')
    expect(renderedText).toHaveStyle('color: #4EA8DE')
  })
})
