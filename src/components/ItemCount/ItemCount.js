import React,{useState, useEffect} from 'react'
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const addStock = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const removeStock = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    const stockCount = () => {
        if(stock < 1 ){
        console.log("Ingrese un nivel valido")
        }
    }

    return(
        <>
            {
            stock < 1
            ?
            <h2>Sin Stock</h2>
            :
            <div>
                <Button variant="outlined" onClick={removeStock}>-</Button>
                <p>{count}</p>
                <Button variant="outlined" onClick={addStock}>+</Button>
                <Button onClick={() => {onAdd (count)}}>Agregar al Carrito</Button>
            </div>
            }
        </>
    )
}


export default ItemCount