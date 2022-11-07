import { Grid, Stack, Typography } from "@mui/material";
import { CategoryItem, ProductItem } from "src/components";
import { bestsellers, categories } from "src/global/const";

export const Home = (): JSX.Element => (
  <Stack rowGap={2}>
    <Typography component="h3" variant="h6">
      Wybierz kategorię
    </Typography>
    <Grid container spacing={3}>
      {categories.map((category) => (
        <CategoryItem data={category} key={category.name} />
      ))}
    </Grid>
    <Typography component="h3" variant="h6">
      Bestsellery
    </Typography>
    <Grid container spacing={3}>
      {bestsellers.map((category) => (
        <ProductItem data={category} key={category.name} />
      ))}
    </Grid>
  </Stack>
);
