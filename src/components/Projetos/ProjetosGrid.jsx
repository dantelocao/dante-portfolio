import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjetosGrid = ({ projetos, openSection }) => (
  <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {projetos.map(({ id, slug, imagem, titulo, descricao }) => (
      <Link
        key={id}
        to={`/projetos/${slug}?section=${openSection}`}
        className="block rounded-lg overflow-hidden transition bg-white text-black"
        style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.1), 0 -6px 12px rgba(0,0,0,0.1)' }}
      >
        <img src={imagem} alt={titulo} className="w-full h-48 object-cover" />
        <Box className="p-4">
          <Typography variant="h6" component="h3" className="font-semibold">
            {titulo}
          </Typography>
          <Typography className="text-gray-700">{descricao}</Typography>
        </Box>
      </Link>
    ))}
  </Box>
);

export default ProjetosGrid;
