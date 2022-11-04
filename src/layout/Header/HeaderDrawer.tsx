import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "src/global/const";
import { HeaderDrawerProps } from "./Header.model";

export const HeaderDrawer = ({
  mobileOpen,
  handleDrawerToggle,
}: HeaderDrawerProps) => {
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "100%",
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography component={Link} to="/bezunia" variant="h6" sx={{ my: 2 }}>
          Bezunia
        </Typography>
        <Divider />
        <List>
          {routes.map(({ label, path }) => {
            if (label) {
              return (
                <ListItem key={label} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={path}
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              );
            } else {
              return null;
            }
          })}
        </List>
      </Box>
    </Drawer>
  );
};
