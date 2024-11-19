import { Css } from "@mui/icons-material";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Route, Routes } from "react-router-dom";

import Login from "./scenes/Login";
import PrivateRoute from "./scenes/PrivateRoute";
import Dashboard from "./scenes/Dashboard";
import Category from "./scenes/Category";
import AddCatogory from "./scenes/AddCategory";
import Product from "./scenes/Product";
import AddProduct from "./scenes/AddProduct";


import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            <Route path="/category" >
              <Route index element={<Category/>}/>
              <Route path="add" element={<AddCatogory/>}/>
            </Route>

            <Route path="/product">
              <Route index element={<Product/>}/>
              <Route path="add" element={<AddProduct/>}/>
            </Route>
            
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </Provider>
  );
}

export default App;
