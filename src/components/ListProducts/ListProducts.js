import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    const [showCard, setShowCard] = useState(true)

    let dataProduct = {
        title : 'Remera',
        talle: 'XL',
        price: 1500,
        image: 'remera3.jpeg',
        stock: 5
    }
    

    const hideCard = () => {
        setShowCard (!showCard)
    }


    return(
        <div className="container-cards">
            <h2> {children} </h2>

            <button onClick={hideCard}>Ocultar/Mostrar Card</button>

            {showCard && <Card data={dataProduct}/>}
        </div>
    ) 
}
    
export default ListProducts;