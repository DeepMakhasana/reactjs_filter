import React from 'react';
import LaptopList from './LaptopList';
import Navbar from './Navbar';
import './css/style.css';


const LaptopShop = () => {
  return (
    <>
      <Navbar laptopList={LaptopList}/>
    </>
  )
}

export default LaptopShop;
