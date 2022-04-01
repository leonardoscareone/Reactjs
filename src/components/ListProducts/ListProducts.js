import Card from '../Card/Card'
import React,{useState, useEffect} from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemList from './ItemList';

const ListProducts = () => {
    return (
      <section className="item-list-container">
        <h2 className="item-list-container__title">Productos destacados</h2>
  
        <ItemList />
      </section>
    );
  };
    
export default ListProducts;