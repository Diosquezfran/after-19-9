import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router'
import Detalle from './pages/Detalle'
import UserProfile from './pages/UserProfile'
import UserContextProvider from './context/userContext/UserContextProvider'
import CartContextProvider from './context/cartContext/CartContextProvider'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

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
            <Route path='/category/:categoryId' element={<Home />} />
            <Route path='/detalle/:id' element={<Detalle />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout/:orderId' element={<Checkout />} />
          </Routes>
        </UserContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App