import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import retroDither from '../../src/imgs/retro dither/1.png';
import camera3person from '../../src/imgs/camera3pessoa/Screenshot_1.png';
import jardim from '../../src/imgs/jardimbotanico/1.png';

const images = [
  {
    src: retroDither,
    link: '/projetos/game-retro-dither'
  },
  {
    src: camera3person,
    link: '/projetos/terceira-pessoa'
  },
  {
    src: jardim,
    link: '/projetos/jardim-botanico'
  }
];

import { NextArrow, PrevArrow } from '../customs/Arrows'; // Importando os componentes de seta

const Inicio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full h-auto max-h-[600px]">
      <Slider {...settings}>
        {images.map(({ src, link }, idx) => (
          <Link to={link} key={idx} className="block w-full h-auto">
            <img 
              src={src} 
              alt={`Slide ${idx + 1}`} 
              className="w-full object-cover max-h-[600px]"
              loading="lazy"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};


export default Inicio;