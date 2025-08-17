import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-white text-black shadow-md p-6 mt-12 w-full"
      sx={{
        width: '100%', // full viewport width
      }}
    >
      <Box
        sx={{
          maxWidth: '1024px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* Contact */}
        <Box
          className="flex items-center gap-4"
          sx={{ minWidth: 250, justifyContent: { xs: 'center', md: 'flex-start' } }}
        >
          <EmailIcon />
          <Typography variant="body1">dante.dardaque@hotmail.com</Typography>
        </Box>

        {/* Social Media */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: { xs: 'center', md: 'center' },
            flex: 1,
          }}
        >
          <Link href="https://www.linkedin.com/in/dante-dardaque-42b695181/" target="_blank" rel="noopener" color="inherit">
            <IconButton aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link href="https://www.youtube.com/@hexvoidgames" target="_blank" rel="noopener" color="inherit">
            <IconButton aria-label="YouTube">
              <YouTubeIcon />
            </IconButton>
          </Link>
          <Link href="https://www.instagram.com/hexvoidgames/" target="_blank" rel="noopener" color="inherit">
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Link>
          <Link href="https://github.com/dantelocao" target="_blank" rel="noopener" color="inherit">
            <IconButton aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Box>

        {/* Copyright */}
        <Box
          sx={{ minWidth: 250, justifyContent: { xs: 'center', md: 'flex-end' }, display: 'flex' }}
        >
          <Typography variant="body2" component="p" sx={{ color: 'gray' }}>
            © 2024. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
