import React,{useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer (props) {
    return (

        <div style={{fontFamily:"Verdana", fontSize:"30px"}}>
        { props.greeting }           
        </div>

    )
}

export default ItemListContainer
