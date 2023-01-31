import React, { useState } from 'react';
import Laptop from './Laptop';
import './css/style.css';


const Navbar = (props) => {
    const [laptopLists, setLaptopLists] = useState(props.laptopList);
    const uniqeBrand = [...new Set(props.laptopList.map((object, key) => {
        return(object.brand);
    })),"All"];

    const brand = (brands) => {
        let filterBrand = props.laptopList.filter((object) => {
            return(object.brand === brands);
        });
        if (brands === "All") {
            setLaptopLists(props.laptopList);   
        }else {
            setLaptopLists(filterBrand);
        }
    }
  return (
    <>
      <nav className='navbar'>
         {uniqeBrand.map((object, key) => {
          return <button onClick={() => brand(object)} key={key}>{object}</button>
        })}
      </nav>
      <Laptop laptopList={laptopLists}/>
    </>
  )
}

export default Navbar;
