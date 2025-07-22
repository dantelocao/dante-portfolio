import React, { useState } from 'react';

const ProjetoGaleria = ({ fotos = [], titulo }) => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  if (fotos.length === 0) return null;

  const abrirImagem = (foto) => {
    setImagemSelecionada(foto);
  };

  const fecharImagem = () => {
    setImagemSelecionada(null);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Mais imagens</h2>
      <div className="grid grid-cols-2 gap-4">
        {fotos.map((foto, idx) => (
          <img
            key={idx}
            src={foto}
            alt={`${titulo} extra ${idx + 1}`}
            className="rounded shadow cursor-pointer hover:opacity-80 transition"
            onClick={() => abrirImagem(foto)}
          />
        ))}
      </div>

      {imagemSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={fecharImagem}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50 hover:text-red-400"
            >
              ✕
            </button>
            <img
              src={imagemSelecionada}
              alt="Imagem ampliada"
              className="w-auto max-w-[80vw] max-h-[70vh] rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjetoGaleria;
