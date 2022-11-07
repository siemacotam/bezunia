import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  Button,
  Stack,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderDrawer } from "./HeaderDrawer";
import { routes } from "src/global/const";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const isSectionActive = (path: string) => location.pathname === path;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ bgcolor: "white" }} component="nav">
        <Toolbar
          sx={{ color: "black", maxWidth: "1200px", width: "100%", mx: "auto" }}
        >
          <Stack
            sx={{ flexGrow: 1 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography component={Link} to="/bezunia" variant="h6">
              Bezunia
            </Typography>

            <IconButton
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {routes.map(({ label, path }) => {
              if (label) {
                return (
                  <Button
                    component={Link}
                    to={path}
                    key={label}
                    sx={{ color: isSectionActive(path) ? "red" : "black" }}
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
