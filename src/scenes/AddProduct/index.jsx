import HeaderText from "../../component/HeaderText";
import { Box } from "@mui/material";
import ProductForm from "../../component/ProductForm";
import { useState } from "react";
import postAPI from "../../api/postAPI";
import { useDispatch } from "react-redux";
import getAPI from "../../api/getAPI";

const AddProduct = () =>{
    const [display, setDisplay] = useState("none");
    const dispatch = useDispatch();

    const handleFormSubmit = (values)=>{
        alert(JSON.stringify(values, null, 2));
        postAPI(`category/${values.categoryId}/product`, values)
        .then(response=>{
            console.log(response);
            getAPI('product').then((response)=>{
                dispatch({type:"UPDATE PRODUCT DATA", payload: response.data})
            })
            setDisplay("flex");
        })
        .catch(error=>{
            console.error(error)
        })
    }



    return (
        <Box sx={{margin: "50px 30px"}}>
            <HeaderText title="Add Product" description="Create or add product here" />
            <ProductForm handleFormSubmit={handleFormSubmit} display={display} text="Product Added Successfully"/>
        </Box>
    )
}

export default AddProduct;