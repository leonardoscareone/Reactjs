import Card from '../Card/Card'
import React,{useState, useEffect} from 'react'
import { mockProducts } from './ItemList'

const Items = ({children}) => {

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


    return(
        <div className="container-cards">
            <h2> {children} </h2>
            {products.map( (product) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default Items;