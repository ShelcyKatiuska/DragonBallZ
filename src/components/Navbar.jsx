// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Flexbox centrado para el contenido */}
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" onClick={() => navigate('/')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate('/humans')}>
              Humans
            </Button>
            <Button color="inherit" onClick={() => navigate('/non-humans')}>
              Non-Humans
            </Button>
            <Button color="inherit" onClick={() => navigate('/about')}>
              About
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
