import React, { useState, useEffect } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { projetosJogos, projetosWeb, outrosProjetos, videosGameDesign } from '../../data/projetos.js';

import SectionHeader from './SectionHeader';
import ProjetosGrid from './ProjetosGrid';
import VideosGrid from './VideosGrid';

const SECTIONS = [
  { titulo: 'Desenvolvimento de Jogos', lista: projetosJogos, type: 'projeto' },
  { titulo: 'Game Design - Montagem de Cenários na Unity', lista: videosGameDesign, type: 'video' },
  { titulo: 'Desenvolvimento Web', lista: projetosWeb, type: 'projeto' },
  { titulo: 'Outros Projetos', lista: outrosProjetos, type: 'projeto' },
];

const Projetos = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sectionFromUrl = searchParams.get('section');

  const [openSection, setOpenSection] = useState(
    sectionFromUrl !== null ? Number(sectionFromUrl) : null
  );

  useEffect(() => {
    if (sectionFromUrl !== null) {
      setOpenSection(Number(sectionFromUrl));
    } else {
      setOpenSection(null);
    }
  }, [sectionFromUrl]);

  const toggleSection = (idx) => {
    setOpenSection((current) => (current === idx ? null : idx));
  };

  return (
    <Box
      className="bg-white text-black p-10 rounded-lg max-w-6xl mx-auto mt-20"
      style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 -8px 16px rgba(0,0,0,0.15)' }}
    >
      <Typography variant="h4" component="h1" className="font-bold mb-10">
        Meus Projetos
      </Typography>

      {SECTIONS.map(({ titulo, lista, type }, idx) => (
        <Box
          key={idx}
          className="mb-6 rounded-lg overflow-hidden"
          mt={5}
          style={{ boxShadow: '0 0px 16px rgba(0,0,0,0.15), 0 0px 1px rgba(0,0,0,0.15)' }}
        >
          <SectionHeader title={titulo} isOpen={openSection === idx} onToggle={() => toggleSection(idx)} />

          <Collapse in={openSection === idx} timeout="auto" unmountOnExit>
            <Box className="p-4 bg-white text-black">
              {type === 'projeto' ? (
                <ProjetosGrid projetos={lista} openSection={openSection} />
              ) : (
                <VideosGrid videos={lista} />
              )}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default Projetos;
