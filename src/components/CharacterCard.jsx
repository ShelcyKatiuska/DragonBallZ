import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea onClick={() => navigate(`/character/${character.id}`)}>
        <CardMedia
          component="img"
          height="240"
          image={character.image}
          alt={character.name}
          sx={{ objectFit: 'contain', bgcolor: 'grey.100' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Race: {character.race}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Planet: {character.originPlanet}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
