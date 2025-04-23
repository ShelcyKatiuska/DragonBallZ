import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Stack,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TikTokIcon from '@mui/icons-material/MusicNote';
import shelcyImage from '../assets/Img/Shelcy.jpg';

const AboutPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
  sx={{
    p: 4,
    mt: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // más transparente
    borderRadius: 3,
    boxShadow: 6,
   
  }}


        >
          {/* Foto de perfil */}
          <Box
            component="img"
            src={shelcyImage}
            alt="Shelcy"
            sx={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              objectFit: 'cover',
              mb: 2,
              boxShadow: 3,
            }}
          />

          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Shelcy Katiuska Ortiz Diaz
          </Typography>
          <Divider sx={{ width: '60%', mb: 2 }} />

          {/* Descripción personal */}
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              fontStyle: 'italic',
              color: '#55',
              mb: 3,
            }}
          >
            Mi nombre es Shelcy Katiuska Ortiz Díaz. Vivo en Florencia, Caquetá, una ciudad rodeada de naturaleza y rica en cultura. Actualmente, estudio Ingeniería de Sistemas en la Universidad de la Amazonia. 
            Me considero una persona llena de energía y buena vibra. Disfruto mucho bailar, practicar basketball y mantenerme activa y enfocada en el gym. Además de estudiar, también trabajo, lo que me ha ayudado a ser más disciplinada y comprometida con mis metas. 
            Me defino como una persona alegre, amable, competitiva y muy amorosa. Siempre trato de dar lo mejor de mí, tanto en lo personal como en lo profesional.
          </Typography>

          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemText primary="Fecha de Nacimiento" secondary="31/10/2000" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Correo Institucional" secondary="sh.ortiz@udla.edu.co" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Correo Personal" secondary="she.ortiz05@outlook.com" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Programa" secondary="Ingenieria de Sistemas" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Semestre" secondary="8" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Periodo" secondary="2025-1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Asignatura" secondary="Programación Web" />
            </ListItem>
          </List>

          {/* Redes sociales con íconos grandes */}
          <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
            <IconButton
              color="primary"
              component="a"
              href="https://www.instagram.com/shelcy_31?igsh=dHRia3dwNDduNmR5&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener"
              sx={{
                width: 60,
                height: 60,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  backgroundColor: '#E4405F',
                  borderRadius: '50%',
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 36 }} />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="https://www.facebook.com/share/1688Aeqig1/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener"
              sx={{
                width: 60,
                height: 60,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  backgroundColor: '#1877F2',
                  borderRadius: '50%',
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: 36 }} />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="https://www.tiktok.com/@shelcyortiz?_t=ZS-8v2XSGAU6WA&_r=1"
              target="_blank"
              rel="noopener"
              sx={{
                width: 60,
                height: 60,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  backgroundColor: '#000000',
                  borderRadius: '50%',
                },
              }}
            >
              <TikTokIcon sx={{ fontSize: 36 }} />
            </IconButton>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutPage;
