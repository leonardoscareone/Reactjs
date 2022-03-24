import React,{useState} from 'react'

function ItemListContainer (props) {
    return (

        <div style={{fontFamily:"Verdana", fontSize:"30px"}}>
        { props.greeting }           
        </div>

    )
}

export default ItemListContainer
