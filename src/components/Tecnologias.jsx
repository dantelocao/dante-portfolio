import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

import c from '../../src/imgs/tecnologias/c.png'; 
import csharp from '../../src/imgs/tecnologias/csharp.jpg'; 
import unity from '../../src/imgs/tecnologias/unity.jpeg'; 
import python from '../../src/imgs/tecnologias/python.jpeg';

const tecnologias = [
  {
    name: 'Unity Engine',
    img: unity
  },
  {
    name: 'C/C++',
    img: c,
  },
  {
    name: 'Csharp',
    img: csharp,
  },
    {
    name: 'Python',
    img: python,
  }
];

const Tecnologias = () => {
  return (
    <Box
      className="bg-white text-black p-10 rounded-lg max-w-6xl mx-auto mt-20 shadow-lg"
    >
      <Typography variant="h4" component="h2" className="font-bold mb-10 text-center text-black">
        Tecnologias que Conheço
      </Typography>

      <Box className="flex flex-wrap justify-center gap-10 mt-10">
        {tecnologias.map(({ name, img }, idx) => (
          <Box
            key={idx}
            className="bg-white rounded-lg p-6 flex flex-col items-center w-200 hover:shadow-xl transition cursor-default"
          >
            <Avatar
              alt={name}
              src={img}
              sx={{ width: 250, height: 150, mb: 3, boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
            />
            <Typography variant="body1" component="p" className="text-center font-semibold text-black">
              {name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Tecnologias;
