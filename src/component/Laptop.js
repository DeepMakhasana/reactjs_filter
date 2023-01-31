import React from 'react';
import './css/style.css';


const Laptop = (props) => {
    return (
        <div className='laptop-container'>
            {props.laptopList.map((value, key) => {
                return (
                    <div className='laptop' key={key}>
                        <span className='laptop-brand'>{value.brand}</span>
                        <img src={value.images} alt='anytink' />
                        <h4 className='laptop-titel'>{value.titel}</h4>
                        <a href={value.link} target="_blank"  rel="noopener noreferrer" className='btn'>Buy Now</a >
                    </div>
                );
            })}
        </div>
    )
}

export default Laptop;
