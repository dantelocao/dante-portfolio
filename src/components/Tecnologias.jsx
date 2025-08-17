import React, { useState } from 'react';
import { Box, Typography, Avatar, Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

import c from '../../src/imgs/tecnologias/c.png';
import csharp from '../../src/imgs/tecnologias/csharp.jpg';
import unity from '../../src/imgs/tecnologias/unity.jpeg';
import python from '../../src/imgs/tecnologias/python.jpeg';
import git from '../../src/imgs/tecnologias/git.png';
import js from '../../src/imgs/tecnologias/js.png';
import react from '../../src/imgs/tecnologias/react.png';
import mongodb from '../../src/imgs/tecnologias/mongodb.jpg';

const technologies = [
  { name: 'Unity Engine', img: unity },
  { name: 'C/C++', img: c },
  { name: 'C#', img: csharp },
  { name: 'JavaScript', img: js },
  { name: 'Python', img: python },
  { name: 'React', img: react },
  { name: 'MongoDB', img: mongodb },
  { name: 'Git/GitHub', img: git }
];

const Technologies = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <Box 
      className="bg-white text-black p-10 rounded-lg max-w-6xl mx-auto mt-20 shadow-lg"
      style={{
        boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 -8px 16px rgba(0,0,0,0.15)',
      }}
    >
      <Box 
        onClick={handleToggle} 
        className="flex justify-between items-center cursor-pointer"
      >
        <Typography variant="h4" component="h2" className="font-bold text-black">
          Technologies I Work With
        </Typography>
        <IconButton>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className="flex flex-wrap justify-center gap-10 mt-10">
          {technologies.map(({ name, img }, idx) => (
            <Box
              key={idx}
              className="bg-white rounded-lg p-6 flex flex-col items-center w-200 hover:shadow-xl transition cursor-default"
            >
              <Avatar
                alt={name}
                src={img}
                sx={{ width: 220, height: 180, mb: 3, boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
              />
              <Typography
                variant="body1"
                component="p"
                className="text-center font-semibold text-black"
                sx={{ fontSize: '20px' }}
              >
                {name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Technologies;
