import React,{useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from '../Card/Card'
import { mockProducts } from '../../utils/mockProducts'


function ItemListContainer () {

    const [products, setProducts] = useState([])
    
    const getProducts = () => {
        return new Promise ((resolve,reject) => {
            return setTimeout(() => {
                resolve (mockProducts);
            }, 2000);
        })
    }

    useEffect( () => {
        getProducts().then( (products) =>{
            setProducts(products)
            console.log(products)
        })
    },[])

}


export default ItemListContainer
