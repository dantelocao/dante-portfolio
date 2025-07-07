// Importações de imagens
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

// --- Projetos Jogos ---
export const projetosJogos = [
  {
    id: 1,
    titulo: 'Game retro dither',
    descricao: 'Jogo desenvolvido em Unity',
    slug: 'game-retro-dither',
    imagem: retroDither,
    texto: 'Este projeto foi desenvolvido usando técnicas de dithering retro na Unity...',
    videos: [
      'https://www.youtube.com/embed/cPzkJcCPtOI',
      'https://www.youtube.com/embed/0XiYwIpcO8U',
      'https://www.youtube.com/embed/j1xrFuLse4o',
      'https://www.youtube.com/embed/rd0URleZqN8',
      'https://www.youtube.com/embed/gRT7Q0HqJlc',
    ],
    fotos: [retroDither2, retroDither3, retroDither4, retroDither5],
  },
  {
    id: 2,
    titulo: '3rd Person Character Controller',
    descricao: 'Animação e controle de personagem em 3ª pessoa',
    slug: 'terceira-pessoa',
    imagem: camera3person,
    texto: 'Neste projeto, implementei a animação e o controle de um personagem em 3ª pessoa...',
    videos: ['https://www.youtube.com/embed/3PrNp_B9lkk'],
  },
  {
    id: 3,
    titulo: 'Jardim Botânico - RV',
    descricao: 'Realidade virtual do jardim botânico de minha universidade',
    slug: 'jardim-botanico',
    imagem: jardim,
    texto: 'Este projeto foi desenvolvido como parte de um trabalho acadêmico...',
    fotos: [
      'https://via.placeholder.com/300x200?text=Extra+1',
      'https://via.placeholder.com/300x200?text=Extra+2',
    ],
    videos: ['https://www.youtube.com/embed/U_lMkL9ST1E'],
  },
  {
    id: 10,
    titulo: 'Campo Minado',
    descricao: 'Campo Minado desenvolvido em C',
    slug: 'campo-minado',
    imagem: campoMinado,
    texto: 'Este projeto é uma implementação clássica do jogo Campo Minado...',
    repositorio: 'https://github.com/dantelocao/campo_minado',
  },
  {
    id: 11,
    titulo: 'Abbadon Hospice - Game Jam',
    descricao: 'Este foi o meu primeiro jogo desenvolvido durante uma Game Jam...',
    slug: 'abbadon-hospice',
    imagem: abbadon,
    repositorio: 'https://github.com/dantelocao/AbbadonHospice',
    link: 'https://dante150ml.itch.io/abbadon-hospice',
    fotos: [abbadon2, abbadon3, abbadon4, abbadon5, abbadon6],
  },
  {
    id: 12,
    titulo: 'Cooking Simulator',
    descricao: 'jogo desenvolvido para a disciplina de software educacional (UFSM)',
    slug: 'comida-montagem',
    imagem: cooking_1,
    fotos: [cooking_1],
    videos: [
      'https://www.youtube.com/embed/8aJgtJv6ink',
      'https://www.youtube.com/embed/g-IXz0Dnydg',
    ],
  },
  {
    id: 13,
    titulo: 'Unity Learn - Fruit Ninja',
    descricao: 'Jogo desenvolvido na plataforma Unity Learn',
    slug: 'fruit-ninja',
    imagem: fruitninja,
    texto: 'O desenvolvimento técnico de um protótipo inspirado no Fruit Ninja...',
    fotos: [fruitninja, fruitninja2, fruitninja3],
  },
  {
    id: 14,
    titulo: 'Unity Learn - Create With Code',
    descricao: 'Mecânicas desenvolvidas na plataforma Unity Learn',
    slug: 'create-with-code',
    imagem: createwithcode,
    texto: 'Unity Learn é uma plataforma de estudos da própria Unity...',
    fotos: [createwithcode2, createwithcode3, createwithcode4],
  },
  {
    id: 15,
    titulo: 'Unity Learn - Create With Code 2',
    descricao: 'Mecânicas desenvolvidas na plataforma Unity Learn',
    slug: 'create-with-code2',
    imagem: createwithcode2_1,
    texto: 'Neste conjunto de protótipos, explorei diversos conceitos fundamentais...',
    fotos: [createwithcode2_2, createwithcode2_3, createwithcode2_4],
  },
  {
    id: 16,
    titulo: 'Unity Learn - Challenge 5',
    descricao: 'Jogo desenvolvido na plataforma Unity Learn',
    slug: 'challenge5',
    imagem: challenge5_1,
    texto: 'Este projeto foi desenvolvido como parte do Unit 5 - Challenge...',
    fotos: [challenge5_2, challenge5_3],
  },
];

// --- Projetos Web ---
export const projetosWeb = [
  {
    id: 4,
    titulo: 'Portfolio',
    descricao: 'Meu site pessoal',
    slug: 'portfolio',
    imagem: 'https://via.placeholder.com/300x200?text=Portfolio',
  },
  {
    id: 5,
    titulo: 'RoadMaps',
    descricao: 'Site de criação de roadmaps de estudo...',
    slug: 'loja-virtual',
    imagem: roadmap,
  },
  {
    id: 6,
    titulo: 'literar_app',
    descricao: 'Site de livros desenvolvido...',
    slug: 'literar-app',
    imagem: 'https://via.placeholder.com/300x200?text=Blog+Tech',
  },
  {
    id: 7,
    titulo: 'AliExpress - Remake',
    descricao: 'Recriação do frontend do Aliexpress com React e Tailwind',
    slug: 'ali-express-remake',
    imagem: aliexpress,
  },
  {
    id: 8,
    titulo: 'GymStrong - site de montagem de treinos',
    descricao: 'Consumo de API de exercícios e treinos',
    slug: 'gymstrong',
    imagem: gym,
  },
];

// --- Outros Projetos ---
export const outrosProjetos = [
  {
    id: 9,
    titulo: 'github_api',
    descricao: 'Exemplo de consumo de API do GitHub',
    slug: 'github-api',
    imagem: gitapi,
  },
];

// --- Vídeos Game Design ---
export const videosGameDesign = [
  { id: 1, titulo: 'Volcano island #1', url: 'https://www.youtube.com/embed/EJFQCLyLYv0' },
  { id: 2, titulo: 'Volcano island #2', url: 'https://www.youtube.com/embed/0VEMszhZFf8' },
  { id: 3, titulo: 'Volcano island #3', url: 'https://www.youtube.com/embed/S1R_sbqEuX8' },
  { id: 4, titulo: 'island #1', url: 'https://www.youtube.com/embed/Eb01sjLPQ5M' },
  { id: 5, titulo: 'island island #3', url: 'https://www.youtube.com/embed/__sVoAGROw4' },
  { id: 6, titulo: 'island island #3', url: 'https://www.youtube.com/embed/SUDdsRWTAYk' },
];
