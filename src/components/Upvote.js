import React, { useState } from 'react'

import { ReactComponent as ArrowIcon } from '../assets/arrow.svg'
import { theme } from '../Theme'

const { icon, btn } = theme

const Upvote = ({ selected, onClick }) => {
  const [isSelected, setIsSelected] = useState(selected)

  const handleClick = () => {
    setIsSelected(!isSelected)
    onClick(!isSelected) // Passes the new state to the parent component
  }

  return (
    <button
      data-testid="upvote"
      className="btn upvote"
      onClick={handleClick}
      style={{ background: isSelected ? btn.selected.bg : btn.bg }}
    >
      <ArrowIcon
        style={{ fill: isSelected ? icon.selected.fill : icon.fill }}
      />
    </button>
  )
}

export default Upvote
