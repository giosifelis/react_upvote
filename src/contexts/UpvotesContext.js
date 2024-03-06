import React, { createContext, useContext, useEffect, useState } from 'react'

const UpvotesContext = createContext()

export const useUpvotesContext = () => useContext(UpvotesContext)

export const UpvotesProvider = ({ children }) => {
  const LS_key = 'upvotesData'

  const [upvotesData, setUpvotesData] = useState(
    [[]]
    //   () => {
    //   try {
    //     const item = localStorage.getItem(LS_key)
    //     return item ? JSON.parse(item) : initialValue
    //   } catch (error) {
    //     console.warn(`Error reading local storage key “${LS_key}”:`, error)
    //     return initialValue
    //   }
    // }
  )

  useEffect(() => {
    const initialValue = [[], []]
    try {
      const storedData = localStorage.getItem(LS_key)

      const data = storedData ? JSON.parse(storedData) : initialValue
      setUpvotesData(data)
    } catch (error) {
      setUpvotesData(initialValue)
      console.warn(`Error reading local storage key “${LS_key}”:`, error)
    }
    // Retrieve upvotes data from local s11torage when component mounts
    // const storedData = localStorage.getItem(LS_key)

    // if (storedData) {
    //   console.log('storedData:::', storedData)
    //   setUpvotesData(JSON.parse(storedData))
    // }
  }, [])

  // useEffect(() => {
  //   // Update local storage whenever upvotesData changes
  //   localStorage.setItem('upvotesData', JSON.stringify(upvotesData))
  // }, [upvotesData])

  const handleUpvoteClick = (listIndex, upvoteIndex, newState) => {
    const updatedLists = [...upvotesData]
    updatedLists[listIndex][upvoteIndex] = newState
    setUpvotesData(updatedLists)
    localStorage.setItem('upvotesData', JSON.stringify(upvotesData))
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
