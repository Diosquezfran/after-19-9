import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import { useParams } from 'react-router'

const Home = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <ItemListContainer />
    </div>
  )
}

export default Home