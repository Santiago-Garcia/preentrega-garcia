import React from 'react';

function WelcomeToCart() {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  };

  return (
    <div style={centerStyle}>
      <h1>Bienvenidos al carrito</h1>
    </div>
  );
}

export default WelcomeToCart;
