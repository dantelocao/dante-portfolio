import React from 'react';
import { Box } from '@mui/material';

const VideosGrid = ({ videos }) => (
  <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
    {videos.map(({ id, url, titulo }) => (
      <Box
        key={id}
        className="w-full overflow-hidden rounded-lg transition bg-white"
        style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.1), 0 -6px 12px rgba(0,0,0,0.1)' }}
      >
        <iframe
          src={url}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full"
          style={{ height: '500px' }}
        />
      </Box>
    ))}
  </Box>
);

export default VideosGrid;
