import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';
const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col md={4} lg={3} xs={12} key={item.id}>
                        <CardList item={item} />
                    </Col>
                ))
            }
        </>
    )
}
// OTRO COMPONENTE
const CardList = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }} className='mt-2'>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button variant="primary">Ver detalles</Button>
            </Card.Body>
            <Counter />
        </Card>
    );
}
export default ItemList