import React from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';
import Inicio from '../components/Inicio';
import Sobre from '../components/Sobre';
import Tecnologias from '../components/Tecnologias';

const HomePage = () => {
  return (
    <>
     <Header></Header>
     <Inicio></Inicio>
     <Sobre></Sobre>
     <Tecnologias></Tecnologias>
     <Footer></Footer>
    </>
)
}

export default HomePage