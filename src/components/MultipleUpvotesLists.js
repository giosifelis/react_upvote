import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import React from 'react'
import Upvote from './Upvote'
import { useUpvotesContext } from '../contexts/UpvotesContext'

const MultipleUpvotesLists = () => {
  const { upvotesData, handleUpvoteClick, handleAddClick } = useUpvotesContext()

  const renderUpvotesList = (list, listIndex) => (
    <div className="upvotes-list" key={listIndex}>
      <h2>Upvotes List {listIndex + 1}</h2>

      {list.map((isSelected, upvoteIndex) => (
        <Upvote
          key={upvoteIndex}
          selected={isSelected}
          onClick={(newState) =>
            handleUpvoteClick(listIndex, upvoteIndex, newState)
          }
        />
      ))}
      <button className="btn" onClick={() => handleAddClick(listIndex)}>
        <PlusIcon></PlusIcon>
      </button>
    </div>
  )

  return (
    <div className="multiple-upvotes-lists">
      {upvotesData &&
        upvotesData.map((list, index) => renderUpvotesList(list, index))}
    </div>
  )
}

export default MultipleUpvotesLists
