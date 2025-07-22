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

import whiteroom1 from '../../src/imgs/whiteroom/5.png';
import whiteroom2 from '../../src/imgs/whiteroom/6.png';
import whiteroom3 from '../../src/imgs/whiteroom/7.png';
import whiteroom4 from '../../src/imgs/whiteroom/8.png';
import whiteroom5 from '../../src/imgs/whiteroom/9.png';

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

import meuportfolio1 from '../../src/imgs/imagensWeb/meuportfolio/1.png';
import meuportfolio2 from '../../src/imgs/imagensWeb/meuportfolio/2.png';
import meuportfolio3 from '../../src/imgs/imagensWeb/meuportfolio/3.png';

import literar1 from '../../src/imgs/imagensWeb/literarapp/1.png';
import literar2 from '../../src/imgs/imagensWeb/literarapp/2.png';
import literar3 from '../../src/imgs/imagensWeb/literarapp/3.png';

// --- Projetos Jogos ---
export const projetosJogos = [
    {
      id: 1,
      titulo: 'Dark Fantasy RPG',
      descricao: 'Jogo em desenvolvimento - Unity Engine',
      slug: 'game-retro-dither',
      imagem: retroDither2,
      texto: 'Este projeto foi desenvolvido usando técnicas de dithering retro na Unity...',
      videos: [
        'https://www.youtube.com/embed/cPzkJcCPtOI',
        'https://www.youtube.com/embed/0XiYwIpcO8U',
        'https://www.youtube.com/embed/j1xrFuLse4o',
        'https://www.youtube.com/embed/rd0URleZqN8',
        'https://www.youtube.com/embed/gRT7Q0HqJlc',
      ],
      fotos: [retroDither, retroDither3, retroDither4, retroDither5],
    },
    {
    id: 20,
    titulo: 'The White Room',
    descricao: 'Jogo VR em desenvolvimento - Unity Engine',
    slug: 'white-room',
    imagem: whiteroom1,
    texto: 'Este projeto é um jogo de realidade virtual em desenvolvimento...',
    videos: [
      'https://www.youtube.com/embed/yk1BwnKEnMc',
    ],
    fotos: [whiteroom2, whiteroom3, whiteroom4, whiteroom5],
  },
  {
    id: 2,
    titulo: '3rd Person Character Controller',
    descricao: 'Animação e controle de personagem em 3ª pessoa - Unity Engine',
    slug: 'terceira-pessoa',
    imagem: camera3person,
    texto: 'Neste projeto, implementei a animação e o controle de um personagem em 3ª pessoa...',
    videos: ['https://www.youtube.com/embed/3PrNp_B9lkk'],
  },
  {
    id: 3,
    titulo: 'Jardim Botânico - Realidade Virtual',
    descricao: 'Imersão 3D do jardim botânico da UFSM - Unity Engine',
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
    id: 11,
    titulo: 'Abbadon Hospice - Game Jam',
    descricao: 'Este foi o meu primeiro jogo desenvolvido durante uma Game Jam',
    slug: 'abbadon-hospice',
    imagem: abbadon,
    repositorio: 'https://github.com/dantelocao/AbbadonHospice',
    link: 'https://dante150ml.itch.io/abbadon-hospice',
    fotos: [abbadon2, abbadon3, abbadon4, abbadon5, abbadon6],
  },
  {
    id: 12,
    titulo: 'Cooking Simulator',
    descricao: 'jogo desenvolvido para a disciplina de software educacional (UFSM) - Unity Engine',
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
    descricao: 'Portfólio pessoal desenvolvido com React',
    slug: 'portfolio',
    imagem: meuportfolio1,
    fotos: [meuportfolio2, meuportfolio3],
    texto: 'Este é o meu portfólio pessoal, desenvolvido com React. Aqui você pode encontrar informações sobre mim, meus projetos e habilidades. O design é responsivo e otimizado para diferentes dispositivos.',
    repositorio: 'https://github.com/dantelocao/dante-portfolio'
  },
  {
    id: 5,
    titulo: 'RoadMaps',
    descricao: 'Site de criação de roadmaps de estudo',
    slug: 'loja-virtual',
    imagem: roadmap,
    texto: 'Nosso site é uma plataforma onde os úsuarios podem criar seus próprios Roadmaps e vizualizar os roadmaps criados pela comunidade. Os roadmaps podem ser visualizados em diferentes formatos: accordion, que permite expandir e recolher etapas, timeline, que exibe todo o conteúdo de uma vez, e também em formato de grafo gerado por inteligência artificial.',
    repositorio: 'https://github.com/dantelocao/roadmapsApplication',
  },
  {
    id: 6,
    titulo: 'literar_app',
    descricao: 'aplicação desenvolvida para a disciplina de "Programação Web" utilizando a MERN stack',
    slug: 'literar-app',
    imagem: literar1,
    fotos: [literar2, literar3],
    texto: 'Literar é uma plataforma web feita para amantes de livros, inspirada em soluções como o Skoob. Organize sua leitura, descubra novos títulos e interaja com outros leitores! Com o Literar, suas leituras favoritas estão sempre ao seu alcance e você pode compartilhar suas opiniões com a comunidade literária.',
    repositorio: 'https://github.com/dantelocao/literar_app',
  },
  {
    id: 7,
    titulo: 'AliExpress - Remake',
    descricao: 'Recriação do frontend do Aliexpress com React e Tailwind',
    slug: 'ali-express-remake',
    imagem: aliexpress,
    texto: 'O site disponibiliza produtos de diversas categorias, como eletrônicos, moda, casa, brinquedos e muito mais, vendidos por fornecedores de diferentes partes do mundo. Aparência: Possui um design dinâmico e colorido, com banners promocionais chamativos e uma interface intuitiva. Há menus bem organizados e filtros para facilitar a navegação.',
    repositorio: 'https://github.com/dantelocao/aliexpress-remake',
  },
  {
    id: 8,
    titulo: 'GymStrong - site de montagem de treinos',
    descricao: 'Consumo de API de exercícios e treinos',
    slug: 'gymstrong',
    imagem: gym,
    texto: 'O site permite que os usuários montem seus treinos personalizados, filtrando por máquinas, músculos para encontrar vários tipos de exercícios. Também oferece dicas e recomendações de treinos. Aparência: Design clean e intuitivo, com uma interface de favoritar para a montagem do treino personalizado. As seções são bem organizadas, com áreas para filtrar os exercícios e visualizar dicas. Um design pouco chamativo com variações de branco e preto.',
    repositorio: 'https://github.com/dantelocao/gymstrongApplication',
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
    {
    id: 10,
    titulo: 'Campo Minado',
    descricao: 'Campo Minado desenvolvido em C',
    slug: 'campo-minado',
    imagem: campoMinado,
    texto: 'Este projeto é uma implementação clássica do jogo Campo Minado...',
    repositorio: 'https://github.com/dantelocao/campo_minado',
  },
];

// --- Vídeos Game Design ---
export const videosGameDesign = [
  { id: 1, titulo: 'Volcano island #1', url: 'https://www.youtube.com/embed/EJFQCLyLYv0' },
  { id: 2, titulo: 'Volcano island #2', url: 'https://www.youtube.com/embed/0VEMszhZFf8' },
  { id: 3, titulo: 'Volcano island #3', url: 'https://www.youtube.com/embed/S1R_sbqEuX8' },
  { id: 4, titulo: 'island #1', url: 'https://www.youtube.com/embed/Eb01sjLPQ5M' },
  { id: 5, titulo: 'island #2', url: 'https://www.youtube.com/embed/__sVoAGROw4' },
  { id: 6, titulo: 'island #3', url: 'https://www.youtube.com/embed/SUDdsRWTAYk' },
];
