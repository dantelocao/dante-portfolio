import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sobre from '../components/Sobre';
import Tecnologias from '../components/Tecnologias';
import Carrossel from '../components/Carrosel';
import Certificacoes from '../components/Certificacoes';

const HomePage = () => {
  return (
    <>
      <Carrossel></Carrossel>
      <Sobre></Sobre>
      <Certificacoes></Certificacoes>
      <Tecnologias></Tecnologias>
    </>
)
}

export default HomePage