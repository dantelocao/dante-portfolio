import React, { useEffect, useState } from 'react';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const certificacoes = [
  {
    name: 'Unity Junior Programmer',
    badgeId: '5f890dd9-bb16-433f-a08b-b0e6ee7d9543',
  },
  {
    name: 'AWS Academy Cloud Foundations',
    badgeId: 'ad2becce-e80d-45fa-93fc-0b3c75d8e472'
  }
];

const Certificacoes = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => setOpen(!open);

  useEffect(() => {
    if (open) {
      const script = document.createElement('script');
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  return (
    <Box
      className="bg-white text-black p-10 rounded-lg max-w-6xl mx-auto mt-20 shadow-lg"
      style={{
        boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 -8px 16px rgba(0,0,0,0.15)',
      }}
    >
      <Box
        onClick={handleToggle}
        className="flex justify-between items-center cursor-pointer"
      >
        <Typography variant="h4" component="h2" className="font-bold text-black">
          Certifications
        </Typography>
        <IconButton>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className="flex flex-wrap justify-center gap-10 mt-10">
          {certificacoes.map(({ name, badgeId }, idx) => (
            <Box
              key={idx}
              className="bg-white rounded-xl hover:shadow-xl transition"
              sx={{
                width: 220,
                minHeight: 330,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  transform: 'scale(1.15)', // visually enlarges the iframe without needing a bigger block
                  transformOrigin: 'top center',
                }}
              >
                <div
                  data-iframe-width="230"
                  data-iframe-height="310"
                  data-share-badge-id={badgeId}
                  data-share-badge-host="https://www.credly.com"
                ></div>
              </Box>
              <Typography
                variant="body1"
                align="center"
                className="text-black font-semibold mt-4"
                sx={{ fontSize: 15, lineHeight: 1.3 }}
              >
                {name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Certificacoes;
