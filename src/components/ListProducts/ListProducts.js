import Card from '../Card/Card'
import React,{useState, useEffect} from 'react'
import { mockProducts } from './ItemList'
import Items from './Items';

const ListProducts = () => {
    return (
      <section className="item-list-container">
        <h2 className="item-list-container__title">Productos destacados</h2>
  
        <Items />
      </section>
    );
  };
    
export default ListProducts;