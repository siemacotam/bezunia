import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
// import { ContactForm } from "../../components/ContactForm/ContactForm";
import { useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";

export const Contact = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={3}>
              <Typography variant="h6" component="p">
                Odwiedź nas
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <PlaceIcon />
                <Typography component="p">Bezunia, Kalisz</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" component="p" mb={2}>
              Napisz do nas
            </Typography>
            <ContactForm />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
