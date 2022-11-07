import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "src/Theme/Theme";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { CategoryItemProps } from "./CategoryItem.model";

export const CategoryItem = ({
  data: { name, img, path, label },
}: CategoryItemProps): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () =>
    navigate({
      pathname: path,
      search: `?category=${name}`,
    });

  if (name === "all") {
    return (
      <Grid item xs={12} md={3}>
        <Card
          onClick={handleNavigate}
          variant="outlined"
          sx={{
            cursor: "pointer",
            height: "100%",
            position: "relative",
            ":hover": {
              boxShadow: 10,
            },
          }}
        >
          <Stack
            rowGap={2}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            height="100%"
          >
            <ArrowCircleRightOutlinedIcon fontSize="large" />
            <Typography
              sx={{ fontFamily: theme.typography.h5 }}
              variant="h5"
              component="h2"
            >
              Sprawdź cały asortyment
            </Typography>
          </Stack>
        </Card>
      </Grid>
    );
  }

  return (
    <Grid item xs={12} md={3}>
      <Card
        onClick={handleNavigate}
        variant="outlined"
        sx={{
          cursor: "pointer",
          height: "100%",
          position: "relative",
          ":hover": {
            boxShadow: 10,
          },
        }}
      >
        <CardMedia component="img" height="200" image={img} alt={name} />
        <CardContent>
          <Typography
            sx={{
              fontFamily: theme.typography.h5,
              textTransform: "capitalize",
            }}
            variant="h5"
            component="h2"
          >
            {label}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
