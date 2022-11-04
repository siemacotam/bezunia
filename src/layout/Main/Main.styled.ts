import { Stack, styled } from "@mui/material";

export const StyledMain = styled(Stack)(({ theme }) => ({
  component: "main",
  maxWidth: "1200px",
  width: "100%",
  marginTop: "64px",
  marginLeft: "auto",
  marginRight: "auto",
  flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    marginTop: "80px",
  },
}));
