import CloseIcon from "@mui/icons-material/Close";
import { GalleryDialogProps } from "./GalleryDialog.model";
import {
  Box,
  DialogContent,
  DialogTitle,
  Stack,
  Dialog,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import img from "src/images/img.jpg";

export const GalleryDialog = ({
  category,
  handleClose,
}: GalleryDialogProps) => {
  return (
    <Dialog
      open={Boolean(category)}
      onClose={() => handleClose}
      scroll="paper"
      fullScreen
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxWidth="1200px"
          mx="auto"
        >
          <Typography variant="h5">{category}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <Box mx="auto" maxWidth="1200px">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>{" "}
            <Grid item xs={4}>
              <Box component="img" width="100%" src={img} alt="s" />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
