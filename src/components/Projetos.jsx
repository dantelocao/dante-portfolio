import React from 'react';
import { Link } from 'react-router-dom';

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

const Projetos = () => {
  const renderProjetos = (titulo, lista) => (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lista.map((projeto) => (
          <Link 
            key={projeto.id} 
            to={`/projetos/${projeto.slug}`} 
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img 
              src={projeto.imagem} 
              alt={projeto.titulo} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{projeto.titulo}</h3>
              <p className="text-gray-600">{projeto.descricao}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>

      {renderProjetos('Desenvolvimento de Jogos', projetosJogos)}
      {renderProjetos('Desenvolvimento Web', projetosWeb)}
      {renderProjetos('Outros Projetos', outrosProjetos)}
    </div>
  );
};

export default Projetos;
