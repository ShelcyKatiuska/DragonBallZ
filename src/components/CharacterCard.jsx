import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 325,
        height: 500,
        bgcolor: "#2c2c2c",
        color: "white",
        borderRadius: 2,
        m: 2,
        overflow: "visible",
      }}
    >
      <CardActionArea onClick={() => navigate(`/character/${character.id}`)}>
        <Box
          sx={{
            height: 300,
            bgcolor: "#1e1e1e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            position: "relative",
            "& img": {
              transition: "transform 0.3s ease-in-out",
              zIndex: 1,
              position: "relative",
            },
            "&:hover img": {
              transform: "scale(1.3)",
              zIndex: 10,
            },
          }}
        >
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        <CardContent sx={{ bgcolor: "#2c2c2c" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {character.name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#f1c40f", mb: 1 }}>
            {character.race} - {character.gender}
          </Typography>
          <Typography variant="body2">
            <strong>Base KI:</strong> {character.ki ?? "N/A"}
          </Typography>
          <Typography variant="body2">
            <strong>Total KI:</strong> {character.maxKi ?? "N/A"}
          </Typography>
          {character.affiliation && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Affiliation:</strong> {character.affiliation}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
