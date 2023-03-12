import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import ListElement from './ListElement'

describe('List Element', () => {
  it('should render the list element', () => {
    render(<ListElement id="test-id" changeFunc={() => {}} checked={false} text="Example test" />)
    const renderedListElement = screen.getByText('Example test')
    expect(renderedListElement).toBeInTheDocument()
  })

  it('should render the list element with faded text', () => {
    render(<ListElement changeFunc={() => {}} id="test-id" checked text="Example test" />)
    const renderedListElement = screen.getByText('Example test')
    expect(renderedListElement).toHaveClass('text-faded')
  })

  it('should render the list element with a checkbox', () => {
    render(<ListElement changeFunc={() => {}} id="test-id" checked text="Example test" />)
    const chechboxOfTheListElement = screen.getByRole('checkbox')
    expect(chechboxOfTheListElement).toBeInTheDocument()
  })

  it('should render the list element with a delete button', () => {
    render(<ListElement changeFunc={() => {}} id="test-id" checked text="Example test" />)
    const renderedListElement = screen.getByRole('button')
    expect(renderedListElement).toBeInTheDocument()
  })

  it('should render the list element with a delete button with an icon', () => {
    render(<ListElement changeFunc={() => {}} id="test-id" checked text="Example test" />)
    const renderedListElement = screen.getByAltText('trash icon')
    expect(renderedListElement).toBeInTheDocument()
  })
})
