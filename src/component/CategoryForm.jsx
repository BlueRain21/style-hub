import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, useTheme, Box, Alert } from "@mui/material";
import { tokens } from "../theme";
import ButtonComponent from "./ButtonComponent";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
  name: yup.string().required("Category Name is required"),
  description: yup.string().required("Category Description is required"),
  image: yup
    .string()
    .matches(
      /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,
      "Correct Image URL is required"
    )
    .required("Category Image is required"),
});

const CategoryForm = ({handleFormSubmit, display, data, text}) => {
  const theme = useTheme();



  const formik = useFormik({
    initialValues: data?{
      name: data.name,
      description: data.description,
      image: data.image
    }:{
      name: "",
      description: "",
      image: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

 

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Box display="flex">
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Category Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="secondary"
              sx={{
                marginBottom: "10px",
                marginRight: "10px",
              }}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="image"
              name="image"
              label="Category Image"
              type="text"
              color="secondary"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={{
                marginBottom: "10px",
              }}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
            />
          </Box>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Category Description"
            type="text"
            color="secondary"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              marginBottom: "10px",
            }}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Box>

        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" style={{display: display}}>
         {text}
        </Alert>
        <ButtonComponent text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default CategoryForm;
