import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import theme from "src/Theme/Theme";
import { CategoryItemProps } from "./ProductItem.model";

export const ProductItem = ({
  data: { name, img, description, price },
}: CategoryItemProps): JSX.Element => {
  return (
    <Grid item xs={12} md={3}>
      <Card variant="outlined">
        <CardMedia component="img" height="200" image={img} alt={name} />
        <CardContent>
          <Typography
            sx={{ fontFamily: theme.typography.h5 }}
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography mt={3}>{price}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
