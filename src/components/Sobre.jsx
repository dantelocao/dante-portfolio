import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

import dante from '../../src/imgs/4.png';

const sobreMim = [
  '💻 Habilidades em React, JavaScript e desenvolvimento web.',
  '🎮 Especialista em Unity Engine e desenvolvimento de jogos.',
  '🌱 Sempre buscando evoluir como desenvolvedor e pessoa.',
  '🚀 Entusiasta de novas tecnologias e frameworks.',
  '📚 Inglês fluente.'
];

const Sobre = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        color: 'black',
        p: 8,
        borderRadius: 4,
        maxWidth: '96rem',
        mx: 'auto',
        mt: 10,
        boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 -8px 16px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
        position: 'relative'
      }}
    >
      {/* Avatar */}
      <Avatar
        alt="Foto de Perfil"
        src={dante}
        sx={{
          width: 220,
          height: 220,
          boxShadow: 3
        }}
      />

      {/* Conteúdo */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dante Dardaque Santos
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, mb: 4, whiteSpace: 'pre-line' }}>
          Atualmente focado em estudar desenvolvimento web e criação de jogos na Unity. Tenho paixão por criação de jogos, computação gráfica e pesquisa nessa área. Estou na etapa final da minha graduação em Sistemas de Informação e estou buscando minha primeira experiência como estagiário.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" fontWeight="medium" gutterBottom>
          Mais sobre mim:
        </Typography>

        <List dense>
          {sobreMim.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sobre;
