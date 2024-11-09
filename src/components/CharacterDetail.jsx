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
  Chip
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

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <CircularProgress />
    </Box>
  );
  
  if (!character) return <Typography>Character not found</Typography>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={character.image}
          alt={character.name}
          sx={{ objectFit: 'contain', bgcolor: 'grey.100' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>{character.name}</Typography>
          <Box sx={{ mb: 2 }}>
            <Chip label={`Race: ${character.race}`} sx={{ mr: 1, mb: 1 }} />
            {character.gender && <Chip label={`Gender: ${character.gender}`} sx={{ mr: 1, mb: 1 }} />}
          </Box>
          <Typography variant="body1" paragraph>
            <strong>Description:</strong> {character.description}
          </Typography>
          {character.transformations && character.transformations.length > 0 && (
            <>
              <Typography variant="h6" gutterBottom>Transformations</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {character.transformations.map((transformation, index) => (
                  <Chip key={index} label={transformation.name} color="primary" variant="outlined" />
                ))}
              </Box>
            </>
          )}
          {character.affiliation && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Affiliation:</strong> {character.affiliation}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CharacterDetail;
