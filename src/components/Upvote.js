import React, { useState } from 'react'

import { ReactComponent as ArrowIcon } from '../assets/arrow.svg'

const Upvote = ({ selected, onClick }) => {
  const [isSelected, setIsSelected] = useState(selected)

  const handleClick = () => {
    setIsSelected(!isSelected)
    onClick(!isSelected) // Passes the new state to the parent component
  }

  return (
    <button
      data-testid="primary"
      className={`btn upvote ${isSelected ? 'btn-selected' : ''}`}
      onClick={handleClick}
    >
      <ArrowIcon style={{ fill: isSelected ? '#253CF2' : '#343A40' }} />
    </button>
  )
}

export default Upvote
