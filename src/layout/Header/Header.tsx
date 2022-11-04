import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  Button,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderDrawer } from "./HeaderDrawer";
import { routes } from "src/global/const";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ bgcolor: "white" }} component="nav">
        <Toolbar sx={{ color: "black" }}>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography component={Link} to="/" variant="h6">
              Bezunia
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {routes.map(({ label, path }) => {
              if (label) {
                return (
                  <Button
                    component={Link}
                    to={path}
                    key={label}
                    sx={{ color: "black" }}
                  >
                    {label}
                  </Button>
                );
              } else {
                return null;
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <HeaderDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Box>
    </Box>
  );
};
