import React, { useState, useEffect, Children } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../../Hooks/useFetch';
import {  collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [price, setPrice] = useState(null)
    // const [items] = useFetch("https://fakestoreapi.com/products")
 
    useEffect( () => {
        const db = getFirestore();

        const itemCollection = collection(db, "items");


        const q = query(itemCollection );

        getDocs(q)
            .then(snapshot => {
                const allData = snapshot.docs.map(document => ({id: document.id, ...document.data()}))
                setItems(allData)
            })
    }, [price])
    return (
        <Container>
            <Row>
                {
                    items.length > 0 &&
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer