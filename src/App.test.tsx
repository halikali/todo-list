import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('renders hello world', () => {
    // Arrange
    render(<App />)
    // Act
    // expect
    expect(screen.getByText('hello world')).toBeInTheDocument()
  })
})
