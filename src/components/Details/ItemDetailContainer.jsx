import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../Hooks/useFetch'

const ItemDetailContainer = () => {
    const [item] = useFetch("https://fakestoreapi.com/products/3")
    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} />

            }
        </>
    )
}

export default ItemDetailContainer