import React, { useState } from 'react';

const ProjetoHeader = ({ projeto }) => {
  const [imagemAberta, setImagemAberta] = useState(false);

  const abrirImagem = () => setImagemAberta(true);
  const fecharImagem = () => setImagemAberta(false);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{projeto.titulo}</h1>
      <img
        src={projeto.imagem}
        alt={projeto.titulo}
        className="w-full max-w-lg mb-6 rounded-lg shadow cursor-pointer hover:opacity-80 transition"
        onClick={abrirImagem}
      />

      {imagemAberta && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={fecharImagem}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50 hover:text-red-400"
            >
              ✕
            </button>
            <img
              src={projeto.imagem}
              alt="Imagem ampliada"
              className="w-auto max-w-[80vw] max-h-[70vh] rounded shadow-lg"
            />
          </div>
        </div>
      )}

      <p className="mb-4 text-gray-700">{projeto.descricao}</p>
      {projeto.texto && (
        <p className="mb-6 text-gray-600 whitespace-pre-line">{projeto.texto}</p>
      )}
    </>
  );
};

export default ProjetoHeader;
