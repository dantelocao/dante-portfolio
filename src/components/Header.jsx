import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Projetos', path: '/projetos' },
];

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}  // Remove sombra exagerada do MUI, já usamos shadow-md do Tailwind
        sx={{ backgroundColor: 'white', color: 'black' }} // COR CERTA
        className="shadow-md"
      >
        <Toolbar className="flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <Typography variant="h6" className="font-bold">
            MeuPortfólio
          </Typography>

          {/* Links Desktop */}
          <Box className="space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-gray-700 transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </Box>

        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
