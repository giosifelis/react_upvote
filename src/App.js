import './App.css'

import React from 'react'
import UpvotesLists from './components/UpvotesLists'
import { UpvotesProvider } from './contexts/UpvotesContext'

const App = () => {
  return (
    <UpvotesProvider>
      <div className="app">
        <h1>Upvotes App</h1>
        <UpvotesLists />
      </div>
    </UpvotesProvider>
  )
}

export default App
