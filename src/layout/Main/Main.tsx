import { Card, CardContent, Grid } from "@mui/material";
import { Route, Routes } from "react-router";
import { routes } from "src/global/const";
import { StyledMain } from "./Main.styled";

export const Main = (): JSX.Element => {
  const routesElements = routes.map(({ path, component }) => (
    <Route key={path} element={component} path={path} />
  ));

  return (
    <StyledMain>
      <Grid container>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Routes>{routesElements}</Routes>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </StyledMain>
  );
};
