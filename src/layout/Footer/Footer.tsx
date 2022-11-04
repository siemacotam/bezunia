import { Stack } from "@mui/material";
import theme from "src/Theme/Theme";

export const Footer = (): JSX.Element => (
  <Stack
    component="footer"
    p={5}
    justifyContent="center"
    alignItems="center"
    bgcolor={theme.palette.grey[400]}
  >
    All rights reserved - Grzegorz Celek
  </Stack>
);
