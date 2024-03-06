import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, screen } from '@testing-library/react'

import React from 'react'
import Upvote from './Upvote'

describe('Upvote component', () => {
  test('renders with correct initial state', () => {
    render(<Upvote selected={false} />)
    const button = screen.getByTestId('primary')

    expect(button).toBeInTheDocument()
    expect(button).not.toHaveClass('btn-selected')
  })

  // test('toggles selected state on click', () => {
  //   const handleClick = jest.fn()
  //   const { getByTestId } = render(
  //     <Upvote selected={false} onClick={handleClick} />
  //   )
  //   const button = getByTestId('primary')

  //   fireEvent.click(button)

  //   expect(button).toHaveClass('btn-selected')
  //   expect(handleClick).toHaveBeenCalledWith(true)
  // })

  // test('passes correct selected state to parent on click', () => {
  //   const handleClick = jest.fn()
  //   const { getByTestId } = render(
  //     <Upvote selected={false} onClick={handleClick} />
  //   )
  //   const button = getByTestId('primary')

  //   fireEvent.click(button)
  //   fireEvent.click(button)

  //   expect(handleClick).toHaveBeenCalledWith(true)
  //   expect(handleClick).toHaveBeenCalledWith(false)
  // })
})
