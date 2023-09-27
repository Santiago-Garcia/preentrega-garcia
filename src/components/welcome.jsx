
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Detalles from './detalles';
import auricular from './assets/auriculares.jpg'
import reloj from  './assets/reloj.jpg'
import prox_articulos from './assets/prox_articulos.png'

const products = [
  {
    id: 'auricular',
    name: 'auricular',
    description: 'auricular',
    image: auricular
  },
  {
    id: reloj,
    name: 'reloj',
    description: 'reloj',
    image : reloj
  },
  {
    id: prox_articulos,
    name: 'Proximamente',
    description: 'Proximamente',
    image : prox_articulos
  },
  {
    id: 4,
    name: 'Proximamente',
    description: 'Proximamente',
    image: prox_articulos
  },
];

function WelcomeToCart() {
  return (
    <div>
      <h1>Bienvenido a la tienda</h1>
      
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Detalles product={product} />
            <Link to={`/detalles/${product.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WelcomeToCart;
