import React,{ useState, useEffect } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'


export default function Card({ data }) {
    const { title, price, talle, stock} = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)

    function onAdd(count){
        console.log(`La cantidad de productos agregados es: ${count}`);
    }

    return(
        <div className="card-item">
                <h2>{title}</h2>
                <p>Precio : $ {price}</p>
                <p>Talle : {talle}</p>
                <ItemCount stock={6} initial={1} onAdd={onAdd} />
        </div>
    )
}