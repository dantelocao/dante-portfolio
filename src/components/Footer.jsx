import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-white text-black shadow-md p-6 mt-12 w-full"
      sx={{
        width: '100%', // largura total da viewport
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
        {/* Contato */}
        <Box
          className="flex items-center gap-4"
          sx={{ minWidth: 250, justifyContent: { xs: 'center', md: 'flex-start' } }}
        >
          <EmailIcon />
          <Typography variant="body1">contato@literar.com</Typography>
          <PhoneIcon sx={{ ml: 4 }} />
          <Typography variant="body1">+55 (51) 99999-9999</Typography>
        </Box>

        {/* Redes sociais */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: { xs: 'center', md: 'center' },
            flex: 1,
          }}
        >
          <Link href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Link>
        </Box>

        {/* Direitos autorais */}
        <Box
          sx={{ minWidth: 250, justifyContent: { xs: 'center', md: 'flex-end' }, display: 'flex' }}
        >
          <Typography variant="body2" component="p" sx={{ color: 'gray' }}>
            © 2024 Literar. Todos os direitos reservados.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;


