import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import ItemDetailContainer from './components/Details/ItemDetailContainer'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}

export default App