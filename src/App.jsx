import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Detalle from './pages/Detalle'
import UserProfile from './pages/UserProfile'
import UserContextProvider from './context/UserContextProvider'
import CartContextProvider from './context/cartContext/CartContextProvider'
import Cart from './pages/Cart'

const App = () => {

  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user' element={<UserProfile />} />
            {/* <Route path='/category/:categoryId' element={<Home />} /> */}
            <Route path='/detalle/:id' element={<Detalle />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </UserContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App