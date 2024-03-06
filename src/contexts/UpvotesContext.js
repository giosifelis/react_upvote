import React, { createContext, useContext, useEffect, useState } from 'react'

const UpvotesContext = createContext()

export const useUpvotesContext = () => useContext(UpvotesContext)

export const UpvotesProvider = ({ children }) => {
  const LS_key = 'upvotesData'
  const initialValue = [[], [], []]

  const [upvotesData, setUpvotesData] = useState(() => {
    // Check if localstorage upvotesData data exists and create initial state if not
    try {
      const item = localStorage.getItem(LS_key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading local storage key “${LS_key}”:`, error)
      return initialValue
    }
  })

  useEffect(() => {
    // Retrieve upvotes data from local storage when component mounts
    const storedData = localStorage.getItem(LS_key)

    if (storedData) {
      setUpvotesData(JSON.parse(storedData))
    }
  }, [])

  useEffect(() => {
    // Update local storage whenever upvotesData changes
    localStorage.setItem('upvotesData', JSON.stringify(upvotesData))
  }, [upvotesData])

  const handleUpvoteClick = (listIndex, upvoteIndex, newState) => {
    const updatedLists = [...upvotesData]
    updatedLists[listIndex][upvoteIndex] = newState
    setUpvotesData(updatedLists)
  }

  const handleAddClick = (listIndex) => {
    const updatedLists = [...upvotesData]
    updatedLists[listIndex] = [...upvotesData[listIndex], false] // Adds a new upvote with default state
    setUpvotesData(updatedLists)
  }

  return (
    <UpvotesContext.Provider
      value={{ upvotesData, setUpvotesData, handleUpvoteClick, handleAddClick }}
    >
      {children}
    </UpvotesContext.Provider>
  )
}

export const UpvotesConsumer = UpvotesContext.Consumer
