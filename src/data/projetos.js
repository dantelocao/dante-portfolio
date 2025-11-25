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

import acervo1 from '../../src/imgs/acervo3d/imagem.png';

// --- Game Projects ---
export const projetosJogos = [
    {
      id: 40,
      titulo: 'Acervo 3D - UFSM',
      descricao: 'Plataforma Online para criar cenários e expor em site - Unity Engine',
      slug: 'acervo-ufsm',
      imagem: acervo1,
      texto: 'Unity engine Web Gl Build - Plataforma de criar cenários 3D para expor obras do acervo da UFSM',
      videos: [
        'https://www.youtube.com/embed/cPzkJcCPtOI',,
      ],
      fotos: [acervo1],

    },
    {
      id: 1,
      titulo: 'Dark Fantasy RPG',
      descricao: 'Game in development - Unity Engine',
      slug: 'game-retro-dither',
      imagem: retroDither2,
      texto: 'This project was developed using retro dithering techniques in Unity...',
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
    descricao: 'VR game in development - Unity Engine',
    slug: 'white-room',
    imagem: whiteroom1,
    texto: 'This project is a virtual reality game in development...',
    videos: [
      'https://www.youtube.com/embed/yk1BwnKEnMc',
    ],
    fotos: [whiteroom2, whiteroom3, whiteroom4, whiteroom5],
  },
  {
    id: 12,
    titulo: 'Cooking Simulator',
    descricao: 'Game developed for the Educational Software course (UFSM) - Unity Engine',
    slug: 'comida-montagem',
    imagem: cooking_1,
    fotos: [cooking_1],
    videos: [
      'https://www.youtube.com/embed/8aJgtJv6ink',
      'https://www.youtube.com/embed/g-IXz0Dnydg',
    ],
  },
  {
    id: 3,
    titulo: 'Botanical Garden - Virtual Reality',
    descricao: '3D immersion of the UFSM botanical garden - Unity Engine',
    slug: 'jardim-botanico',
    imagem: jardim,
    texto: 'This project was developed as part of an academic work...',
    fotos: [
      'https://via.placeholder.com/300x200?text=Extra+1',
      'https://via.placeholder.com/300x200?text=Extra+2',
    ],
    videos: ['https://www.youtube.com/embed/U_lMkL9ST1E'],
  },
  {
    id: 2,
    titulo: '3rd Person Character Controller',
    descricao: 'Animation and third-person character control - Unity Engine',
    slug: 'terceira-pessoa',
    imagem: camera3person,
    texto: 'In this project, I implemented animation and control of a third-person character...',
    videos: ['https://www.youtube.com/embed/3PrNp_B9lkk'],
  },
  {
    id: 11,
    titulo: 'Abbadon Hospice - Game Jam',
    descricao: 'This was my first game developed during a Game Jam',
    slug: 'abbadon-hospice',
    imagem: abbadon,
    repositorio: 'https://github.com/dantelocao/AbbadonHospice',
    link: 'https://dante150ml.itch.io/abbadon-hospice',
    fotos: [abbadon2, abbadon3, abbadon4, abbadon5, abbadon6],
  },
  {
    id: 13,
    titulo: 'Unity Learn - Fruit Ninja',
    descricao: 'Game developed on the Unity Learn platform',
    slug: 'fruit-ninja',
    imagem: fruitninja,
    texto: 'The technical development of a prototype inspired by Fruit Ninja...',
    fotos: [fruitninja, fruitninja2, fruitninja3],
  },
  {
    id: 14,
    titulo: 'Unity Learn - Create With Code',
    descricao: 'Mechanics developed on the Unity Learn platform',
    slug: 'create-with-code',
    imagem: createwithcode,
    texto: 'Unity Learn is a learning platform provided by Unity itself...',
    fotos: [createwithcode2, createwithcode3, createwithcode4],
  },
  {
    id: 15,
    titulo: 'Unity Learn - Create With Code 2',
    descricao: 'Mechanics developed on the Unity Learn platform',
    slug: 'create-with-code2',
    imagem: createwithcode2_1,
    texto: 'In this set of prototypes, I explored several fundamental concepts...',
    fotos: [createwithcode2_2, createwithcode2_3, createwithcode2_4],
  },
  {
    id: 16,
    titulo: 'Unity Learn - Challenge 5',
    descricao: 'Game developed on the Unity Learn platform',
    slug: 'challenge5',
    imagem: challenge5_1,
    texto: 'This project was developed as part of Unit 5 - Challenge...',
    fotos: [challenge5_2, challenge5_3],
  },
];

// --- Web Projects ---
export const projetosWeb = [
  {
    id: 4,
    titulo: 'Portfolio',
    descricao: 'Personal portfolio developed with React',
    slug: 'portfolio',
    imagem: meuportfolio1,
    fotos: [meuportfolio2, meuportfolio3],
    texto: 'This is my personal portfolio developed with React. Here you can find information about me, my projects, and skills. The design is responsive and optimized for different devices.',
    repositorio: 'https://github.com/dantelocao/dante-portfolio'
  },
  {
    id: 5,
    titulo: 'RoadMaps',
    descricao: 'Study roadmap creation site',
    slug: 'loja-virtual',
    imagem: roadmap,
    texto: 'Our site is a platform where users can create their own Roadmaps and view roadmaps created by the community. Roadmaps can be viewed in different formats: accordion, which allows expanding and collapsing steps; timeline, which shows all content at once; and also in a graph format generated by artificial intelligence.',
    repositorio: 'https://github.com/dantelocao/roadmapsApplication',
  },
  {
    id: 6,
    titulo: 'literar_app',
    descricao: 'Application developed for the "Web Programming" course using the MERN stack',
    slug: 'literar-app',
    imagem: literar1,
    fotos: [literar2, literar3],
    texto: 'Literar is a web platform made for book lovers, inspired by solutions like Skoob. Organize your reading, discover new titles, and interact with other readers! With Literar, your favorite readings are always at your fingertips and you can share your opinions with the literary community.',
    repositorio: 'https://github.com/dantelocao/literar_app',
  },
  {
    id: 7,
    titulo: 'AliExpress - Remake',
    descricao: 'Frontend recreation of AliExpress with React and Tailwind',
    slug: 'ali-express-remake',
    imagem: aliexpress,
    texto: 'The site provides products from various categories such as electronics, fashion, home, toys, and more, sold by suppliers from different parts of the world. Appearance: It has a dynamic and colorful design, with eye-catching promotional banners and an intuitive interface. There are well-organized menus and filters to facilitate navigation.',
    repositorio: 'https://github.com/dantelocao/aliexpress-remake',
  },
  {
    id: 8,
    titulo: 'GymStrong - workout building site',
    descricao: 'API consumption of exercises and workouts',
    slug: 'gymstrong',
    imagem: gym,
    texto: 'The site allows users to create their personalized workouts, filtering by machines and muscles to find various types of exercises. It also offers tips and recommendations for workouts. Appearance: Clean and intuitive design, with a favoriting interface for personalized workout creation. Sections are well-organized, with areas to filter exercises and view tips. A design that is not too flashy with white and black variations.',
    repositorio: 'https://github.com/dantelocao/gymstrongApplication',
  },
];

// --- Other Projects ---
export const outrosProjetos = [
  {
    id: 9,
    titulo: 'github_api',
    descricao: 'Example of GitHub API consumption',
    slug: 'github-api',
    imagem: gitapi,
  },
    {
    id: 10,
    titulo: 'Minesweeper',
    descricao: 'Minesweeper developed in C',
    slug: 'campo-minado',
    imagem: campoMinado,
    texto: 'This project is a classic implementation of the Minesweeper game...',
    repositorio: 'https://github.com/dantelocao/campo_minado',
  },
];

// --- Game Design Videos ---
export const videosGameDesign = [
  { id: 1, titulo: 'Volcano island #1', url: 'https://www.youtube.com/embed/EJFQCLyLYv0' },
  { id: 2, titulo: 'Volcano island #2', url: 'https://www.youtube.com/embed/0VEMszhZFf8' },
  { id: 3, titulo: 'Volcano island #3', url: 'https://www.youtube.com/embed/S1R_sbqEuX8' },
  { id: 4, titulo: 'island #1', url: 'https://www.youtube.com/embed/Eb01sjLPQ5M' },
  { id: 5, titulo: 'island #2', url: 'https://www.youtube.com/embed/__sVoAGROw4' },
  { id: 6, titulo: 'island #3', url: 'https://www.youtube.com/embed/SUDdsRWTAYk' },
];
