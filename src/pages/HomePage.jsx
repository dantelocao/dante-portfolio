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
      <Sobre></Sobre>
      <Carrossel></Carrossel>
      <Certificacoes></Certificacoes>
    </>
)
}

export default HomePage