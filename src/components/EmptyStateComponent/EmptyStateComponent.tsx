import { Grid, Typography } from "@mui/material";

export const EmptyStateComponent = (): JSX.Element => (
  <Grid
    item
    xs={12}
    container
    textAlign="center"
    justifyContent="center"
    alignItems="center"
    minHeight="30vh"
  >
    <Typography variant="caption">Brak wyników</Typography>
  </Grid>
);
