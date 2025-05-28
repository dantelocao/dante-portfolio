import React from 'react';
import { useParams } from 'react-router-dom';

import retroDither from '../../src/imgs/retro dither/1.png';
import camera3person from '../../src/imgs/camera3pessoa/Screenshot_1.png';
import jardim from '../../src/imgs/jardimbotanico/Screenshot_1.png';
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
        imagem: retroDither,
        texto: 'Este projeto foi desenvolvido usando técnicas de dithering retro na Unity, simulando gráficos estilo 8-bit com efeitos visuais autênticos.',
        videos: ['https://www.youtube.com/embed/VIDEO_ID1'],
        fotos: [
            'https://via.placeholder.com/300x200?text=Extra+1',
            'https://via.placeholder.com/300x200?text=Extra+2',
            ],
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
        titulo: 'Jogo de montagem de comida',
        descricao: 'jogo desenvolvido para a disciplina de software educacional',
        slug: 'comida-montagem',
        imagem: 'https://via.placeholder.com/300x200?text=Game+Aventura',
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


const ProjetoDetalhe = () => {
  const { slug } = useParams();

  const todosProjetos = [...projetosJogos, ...projetosWeb, ...outrosProjetos];
  const projeto = todosProjetos.find((p) => p.slug === slug);

  if (!projeto) {
    return <div className="p-8">Projeto não encontrado.</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{projeto.titulo}</h1>

      <img 
        src={projeto.imagem} 
        alt={projeto.titulo} 
        className="w-full max-w-lg mb-6 rounded-lg shadow"
      />

      <p className="mb-4 text-gray-700">{projeto.descricao}</p>
      
      {/* Texto detalhado */}
      {projeto.texto && (
        <p className="mb-6 text-gray-600 whitespace-pre-line">{projeto.texto}</p>
      )}

      {/* Fotos extras */}
      {projeto.fotos && projeto.fotos.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Mais imagens</h2>
          <div className="grid grid-cols-2 gap-4">
            {projeto.fotos.map((foto, idx) => (
              <img 
                key={idx}
                src={foto} 
                alt={`${projeto.titulo} extra ${idx + 1}`} 
                className="rounded shadow"
              />
            ))}
          </div>
        </div>
      )}

      {/* Vídeos do YouTube */}
      {projeto.videos && projeto.videos.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Vídeos</h2>
          <div className="flex flex-col gap-6">
            {projeto.videos.map((videoUrl, idx) => (
              <iframe
                key={idx}
                width="100%"
                height="315"
                src={videoUrl}
                title={`${projeto.titulo} vídeo ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded shadow"
              ></iframe>
            ))}
          </div>
        </div>
      )}

      <p className="mt-6 text-gray-500">ID: {projeto.id}</p>
    </div>
  );
};

export default ProjetoDetalhe;
