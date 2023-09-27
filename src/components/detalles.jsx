import React, { useState } from 'react';
import auricular from './assets/auriculares.jpg'

const products = [
  {
    id: 'auricular',
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    image: auricular
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del Producto 3',
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'Descripción del Producto 4',
  },
];

function Detalles({ product }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>Cantidad: {count}</p>
        <button className="btn btn-primary" onClick={handleIncrement}>
          Sumar
        </button>
        <button className="btn btn-danger" onClick={handleDecrement}>
          Restar
        </button>
      </div>
    </div>
  );
  
}

export default Detalles;
