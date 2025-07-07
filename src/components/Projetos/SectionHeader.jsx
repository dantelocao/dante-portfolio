import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const SectionHeader = ({ title, isOpen, onToggle }) => (
  <Box
    onClick={onToggle}
    className="flex justify-between items-center cursor-pointer p-4 bg-white text-black hover:bg-gray-100 transition"
  >
    <Typography variant="h5" component="h2" className="font-semibold">
      {title}
    </Typography>
    <IconButton>{isOpen ? <ExpandLess /> : <ExpandMore />}</IconButton>
  </Box>
);

export default SectionHeader;
