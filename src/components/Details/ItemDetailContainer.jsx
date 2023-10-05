import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../../Hooks/useFetch'
import CartContext from '../../context/cartContext/CartContext';
import { doc, getDoc, getFirestore, snapshotEqual } from "firebase/firestore";

const ItemDetailContainer = ({ id }) => {
    const [item, setitem] = useState(null);
    const onAdd = (q) => {
        addItem(item, q)
    }
    const { addItem } = useContext(CartContext);
    useEffect( () => {
        const db = getFirestore();

        const itemRef = doc(db, "items", id)

        getDoc(itemRef)
            .then( (snapshot) =>{
                console.log(snapshot.exists())
                if(snapshot.exists()) {
                    
                    setitem({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }
            })
            .catch((err) => console.log(err))

    }, [])
    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} onAdd={onAdd} />

            }
        </>
    )
}

export default ItemDetailContainer