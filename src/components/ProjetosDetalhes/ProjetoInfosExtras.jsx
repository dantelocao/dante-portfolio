const ProjetoInfosExtras = ({ projeto }) => (
  <>
    {projeto.repositorio && (
      <p className="mb-4 text-gray-600">
        Repository: <a href={projeto.repositorio} className="text-blue-500 underline">{projeto.repositorio}</a>
      </p>
    )}
    {projeto.link && (
      <p className="mb-4 text-gray-600">
        Link: <a href={projeto.link} className="text-blue-500 underline">{projeto.link}</a>
      </p>
    )}
    <p className="mt-6 text-gray-500">ID: {projeto.id}</p>
  </>
);

export default ProjetoInfosExtras;
