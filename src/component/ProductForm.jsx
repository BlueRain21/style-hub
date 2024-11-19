import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import {
  TextField,
  Button,
  useTheme,
  Box,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { tokens } from "../theme";
import ButtonComponent from "./ButtonComponent";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";



const ProductForm = ({ handleFormSubmit, display, data, text }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const categoryData = useSelector((data) => data.categoryData);



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
    material: yup.string().required("Material is required"),
    price: yup.number().required("Product Price is required"),
    discount: yup.number().max(100, "Discount cannot be greater than 100"),
    quantitySold: yup.number().required("Sold Quantity Required"),
    totalRevenue: yup.number(),
    tags: yup.string(),
    avgRating:yup.number().max(5, "Rating cannot be greater than 5").required("Product Rating is required"),
    categoryId: yup.mixed().oneOf(categoryData.map(d=>d.id)).required("Select a category"),
    
  });




  const formik = useFormik({
    initialValues: data
      ? {
          name: data.name,
          description: data.description,
          image: data.image,
          material: data.material,
          price: data.price,
          discount: data.discount,
          quantitySold: data.quantitySold,
          totalRevenue: data.totalRevenue,
          tags: data.tags,
          avgRating: data.avgRating,
          categoryId: data.categoryId,
        }
      : {
          name: "",
          description: "",
          image: "",
          material: "",
          price: "",
          discount: "",
          quantitySold: "",
          totalRevenue: "",
          tags: "",
          avgRating:"",
          categoryId: "",
        },
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              component="fieldset"
              sx={{
                padding: "15px",
                color: colors.greenAccent[500],
                borderColor: colors.greenAccent[500],
              }}
            >
              <legend>Product Information</legend>
              <Box display="flex">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Product Name"
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
                  label="Product Image"
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
                label="Product Description"
                type="text"
                color="secondary"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{
                  marginBottom: "10px",
                }}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />

              <Box display="flex">
                <TextField
                  fullWidth
                  id="material"
                  name="material"
                  label="Product Material"
                  type="text"
                  color="secondary"
                  value={formik.values.material}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{
                    marginRight: "10px",
                  }}
                  error={
                    formik.touched.material && Boolean(formik.errors.material)
                  }
                  helperText={formik.touched.material && formik.errors.material}
                />

                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  label="Product Price"
                  type="number"
                  color="secondary"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{
                    marginRight: "10px",
                  }}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                  helperText={formik.touched.price && formik.errors.price}
                />

                <TextField
                  fullWidth
                  id="discount"
                  name="discount"
                  label="Product Discount"
                  type="number"
                  color="secondary"
                  value={formik.values.discount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.discount && Boolean(formik.errors.discount)
                  }
                  helperText={formik.touched.discount && formik.errors.discount}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box
              component="fieldset"
              sx={{
                padding: "15px",
                color: colors.greenAccent[500],
                borderColor: colors.greenAccent[500],
              }}
            >
              <legend>Product Category</legend>
              <FormControl
                fullWidth
                sx={{
                  ".css-130wpdz-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    { 
                        color: colors.greenAccent[500], 
                    background: theme.palette.mode === "dark" ? colors.black[500] : "#fcfcfc !important",
                    paddingRight: "5px"
                    },

                    ".css-1oqym2r-MuiFormLabel-root-MuiInputLabel-root":{
                        background: theme.palette.mode === "dark" ? colors.black[500]+" !important" : "#fcfcfc !important",   
                    }
                }}
                error={formik.errors.categoryId && formik.touched.categoryId? "true":null}
              >
                <InputLabel id="categoryId-label">
                  Product Category
                </InputLabel>
                <Select
                  labelId="categoryId-label"
                  id="categoryId"
                  value={formik.values.categoryId}
                  // color="secondary"
                  label="categoryId"
                  // name="categoryId"
                  onChange={formik.handleChange("categoryId")}
                >
                
                  {categoryData.map((data) => (
                    <MenuItem key={`cat${data.id}`} value={data.id} >
                      {data.name}
                    </MenuItem>
                  ))}
                </Select>

                <small style={{margin: "3px 14px 0px", display: "block", color: "red"}}>{formik.errors.categoryId && formik.touched.categoryId && formik.errors.categoryId} </small>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Box
              component="fieldset"
              sx={{
                padding: "15px",
                color: colors.greenAccent[500],
                borderColor: colors.greenAccent[500],
              }}
            >
              <legend>Sales Information</legend>
              <Box display="flex">
              <TextField
                  fullWidth
                  id="quantitySold"
                  name="quantitySold"
                  label="Quantity Sold"
                  type="number"
                  color="secondary"
                  value={formik.values.quantitySold}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{
                    marginRight: "10px"
                  }}
                  error={
                    formik.touched.quantitySold && Boolean(formik.errors.quantitySold)
                  }
                  helperText={formik.touched.quantitySold && formik.errors.quantitySold}
                />
                <TextField
                  fullWidth
                  id="totalRevenue"
                  name="totalRevenue"
                  label="Total Revenue"
                  type="number"
                  color="secondary"
                  value={formik.values.totalRevenue = formik.values.price * (formik.values.quantitySold - (formik.values.quantitySold*(formik.values.discount/100)))
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.totalRevenue && Boolean(formik.errors.totalRevenue)
                  }
                  helperText={formik.touched.totalRevenue && formik.errors.totalRevenue}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box component="fieldset" sx={{padding: "20px", color: colors.greenAccent[500], borderColor: colors.greenAccent[500]}}>
                <legend>Additional Information</legend>
                

                <Box display="flex">
                <TextField
                  fullWidth
                  id="tags"
                  name="tags"
                  label="Tags"
                  type="text"
                  color="secondary"
                  value={formik.values.tags}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{
                    marginRight: "10px"
                  }}
                  error={
                    formik.touched.tags && Boolean(formik.errors.tags)
                  }
                  helperText={formik.touched.tags && formik.errors.tags}
                />
                <TextField
                  fullWidth
                  id="avgRating"
                  name="avgRating"
                  label="avgRating"
                  type="number"
                  color="secondary"
                  value={formik.values.avgRating}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{
                    marginRight: "10px"
                  }}
                  error={
                    formik.touched.avgRating && Boolean(formik.errors.avgRating)
                  }
                  helperText={formik.touched.avgRating && formik.errors.avgRating}
                />
                </Box>
                <small style={{color: colors.black[200]}}> Separate each tag with comma between them</small>
                <small style={{color: colors.black[200]}}> eg: black, cotton, jeans</small>

            </Box>

          </Grid>


        </Grid>

        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          style={{ display: display, marginTop: "20px" }}
        >
          {text}
        </Alert>
        <ButtonComponent text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
