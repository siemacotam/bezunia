import { FormikProvider, useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import { FormValues } from "./ContactForm.model";
import { infoAlert, initValues, validationSchema } from "./ContactForm.const";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: initValues,
    validationSchema,
    onSubmit: () => {},
  });

  const {
    handleBlur,
    handleChange,
    values: { title, name, email, message },
    touched,
    errors,
  } = formik;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    if (!title || !name || !email || !message) {
      setInfo("MISSING");
      return;
    }
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lkksa9m",
        "template_416z4ul",
        e.currentTarget,
        "user_zigbQOKf4glqHQVOsVBIa"
      )
      .then(
        (result) => {
          setInfo("OK");
          formik.resetForm();
        },
        (error) => {
          setInfo("ERROR");
        }
      );
    setLoading(false);
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={sendEmail}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              value={title}
              label="Temat"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="email"
              type="email"
              label="Email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="name"
              label="Imię"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="message"
              multiline
              minRows={3}
              label="Wiadomość"
              value={message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            {info && infoAlert(info)}
          </Grid>
          <Grid item xs={12}>
            <Button disabled={loading} variant="contained" type="submit">
              Wyślij
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormikProvider>
  );
};
