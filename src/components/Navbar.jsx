import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#2c2c2c',
        boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo o imagen */}
        <Box 
          sx={{
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer'
          }} 
          onClick={() => navigate('/')}
        >
          <img 
            src="https://i.pinimg.com/736x/0f/3f/f2/0f3ff2157f4e941dab3d0f782e3d0946.jpg" 
            alt="Dragon Ball Logo"
            style={{
              height: '40px', // Ajusta el tamaño según sea necesario
              width: 'auto',
              marginRight: '10px'
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: '#ff9800',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              letterSpacing: 1.2,
            }}
          >
            Dragon Ball App
          </Typography>
        </Box>

        {/* Menú de navegación */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {[{ label: 'Inicio', path: '/' }, { label: 'Femenino', path: '/femenino' }, { label: 'Masculino', path: '/masculino' }, { label: 'Acerca de', path: '/about' }]
            .map(({ label, path }) => (
              <Button
                key={label}
                onClick={() => navigate(path)}
                sx={{
                  color: '#ffffff',
                  border: '1px solid #ff9800',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#ff9800',
                    color: '#000000',
                  },
                }}
                variant="outlined"
              >
                {label}
              </Button>
            ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
