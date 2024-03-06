import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import React from 'react'
import Upvote from './Upvote'
import { useUpvotesContext } from '../contexts/UpvotesContext'

const UpvotesLists = () => {
  const { upvotesData, handleUpvoteClick, handleAddClick } = useUpvotesContext()

  const renderUpvotesList = (list, listIndex) => (
    <div className="upvotes-wrapper" key={listIndex}>
      <div className="upvotes-list">
        {list.map((isSelected, upvoteIndex) => (
          <Upvote
            key={upvoteIndex}
            selected={isSelected}
            onClick={(newState) =>
              handleUpvoteClick(listIndex, upvoteIndex, newState)
            }
          />
        ))}
      </div>
      <div className="toolbar">
        <button className="btn" onClick={() => handleAddClick(listIndex)}>
          <PlusIcon></PlusIcon>
        </button>
      </div>
    </div>
  )

  return (
    <div className="multiple-upvotes-lists">
      {upvotesData &&
        upvotesData.map((list, index) => renderUpvotesList(list, index))}
    </div>
  )
}

export default UpvotesLists
