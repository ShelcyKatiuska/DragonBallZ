import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Detecta pantallas pequeñas
  const [openDrawer, setOpenDrawer] = useState(false);

  // Maneja la apertura y cierre del Drawer
  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Femenino", path: "/femenino" },
    { label: "Masculino", path: "/masculino" },
    { label: "Acerca de", path: "/about" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#2c2c2c",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        zIndex: (theme) => theme.zIndex.drawer + 1, // Asegura que el AppBar esté por encima de cualquier Drawer
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="https://i.pinimg.com/736x/0f/3f/f2/0f3ff2157f4e941dab3d0f782e3d0946.jpg"
            alt="Dragon Ball Logo"
            style={{
              height: "40px",
              width: "auto",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#ff9800",
              fontWeight: "bold",
              fontFamily: "monospace",
              letterSpacing: 1.2,
            }}
          >
            Dragon Ball App
          </Typography>
        </Box>

        {/* Menú para pantallas grandes */}
        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map(({ label, path }) => (
              <Button
                key={label}
                onClick={() => navigate(path)}
                sx={{
                  color: "#ffffff",
                  border: "1px solid #ff9800",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#ff9800",
                    color: "#000000",
                  },
                }}
                variant="outlined"
              >
                {label}
              </Button>
            ))}
          </Box>
        ) : (
          // Menú para dispositivos móviles con Drawer
          <>
            <Button
              onClick={() => toggleDrawer(true)}
              sx={{
                color: "#ffffff",
                border: "1px solid #ff9800",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#ff9800",
                  color: "#000000",
                },
              }}
              variant="outlined"
            >
              Menú
            </Button>

            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={() => toggleDrawer(false)} // Cierra el Drawer cuando se haga clic
              >
                <List>
                  {menuItems.map(({ label, path }) => (
                    <ListItem button key={label} onClick={() => navigate(path)}>
                      <ListItemText primary={label} sx={{ color: "#000000" }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
