import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import theme from "src/Theme/Theme";
import { GalleryDialog } from "../GalleryDialog/GalleryDialog";
import { OfferItemProps } from "./OfferItem.model";

export const OfferItem = ({
  data: { name, img, description },
}: OfferItemProps) => {
  const [dialogCategory, serDialogCategory] = useState("");

  const setCategory = (category: string) => {
    serDialogCategory(category);
  };

  const handleClose = () => {
    serDialogCategory("");
  };

  return (
    <Grid item xs={12} p={2}>
      <Card variant="outlined">
        <CardContent>
          <Stack direction="row" flexWrap="wrap">
            <Box width="200px">
              <Box component="img" width="100%" src={img} alt={name} />
            </Box>
            <Stack sx={{ ml: { md: 5 } }}>
              <Box flexGrow={1}>
                <Typography
                  sx={{ fontFamily: theme.typography.h5 }}
                  variant="h5"
                  component="h2"
                >
                  {name}
                </Typography>
                <Typography variant="caption">{description}</Typography>
              </Box>
              <Button variant="outlined" onClick={() => setCategory(name)}>
                Sprawdź realizację
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      {dialogCategory && (
        <GalleryDialog category={dialogCategory} handleClose={handleClose} />
      )}
    </Grid>
  );
};
