import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  CircularProgress,
  Box,
  Chip,
  Divider,
  Stack
} from '@mui/material';
import { getCharacterById } from '../api';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterById(id);
      setCharacter(data);
      setLoading(false);
    };
    fetchCharacter();
  }, [id]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );

  if (!character) return <Typography>Character not found</Typography>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Card
        sx={{
          bgcolor: '#2c2c2c',
          color: 'white',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 6,
        }}
      >
        <Box
          sx={{
            height: 400,
            bgcolor: '#1e1e1e',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            {character.name}
          </Typography>

          <Divider sx={{ my: 2, borderColor: '#444' }} />

          <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
            <Chip label={`Race: ${character.race}`} sx={{ bgcolor: '#424242', color: '#f1c40f' }} />
            {character.gender && (
              <Chip label={`Gender: ${character.gender}`} sx={{ bgcolor: '#424242', color: '#e91e63' }} />
            )}
          </Stack>

          {character.description && (
            <Typography variant="body1" paragraph>
              <strong>Description:</strong> {character.description}
            </Typography>
          )}

<Typography variant="body2">
  <strong>Base KI:</strong> {character.ki ?? 'N/A'}
</Typography>
<Typography variant="body2">
  <strong>Total KI:</strong> {character.maxKi ?? 'N/A'}
</Typography>


          {character.transformations && character.transformations.length > 0 && (
            <>
              <Typography variant="h6" gutterBottom>
                Transformations
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {character.transformations.map((transformation, index) => (
                  <Chip
                    key={index}
                    label={transformation.name}
                    color="primary"
                    variant="outlined"
                    sx={{ bgcolor: '#1e1e1e', borderColor: '#2196f3', color: '#90caf9' }}
                  />
                ))}
              </Box>
            </>
          )}

          {character.affiliation && (
            <Typography variant="body1" sx={{ mt: 3 }}>
              <strong>Affiliation:</strong> {character.affiliation}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CharacterDetail;
