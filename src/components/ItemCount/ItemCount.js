import React,{useState} from 'react'
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)

    const addStock = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const removeStock = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div>
            <Button variant="outlined" onClick={removeStock}>-</Button>
            <p>{count}</p>
            <Button variant="outlined" onClick={addStock}>+</Button>
            <Button onClick={() => {onAdd (count)}}>Agregar al Carrito</Button>
        </div>
    )
}


export default ItemCount