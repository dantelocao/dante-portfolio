import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Stack
} from '@mui/material';

import dante from '../../src/imgs/4.png';

const bullets = [
  '💻 Next.js, React, JavaScript, and web development.',
  '🎮 Specialist in Unity Engine and game development.',
  '🌱 Always seeking to grow as a developer and as a person.',
  '🚀 Enthusiast of new technologies and frameworks.',
  '📚 Fluent in English.'
];

const techStack = [
  'React', 'JavaScript', 'TypeScript', 'Node.js',
  'Vite', 'MUI', 'Tailwind',
  'HTML', 'CSS', 'Git/GitHub',
  'Unity (C#)', 'URP', 'Shader Graph'
];

const Sobre = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        color: 'black',
        p: { xs: 4, md: 8 },
        borderRadius: 4,
        maxWidth: '96rem',
        mx: 'auto',
        mt: 5,
        mb: 10,
        minHeight: { xs: 'calc(100vh - 140px)', md: 'calc(100vh - 160px)' },
        boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 -8px 16px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: { xs: 3, md: 5 },
        position: 'relative'
      }}
    >
      {/* Avatar */}
      <Avatar
        alt="Profile Picture"
        src={dante}
        sx={{
          width: { xs: 180, md: 240 },
          height: { xs: 180, md: 240 },
          boxShadow: 3,
          flexShrink: 0
        }}
      />

      {/* Conteúdo */}
      <Box sx={{ flex: 1, width: '100%' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dante Dardaque Santos
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, whiteSpace: 'pre-line' }}>
          Currently focused on studying web development and game creation in Unity.
          I have a passion for game design, computer graphics, and research in this area.
          I am in the final stage of my Information Systems degree and I am seeking my
          first experience as an intern.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          My goal is to build clean, accessible, and high-performance interfaces while
          exploring interactive worlds in Unity. I enjoy solving problems, documenting
          my process, and iterating quickly based on feedback.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* More about me + Tech I work with (lado a lado no desktop) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          {/* More about me */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              More about me:
            </Typography>
            <List dense>
              {bullets.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Tech I work with */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              Tech I work with:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {techStack.map((t, i) => (
                <Chip key={i} label={t} sx={{ mb: 1 }} />
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Seção final */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 }
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              What I’m looking for
            </Typography>
            <Typography variant="body1">
              I’m seeking an internship where I can contribute to real projects, collaborate with
              a team, and continue improving my skills in frontend development and Unity.
              I value good code practices, mentoring, and clear communication.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              Availability & Contact
            </Typography>
            <Typography variant="body1">
              Available for part-time or full-time internship. Open to remote or hybrid.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sobre;
