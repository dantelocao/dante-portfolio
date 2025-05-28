import React from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';

import dante from '../../src/imgs/4.png'; // Substitua pelo caminho correto

const Sobre = () => {
  return (
    <Box className="bg-white text-black p-8 rounded-lg max-w-6xl mx-auto mt-20 shadow-md flex flex-col md:flex-row items-center gap-10 relative"
          
      style={{
        boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 -8px 16px rgba(0,0,0,0.15)',
      }}
>

      {/* Imagem redonda */}
      <Avatar 
        alt="Foto de Perfil"
        src={dante}
        sx={{ width: 220, height: 220 }}
        className="shadow-lg"
      />

      {/* Texto e lista */}
      <Box className="flex flex-col" sx={{ flex: 1 }}>
        <Typography variant="h4" component="h2" className="font-bold mb-4">
          Sobre Mim
        </Typography>
        <Typography variant="body1" component="p" className="leading-relaxed mb-6">
          Atualmente focado em estudar 
desenvolvimento web e criação de 
jogos na Unity. Tenho paixão por 
criação de jogos, computação gráfica e 
pesquisa nessa área. Estou na etapa 
final da minha graduação em sistemas 
de informação e estou buscando minha 
primeira expêriencia como estagiário
        </Typography>

        <Divider sx={{ mb: 2, mt: 2 }} />

        <Typography variant="h5" component="h3" className="font-semibold mb-2">
          Mais sobre mim:
        </Typography>

        <List dense >
          <ListItem disablePadding>
            <ListItemText primary="💻 Habilidades em React, JavaScript e desenvolvimento web." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="🎮 Especialista em Unity Engine e desenvolvimento de jogos." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="🌱 Sempre buscando evoluir como desenvolvedor e pessoa." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="🚀 Entusiasta de novas tecnologias e frameworks." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="📚 Inglês fluente." />
          </ListItem>


        </List>
      </Box>
    </Box>
  );
};

export default Sobre;
