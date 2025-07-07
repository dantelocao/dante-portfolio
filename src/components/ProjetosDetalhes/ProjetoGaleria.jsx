const ProjetoGaleria = ({ fotos = [], titulo }) => {
  if (fotos.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Mais imagens</h2>
      <div className="grid grid-cols-2 gap-4">
        {fotos.map((foto, idx) => (
          <img
            key={idx}
            src={foto}
            alt={`${titulo} extra ${idx + 1}`}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjetoGaleria;
