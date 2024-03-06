import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, screen } from '@testing-library/react'

import React from 'react'
import Upvote from './Upvote'

describe('Upvote component', () => {
  test('renders with correct initial state', () => {
    render(<Upvote selected={false} />)
    const button = screen.getByTestId('upvote')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn')
  })

  test('toggles selected state on click', () => {
    const handleClick = jest.fn()
    render(<Upvote selected={false} onClick={handleClick} />)
    const button = screen.getByTestId('upvote')

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledWith(true)
  })
})
