import React from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import dante from '../../src/imgs/4.png'; // Imagem de exemplo, substitua pelo caminho correto


const Sobre = () => {
  return (
    <Box className="bg-white text-black p-6 rounded-lg max-w-4xl mx-auto mt-20 shadow-md flex flex-col md:flex-row items-center gap-8 relative">
      
      {/* Imagem redonda */}
      <Avatar 
        alt="Foto de Perfil"
        src={dante} // Substitua pelo caminho correto da sua imagem
        sx={{ width: 160, height: 160 }}
        className="shadow-lg"
      />

      {/* Texto */}
      <Box className="flex flex-col max-w-xl">
        <Typography variant="h4" component="h2" className="font-bold mb-4">
          Sobre Mim
        </Typography>
        <Typography variant="body1" component="p" className="leading-relaxed">
          Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação. Gosto de criar 
          aplicações modernas, intuitivas e eficientes, sempre buscando aprender e crescer.
          No meu tempo livre, adoro ler, jogar videogame e explorar novas ferramentas de front-end.
        </Typography>
      </Box>
    </Box>
  );
};

export default Sobre;
