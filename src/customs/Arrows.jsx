import React from 'react';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'block', 
        right: 10,   // posicionamento à direita
        zIndex: 1,
        width: 30,   // tamanho da seta
        height: 30,
        color: 'black',
        filter: 'invert(0)', // seta preta (pode ajustar)
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'block', 
        left: 10,  // posicionamento à esquerda
        zIndex: 1,
        width: 30,
        height: 30,
        color: 'black',
        filter: 'invert(0)',
      }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
