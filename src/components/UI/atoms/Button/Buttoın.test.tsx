import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import Button from './Button'

describe('Button', () => {
  it('renders button', () => {
    render(<Button />)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
