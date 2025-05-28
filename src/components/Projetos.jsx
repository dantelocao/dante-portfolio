import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

import cooking_1 from '../../src/imgs/cooking/1.png';
import retroDither from '../../src/imgs/retro dither/1.png';
import camera3person from '../../src/imgs/camera3pessoa/Screenshot_1.png';
import jardim from '../../src/imgs/jardimbotanico/1.png';
import abbadon from '../../src/imgs/abbadonHospice/3.png';
import fruitninja from '../../src/imgs/fruit ninja/2.png';
import carro from '../../src/imgs/create with code/1.png';
import bolas from '../../src/imgs/create with code 2/2.png';
import challenge5 from '../../src/imgs/challenge5/2.png';
import campoMinado from '../../src/imgs/campoMinado/campoMinadoC.png';

import roadmap from '../../src/imgs/imagensWeb/roadmap.png';
import aliexpress from '../../src/imgs/imagensWeb/aliexpress.png';
import gym from '../../src/imgs/imagensWeb/gym.png';
import gitapi from '../../src/imgs/imagensWeb/githubapi.png';

const projetosJogos = [
    { 
        id: 1, 
        titulo: 'Game retro dither', 
        descricao: 'Jogo desenvolvido em Unity', 
        slug: 'game-retro-dither',
        imagem: retroDither
    },
    { 
        id: 2, 
        titulo: '3rd Person Character Controller', 
        descricao: 'Animação e controle de personagem em 3ª pessoa', 
        slug: 'terceira-pessoa',
        imagem: camera3person
    },
    { 
        id: 3, 
        titulo: 'Jardim Botânico - RV', 
        descricao: 'Realidade virtual do jardim botânico de minha universidade', 
        slug: 'jardim-botanico',
        imagem: jardim
    },
    { 
        id: 10,
        titulo: 'Campo Minado',
        descricao: 'Campo Minado desenvolvido em C',
        slug: 'campo-minado',
        imagem: campoMinado
    },
        
    { 
        id: 11,
        titulo: 'Abbadon Hospice - Game Jam',
        descricao: 'Meu primeiro jogo desenvolvido em uma Game Jam',
        slug: 'abbadon-hospice',
        imagem: abbadon
    },

    { 
        id: 12,
        titulo: 'Cooking Simulator',
        descricao: 'jogo EM DESENVOLVIMENTO para a disciplina de software educacional',
        slug: 'comida-montagem',
        imagem: cooking_1,
    },

    { 
        id: 13,
        titulo: 'Unity Learn - Fruit Ninja',
        descricao: 'Jogo desenvolvido na plataforma Unity Learn',
        slug: 'fruit-ninja',
        imagem: fruitninja
    },

    { 
        id: 14,
        titulo: 'Unity Learn - Create With Code',
        descricao: 'Mecânicas desenvolvidas na plataforma Unity Learn',
        slug: 'create-with-code',
        imagem: carro,
    },

    { 
        id: 15,
        titulo: 'Unity Learn - Create With Code 2',
        descricao: 'Mecânicas desenvolvidas na plataforma Unity Learn',
        slug: 'create-with-code2',
        imagem: bolas,
    },

    { 
        id: 16,
        titulo: 'Unity Learn - Challenge 5',
        descricao: 'Jogo desenvolvido na plataforma Unity Learn',
        slug: 'challenge5',
        imagem: challenge5,
    }
];

const projetosWeb = [
  { 
    id: 4, 
    titulo: 'Portfolio', 
    descricao: 'Meu site pessoal', 
    slug: 'portfolio',
    imagem: 'https://via.placeholder.com/300x200?text=Portfolio'
  },
  { 
    id: 5, 
    titulo: 'RoadMaps', 
    descricao: 'Site de criação de roadmaps de estudo para a disciplina de Programação Web', 
    slug: 'loja-virtual',
    imagem: roadmap
  },
  { 
    id: 6, 
    titulo: 'literar_app', 
    descricao: 'Site de livros desenvolvido para disciplina de Programação Web', 
    slug: 'literar-app',
    imagem: 'https://via.placeholder.com/300x200?text=Blog+Tech'
  },
  { 
    id: 7, 
    titulo: 'AliExpress - Remake', 
    descricao: 'Recriação do frontend do Aliexpress com React e tailwind', 
    slug: 'ali-express-remake',
    imagem: aliexpress
  },

  { 
    id: 8, 
    titulo: 'GymStrong - site de montagem de treinos', 
    descricao: 'Consumo de API de exercícios e treinos para site de montagem de treinos', 
    slug: 'gymstrong',
    imagem: gym
  }


];

const outrosProjetos = [
  { 
    id: 9, 
    titulo: 'github_api', 
    descricao: 'Exemplo de consumo de API do GitHub', 
    slug: 'github-api',
    imagem: gitapi
  }
];

// Lista de vídeos para a nova seção
const videosGameDesign = [
  { id: 1, titulo: 'Volcano island #1', url: 'https://www.youtube.com/embed/EJFQCLyLYv0' },
  { id: 2, titulo: 'Volcano island #2', url: 'https://www.youtube.com/embed/0VEMszhZFf8' },
  { id: 3, titulo: 'Volcano island #3', url: 'https://www.youtube.com/embed/S1R_sbqEuX8' },
    { id: 4, titulo: 'island #1', url: 'https://www.youtube.com/embed/Eb01sjLPQ5M' },
    { id: 5, titulo: 'island island #3', url: 'https://www.youtube.com/embed/__sVoAGROw4' },
    { id: 6, titulo: 'island island #3', url: 'https://www.youtube.com/embed/SUDdsRWTAYk' }

];

const Projetos = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sectionFromUrl = searchParams.get('section');

  const [openSection, setOpenSection] = useState(
    sectionFromUrl !== null ? Number(sectionFromUrl) : null
  );

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  const renderProjetos = (lista) => (
    <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {lista.map((projeto) => (
        <Link
          key={projeto.id}
          to={`/projetos/${projeto.slug}?section=${openSection}`}
          className="block rounded-lg overflow-hidden transition bg-white text-black"
          style={{
            boxShadow: '0 6px 12px rgba(0,0,0,0.1), 0 -6px 12px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="w-full h-48 object-cover"
          />
          <Box className="p-4">
            <Typography variant="h6" component="h3" className="font-semibold">
              {projeto.titulo}
            </Typography>
            <Typography className="text-gray-700">
              {projeto.descricao}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );

  const renderVideos = (lista) => (
    <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
      {lista.map((video) => (
        <Box
          key={video.id}
          className="w-full overflow-hidden rounded-lg transition bg-white"
          style={{
            boxShadow: '0 6px 12px rgba(0,0,0,0.1), 0 -6px 12px rgba(0,0,0,0.1)',
          }}
        >
          <iframe
            src={video.url}
            title={video.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
            style={{ height: '500px' }}
          ></iframe>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      className="bg-white text-black p-10 rounded-lg max-w-6xl mx-auto mt-20"
      style={{
        boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 -8px 16px rgba(0,0,0,0.15)',
      }}
    >
      <Typography variant="h4" component="h1" className="font-bold mb-10">
        Meus Projetos
      </Typography>

      {[
        { titulo: 'Desenvolvimento de Jogos', lista: projetosJogos, type: 'projeto' },
        { titulo: 'Game Design - Montagem de Cenários na Unity', lista: videosGameDesign, type: 'video' },
        { titulo: 'Desenvolvimento Web', lista: projetosWeb, type: 'projeto' },
        { titulo: 'Outros Projetos', lista: outrosProjetos, type: 'projeto' },
      ].map((section, idx) => (
        <Box
          key={idx}
          className="mb-6 rounded-lg overflow-hidden"
          mt={5}
          style={{
            boxShadow: '0 0px 16px rgba(0,0,0,0.15), 0 0px 1px rgba(0,0,0,0.15)',
          }}
        >
          <Box
            onClick={() => toggleSection(idx)}
            className="flex justify-between items-center cursor-pointer p-4 bg-white text-black hover:bg-gray-100 transition"
          >
            <Typography variant="h5" component="h2" className="font-semibold">
              {section.titulo}
            </Typography>
            <IconButton>
              {openSection === idx ? (
                <ExpandLess className="text-black" />
              ) : (
                <ExpandMore className="text-black" />
              )}
            </IconButton>
          </Box>

          <Collapse in={openSection === idx} timeout="auto" unmountOnExit>
            <Box className="p-4 bg-white text-black">
              {section.type === 'projeto'
                ? renderProjetos(section.lista)
                : renderVideos(section.lista)}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default Projetos;