import loginAPI from "../../api/loginAPI";
import { useTheme, Box, Typography, Button, TextField } from "@mui/material";
import { tokens } from "../../theme";
import LogoComponent from "../../component/LogoComponent";
import HighlightBg from "../../component/HighlightBg";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Box width="380px" textAlign="center">
        <HighlightBg
          bg={colors.primary[800]}
          accent={colors.greenAccent[800]}
          lightAccent={colors.greenAccent[500]}
          style={{ p: "30px", borderRadius: "15px" }}
        >
          <LogoComponent width="200" />

          {/* Login Form */}
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={Yup.object({
              username: Yup.string().min(3, "Username too short").required("Username is required"),
              password: Yup.string().required("Password is required")
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                loginAPI(values)
                .then(response =>{
                  sessionStorage.setItem("token", response.data.token);
                  sessionStorage.setItem("id", response.data.id);
                  setFormError("");
                  navigate("/dashboard");
                })
                .catch(error=>{
                  console.log(error);
                  setFormError("Username or Password is incorrect")
                })
                setSubmitting(false);


              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                {/* <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /> */}
                <TextField
                  error={errors.username && touched.username && errors.username}
                  label="Username"
                  type="text"
                  variant="standard"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  fullWidth
                  sx={{
                    ":focus":{
                      background: "transparent"
                    },
                    m:"5px 0px"
                  }}
                />
                <small style={{color: "red"}}>{errors.username && touched.username && errors.username}</small>

                <TextField
                  error={errors.password && touched.password && errors.password}
                  fullWidth
                  label="Password"
                  type="password"
                  variant="standard"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  sx={{
                    ":focus":{
                      background: "transparent"
                    },
                    m: "5px 0px"
                  }}
                />
                <small style={{color: "red"}}>{errors.password && touched.password && errors.password}</small>

                <small style={{color: "red"}}>{formError}</small>

                <Box>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    m: "10px 0px 0 0",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Submit
                </Button>
                </Box>
              </form>
            )}
          </Formik>


        </HighlightBg>
      </Box>
    </Box>
  );
};

export default Login;
