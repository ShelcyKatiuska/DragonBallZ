// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Imagen de Dragon Ball */}
      <Box
        sx={{
          width: '100%',
          height: 300,
          backgroundImage: 'url(https://phantom-marca-mx.unidadeditorial.es/c708d3f32aaab50aa7790eae59c8fd2d/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/05/21/16846238697919.jpg)', // Reemplazar con la URL de la imagen deseada
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
        }}
      />
      
      <Paper sx={{ p: 4, mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Acerca del Explorador de Personajes de Dragon Ball
        </Typography>
        <Divider sx={{ width: '60%', marginBottom: 2 }} />
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
          Esta aplicación es una guía completa de personajes para los fanáticos de Dragon Ball,
          impulsada por la API de Dragon Ball. Explora tus personajes favoritos,
          aprende sobre sus detalles y filtáralos por raza.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
          Creado con React, Material-UI y alimentado por la API de Dragon Ball.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
