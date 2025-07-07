const ProjetoVideos = ({ videos = [], titulo }) => {
  if (videos.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Vídeos</h2>
      <div className="flex flex-col gap-6">
        {videos.map((videoUrl, idx) => (
          <iframe
            key={idx}
            width="100%"
            height="315"
            src={videoUrl}
            title={`${titulo} vídeo ${idx + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjetoVideos;
