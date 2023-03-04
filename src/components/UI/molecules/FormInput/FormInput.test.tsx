import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { describe } from 'vitest'

import FormInput from './FormInput'

describe('FormInput', () => {
  it('renders a form input', () => {
    render(<FormInput />)
    const textbox = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    expect(textbox).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
