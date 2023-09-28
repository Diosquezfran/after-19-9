import React, { useState } from 'react'

const Counter = ({onAdd}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        
        setCount(count + 1)
    }
    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
  return (
    <div>
        <button onClick={increment}>Agregar</button>
        <span>{ count }</span>
        <button onClick={decrement}>Restar</button>
        <button onClick={() => onAdd(count) }>Agregar al carrito</button>
    </div>
  )
}

export default Counter