import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renders a checkbox', () => {
    render(<Checkbox size="large" />)
    const renderedCheckbox = screen.getByRole('checkbox')
    expect(renderedCheckbox).toBeInTheDocument()
  })

  it('render the checked state', () => {
    render(<Checkbox size="large" checked />)
    const renderedCheckbox = screen.getByRole('checkbox')
    expect(renderedCheckbox).toBeChecked()
  })
})
