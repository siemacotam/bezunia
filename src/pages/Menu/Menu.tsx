import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { EmptyStateComponent, ProductItem } from "src/components";
import { categoriesNames, products } from "src/global/const";
import { Product, ProductCategories } from "src/global/model";
import theme from "src/Theme/Theme";

export const Menu = (): JSX.Element => {
  const [pickedCategory, setPickedCategory] =
    useState<ProductCategories>("all");
  const [productsToShow, setProductsToShow] = useState<Product[]>(products);

  const location = useLocation();

  const setProducts = (category: string) => {
    if (category === "all") {
      setProductsToShow(products);
      return;
    }
    setProductsToShow(
      products.filter((product) => product.category === category)
    );
  };

  useEffect(() => {
    setProducts(pickedCategory);
  }, [pickedCategory]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setPickedCategory(category);
      setProducts(category);
    }
  }, [location.search]);

  const allLabel = "Wszystkie";

  const handleChangeCategory = (category: ProductCategories) => {
    setPickedCategory(category);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" rowGap={1} flexWrap="wrap" mb={2}>
          {Object.entries(categoriesNames).map(([key, value]) => (
            <Box px={1}>
              <Chip
                variant="outlined"
                onClick={() => handleChangeCategory(value)}
                sx={{
                  textTransform: "capitalize",
                  bgcolor:
                    value === pickedCategory
                      ? theme.palette.primary.main
                      : "default",
                  color: value === pickedCategory ? "white" : "black",
                  cursor: "pointer",
                }}
                label={value === "all" ? allLabel : value}
              />
            </Box>
          ))}
        </Stack>
        <Typography variant="caption">
          Znaleziono {productsToShow.length} wyników.
        </Typography>
      </Grid>
      {productsToShow.map((product) => (
        <ProductItem data={product} key={product.name} />
      ))}
      {productsToShow.length < 1 && <EmptyStateComponent />}
    </Grid>
  );
};
