const ProjetoHeader = ({ projeto }) => (
  <>
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
  </>
);

export default ProjetoHeader;
