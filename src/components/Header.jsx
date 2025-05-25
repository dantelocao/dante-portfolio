import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = ['Início', 'Sobre', 'Projetos', 'Contato'];

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
          <Box className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-gray-700 transition-colors duration-300 font-medium"
              >
                {link}
              </a>
            ))}
          </Box>

          {/* Botão Mobile */}
          <Box className="md:hidden">
            <IconButton edge="end" onClick={toggleDrawer} sx={{ color: 'black' }}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { backgroundColor: 'white' },
          className: 'w-64 p-6'
        }}
      >
        <Typography variant="h6" className="mb-4 font-bold">
          Navegação
        </Typography>
        <List>
          {navLinks.map((link) => (
            <ListItem button key={link} onClick={toggleDrawer}>
              <ListItemText 
                primary={link}
                primaryTypographyProps={{ 
                  className: 'hover:text-gray-700 transition-colors duration-300 font-medium'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
