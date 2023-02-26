import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders a button', () => {
    const { getByRole } = render(<Button label="button" />)
    expect(getByRole('button')).toBeInTheDocument()
  })
})
