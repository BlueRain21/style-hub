import CategoryForm from "../../component/CategoryForm";
import HeaderText from "../../component/HeaderText";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import postAPI from "../../api/postAPI";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import getAPI from "../../api/getAPI";


const AddCatogory = () =>{
    const [display, setDisplay] = useState("none");
    const dispatch = useDispatch();

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const handleFormSubmit = (values)=>{
        console.log("submit");
        postAPI("category", values)
        .then(response =>{
            console.log(response);
            setDisplay("flex");
        })
        .catch(e=>{
            console.error(e);
        })
    }

      // category data
   useEffect(()=>{
    getAPI("category")
    .then(response=> {
      dispatch({type: "UPDATE CATEGORY DATA", payload: response.data});
    })
    .catch(error=>{
      console.error(error)
    });
  }, [display]);


    return (
        <Box m="50px 30px" width="75%">
            <HeaderText title="Add Category" description="Create or Add categories here"/>
            <CategoryForm handleFormSubmit={handleFormSubmit} display={display} text="Category Added Successfully"/>
        </Box>
    )
}

export default AddCatogory;