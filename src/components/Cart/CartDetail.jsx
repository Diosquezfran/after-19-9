import React, { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import styles from './style.module.css'

const CartDetail = () => {
    const { cart, removeItem } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            CART
            {
                cart.map(el => (
                    <div className={styles.container}>
                        <div className={styles.cardBody}>
                            <p >Product: {el.item.title}</p>
                            <p >Cantidad: {el.q}</p>
                        </div>
                        <img src={el.item.image} className={styles.image} />
                        <button onClick={() => removeItem(el.item.id)} className={styles.cartButton}>Eliminar</button>
                    </div>
                ))
            }
        </div>
    )
}

export default CartDetail