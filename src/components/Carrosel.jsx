import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import retroDither from '../../src/imgs/retro dither/2.png';
import whiteroom2 from '../../src/imgs/whiteroom/5.png';
import jardim from '../../src/imgs/jardimbotanico/1.png';
import acervo3d from '../../src/imgs/acervo3d/imagem.png';

const images = [
  {
    src: acervo3d,
    link: '/projetos/acervo-ufsm'
  },
  {
    src: whiteroom2,
    link: '/projetos/white-room'
  },
  {
    src: retroDither,
    link: '/projetos/game-retro-dither'
  },
  {
    src: jardim,
    link: '/projetos/jardim-botanico'
  },
];

import { NextArrow, PrevArrow } from '../customs/Arrows'; // Importando os componentes de seta

const Carrossel = () => {
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
    <div className="w-full h-auto max-h-[700px] mt-8"> {/* aumentei max-h e adicionei margin-top */}
      <Slider {...settings}>
        {images.map(({ src, link }, idx) => (
          <Link to={link} key={idx} className="block w-full h-auto">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full object-cover max-h-[700px]" // aumentei para 700px
              loading="lazy"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};


export default Carrossel;