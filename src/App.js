import './App.css';
import React, {useState, useEffect} from 'react'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import NavBarClass from './components/NavBarClass'
import ListProducts from './components/ListProducts/ListProducts';
import ModalCustom from './components/Modal/Modal';
import Card from './components/Card/Card';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  
  const [open, setOpen] = useState(false);

  const handleClose = (value) => {
      setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    //JSX
    <div className="App">
     <NavBar />
      {/* <NavBarClass /> */}
      <ItemListContainer />
        <p>Productos en Venta</p>
    </div>
  );
}


export default App;
