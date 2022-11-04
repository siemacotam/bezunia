import { Alert } from "@mui/material";
import * as Yup from "yup";

export const initValues = {
  email: "",
  name: "",
  message: "",
  title: "",
};

export const validationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    name: Yup.string().required("This field is required!"),
    message: Yup.string().required("This field is required!"),
    title: Yup.string().required("This field is required!"),
  });
};

const messages = {
  success: "Wiadomość wysłano. Dziękujemy",
  error: "Coś poszło nie tak. Przepraszamy",
  missingData: "Prosze uzupełnić wszystkie dane",
};

const getMessage = (status: string) => {
  switch (status) {
    case "OK":
      return messages.success;
    case "ERROR":
      return messages.error;
    case "MISSING":
      return messages.missingData;
    default:
      return "";
  }
};

export const infoAlert = (status: string) => {
  const variant = status === "OK" ? "success" : "error";
  const message = getMessage(status);

  return <Alert severity={variant}>{message}</Alert>;
};
