import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { projetosJogos, projetosWeb, outrosProjetos, videosGameDesign } from '../../data/projetos.js';

import ProjetoHeader from './ProjetoHeader';
import ProjetoGaleria from './ProjetoGaleria';
import ProjetoVideos from './ProjetoVideos';
import ProjetoInfosExtras from './ProjetoInfosExtras';

const ProjetoDetalhe = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const section = new URLSearchParams(search).get('section');

  const todosProjetos = [...projetosJogos, ...projetosWeb, ...outrosProjetos];
  const projeto = todosProjetos.find(p => p.slug === slug);

  if (!projeto) return <div className="p-8">Projeto não encontrado.</div>;

  const handleVoltar = () => {
    navigate(`/projetos?section=${section}`);

  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button
        onClick={handleVoltar}
        className="mb-4 px-4 py-2 bg-gray-100 text-black rounded hover:bg-gray-200 transition"
      >
        ← Voltar
      </button>

      <ProjetoHeader projeto={projeto} />
      <ProjetoInfosExtras projeto={projeto} />
      <ProjetoGaleria fotos={projeto.fotos} titulo={projeto.titulo} />
      <ProjetoVideos videos={projeto.videos} titulo={projeto.titulo} />
    </div>
  );
};

export default ProjetoDetalhe;