import { Grid } from "@mui/material";
import { OfferItem } from "src/components";
import { offerOptions } from "src/global/const/_offer";

export const Offer = (): JSX.Element => (
  <Grid container>
    {offerOptions.map((option) => (
      <OfferItem key={option.name} data={option} />
    ))}
  </Grid>
);
