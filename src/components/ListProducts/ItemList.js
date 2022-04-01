import React,{useState, useEffect} from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Card from '../Card/Card'

const ItemList = ({products=[]}) => {

    return(
        <div className="container-cards">
            <h2>  </h2>
            {products.map( (product) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default ItemList;

