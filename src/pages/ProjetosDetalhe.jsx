import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import abbadon from '../../src/imgs/abbadonHospice/3.png';
import abbadon2 from '../../src/imgs/abbadonHospice/2.png';
import abbadon3 from '../../src/imgs/abbadonHospice/1.png';
import abbadon4 from '../../src/imgs/abbadonHospice/4.png';
import abbadon5 from '../../src/imgs/abbadonHospice/5.png';
import abbadon6 from '../../src/imgs/abbadonHospice/6.png';

import retroDither from '../../src/imgs/retro dither/1.png';
import retroDither2 from '../../src/imgs/retro dither/2.png';
import retroDither3 from '../../src/imgs/retro dither/3.png';
import retroDither4 from '../../src/imgs/retro dither/4.png';
import retroDither5 from '../../src/imgs/retro dither/retro.png';

import fruitninja from '../../src/imgs/fruit ninja/2.png';
import fruitninja2 from '../../src/imgs/fruit ninja/1.png';
import fruitninja3 from '../../src/imgs/fruit ninja/3.png';

import createwithcode from '../../src/imgs/create with code/1.png';
import createwithcode2 from '../../src/imgs/create with code/2.png';
import createwithcode3 from '../../src/imgs/create with code/3.png';
import createwithcode4 from '../../src/imgs/create with code/4.png';

import createwithcode2_1 from '../../src/imgs/create with code 2/2.png';
import createwithcode2_2 from '../../src/imgs/create with code 2/1.png';
import createwithcode2_3 from '../../src/imgs/create with code 2/3.png';
import createwithcode2_4 from '../../src/imgs/create with code 2/4.png';

import challenge5_1 from '../../src/imgs/challenge5/2.png';
import challenge5_2 from '../../src/imgs/challenge5/1.png';
import challenge5_3 from '../../src/imgs/challenge5/3.png';

import cooking_1 from '../../src/imgs/cooking/1.png';

import jardim from '../../src/imgs/jardimbotanico/1.png';


import camera3person from '../../src/imgs/camera3pessoa/Screenshot_1.png';
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
        videos: [
          'https://www.youtube.com/embed/0XiYwIpcO8U',
          'https://www.youtube.com/embed/j1xrFuLse4o',
          'https://www.youtube.com/embed/rd0URleZqN8',
          'https://www.youtube.com/embed/gRT7Q0HqJlc',

        ],
        fotos: [
            retroDither2,
            retroDither3,
            retroDither4,
            retroDither5,
            ],
    },
    { 
        id: 2, 
        titulo: '3rd Person Character Controller', 
        descricao: 'Animação e controle de personagem em 3ª pessoa', 
        texto: 'Neste projeto, implementei a animação e o controle de um personagem em 3ª pessoa na Unity, utilizando o Animator Controller e Blend Tree para gerenciar transições entre estados. O controle de movimento foi feito com o Character Controller, permitindo movimentação suave e física simplificada. Além disso, usei parâmetros no Animator para sincronizar a entrada do jogador com as animações, garantindo uma resposta visual consistente e fluida.',
        slug: 'terceira-pessoa',
        imagem: camera3person,
        videos: ['https://www.youtube.com/embed/3PrNp_B9lkk']
    },
    { 
        id: 3, 
        titulo: 'Jardim Botânico - RV', 
        descricao: 'Realidade virtual do jardim botânico de minha universidade', 
        texto: 'Este projeto foi desenvolvido como parte de um trabalho acadêmico, utilizando Unity e técnicas de realidade virtual para criar uma experiência imersiva no jardim botânico da minha universidade.',
          fotos: [
            'https://via.placeholder.com/300x200?text=Extra+1',
            'https://via.placeholder.com/300x200?text=Extra+2',
            ],
        videos: ['https://www.youtube.com/embed/U_lMkL9ST1E'],
        slug: 'jardim-botanico',
        imagem: jardim
    },
    { 
        id: 10,
        titulo: 'Campo Minado',
        descricao: 'Campo Minado desenvolvido em C',
        texto: 'Este projeto é uma implementação clássica do jogo Campo Minado, desenvolvido em C. Ele apresenta uma interface simples e jogabilidade desafiadora, onde o jogador deve descobrir minas ocultas em um campo de jogo.',
        repositorio: "https://github.com/dantelocao/campo_minado",
        slug: 'campo-minado',
        imagem: campoMinado
    },
        
    { 
        id: 11,
        titulo: 'Abbadon Hospice - Game Jam',
        descricao: 'Este foi o meu primeiro jogo desenvolvido durante uma Game Jam de Halloween, um evento com tempo limitado onde desenvolvedores criam jogos com temas específicos. A proposta do evento era criar algo que evocasse o medo, o suspense e a atmosfera típica do Halloween — e assim nasceu "Abbadon Hospice". Durante o desenvolvimento, enfrentei desafios relacionados à otimização gráfica, iluminação sombria e design de áudio, mas foi uma experiência extremamente enriquecedora e divertida. Esse projeto representa não apenas uma homenagem aos clássicos do horror, mas também um marco importante no meu aprendizado em desenvolvimento de jogos.',
        link: 'https://dante150ml.itch.io/abbadon-hospice' ,
        repositorio: 'https://github.com/dantelocao/AbbadonHospice',
        slug: 'abbadon-hospice',
        imagem: abbadon,
        fotos: [
            abbadon2,
            abbadon3,
            abbadon4,
            abbadon5,
            abbadon6,
            ],
    },

    { 
        id: 12,
        titulo: 'Cooking Simulator',
        descricao: 'jogo EM DESENVOLVIMENTO para a disciplina de software educacional',
        slug: 'comida-montagem',
        imagem: cooking_1,
        videos: ['https://www.youtube.com/embed/8aJgtJv6ink'],
        fotos: [
            cooking_1,
        ]
    },

    { 
        id: 13,
        titulo: 'Unity Learn - Fruit Ninja',
        descricao: 'Jogo desenvolvido na plataforma Unity Learn',
        texto: "O desenvolvimento técnico de um protótipo inspirado no Fruit Ninja envolve criar um sistema de lançamento de objetos com física, além de implementar a detecção de cortes através do movimento do mouse ou toque na tela. O protótipo também inclui efeitos visuais como trilhas, partículas e sons, além de um sistema de pontuação que reage às ações do jogador, tornando a experiência dinâmica e interativa.",
        slug: 'fruit-ninja',
        imagem: fruitninja,
        fotos: [
            fruitninja,
            fruitninja2,
            fruitninja3,
        ]
    },

    { 
        id: 14,
        titulo: 'Unity Learn - Create With Code',
        descricao: 'Mecânicas desenvolvidas na plataforma Unity Learn',
        slug: 'create-with-code',
        imagem: createwithcode,
        texto: "Unity Learn é uma plataforma de estudos da própria Unity gratuita. Eles disponibilizam uma série de cursos para pessoas que buscam se aprofundar na engine. Nesse repositório eu desenvolvi a primeira etapa do curso Junior Programmer que tem como foco a criação de mecânicas de jogo utilizando scripts em C#. Todos os assets utilizados nesse projeto foram disponibilizados pela própria Unity.",
        fotos: [
            createwithcode2,
            createwithcode3,
            createwithcode4,
        ]
    },

    { 
        id: 15,
        titulo: 'Unity Learn - Create With Code 2',
        descricao: 'Mecânicas desenvolvidas na plataforma Unity Learn',
        slug: 'create-with-code2',
        texto: "Neste conjunto de protótipos, explorei diversos conceitos fundamentais de desenvolvimento de jogos. No primeiro, criei uma mecânica onde o player, representado por uma esfera, precisa esquivar ou empurrar inimigos esféricos para fora do mapa, aprendendo sobre Rigidbody, materiais físicos e inteligência artificial. No segundo, desenvolvi um jogo de desvio de obstáculos com foco em animações de corrida, pulo e morte, acionadas por comandos como a tecla Espaço. Em seguida, implementei um jogo de corrida onde o player controla um balão que deve evitar bombas e coletar moedas, adicionando efeitos de partículas, sons e música ambiente. Por fim, refinei a mecânica de física e IA, criando uma câmera em terceira pessoa e um sistema de ondas, onde o player deve empurrar esferas inimigas para o gol adversário, com dificuldade progressiva e power-ups.",
        imagem: createwithcode2_1,
        fotos: [
          createwithcode2_2,
          createwithcode2_3,
          createwithcode2_4,
        ]
    },

    { 
        id: 16,
        titulo: 'Unity Learn - Challenge 5',
        descricao: 'Jogo desenvolvido na plataforma Unity Learn',
        texto: "Este projeto foi desenvolvido como parte do Unit 5 - Challenge da Unity Learn, com foco na identificação e correção de erros. Ajustei a detecção de cliques para destruir objetos, corrigi o funcionamento dos botões da UI, garanti o incremento correto da pontuação, o reinício do jogo e a aplicação da dificuldade selecionada.",
        slug: 'challenge5',
        imagem: challenge5_1,
        fotos: [
          challenge5_2,
          challenge5_3,
        ]
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
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get('section');

  const todosProjetos = [...projetosJogos, ...projetosWeb, ...outrosProjetos];
  const projeto = todosProjetos.find((p) => p.slug === slug);

  if (!projeto) {
    return <div className="p-8">Projeto não encontrado.</div>;
  }

  const handleVoltar = () => {
    navigate(`/projetos?section=${section}`);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Botão de Voltar */}
      <button
        onClick={handleVoltar}
        className="mb-4 px-4 py-2 bg-gray-100 text-black rounded hover:bg-gray-200 transition"
      >
        ← Voltar
      </button>

      <h1 className="text-3xl font-bold mb-4">{projeto.titulo}</h1>

      <img 
        src={projeto.imagem} 
        alt={projeto.titulo} 
        className="w-full max-w-lg mb-6 rounded-lg shadow"
      />

      <p className="mb-4 text-gray-700">{projeto.descricao}</p>
      
      {projeto.texto && (
        <p className="mb-6 text-gray-600 whitespace-pre-line">{projeto.texto}</p>
      )}

      {projeto.repositorio && (
        <p className="mb-6 text-gray-600 whitespace-pre-line">
          Repositório: {projeto.repositorio}
        </p>
      )}

      {projeto.link && (
        <p className="mb-6 text-gray-600 whitespace-pre-line">
          Link: {projeto.link}
        </p>
      )}

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