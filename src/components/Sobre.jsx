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
  '💻 Skills in React, JavaScript, and web development.',
  '🎮 Specialist in Unity Engine and game development.',
  '🌱 Always seeking to grow as a developer and as a person.',
  '🚀 Enthusiast of new technologies and frameworks.',
  '📚 Fluent in English.'
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
        alt="Profile Picture"
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
          Currently focused on studying web development and game creation in Unity. I have a passion for game design, computer graphics, and research in this area. I am in the final stage of my Information Systems degree and I am seeking my first experience as an intern.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" fontWeight="medium" gutterBottom>
          More about me:
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
