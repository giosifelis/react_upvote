import './App.css'

import MultipleUpvotesLists from './components/MultipleUpvotesLists'
import React from 'react'
import { UpvotesProvider } from './contexts/UpvotesContext'

const App = () => {
  return (
    <UpvotesProvider>
      <div className="App">
        <h1>Upvotes App</h1>
        <MultipleUpvotesLists />
      </div>
    </UpvotesProvider>
  )
}

export default App
