import { useTheme, Modal, Typography, Box } from "@mui/material";
import { tokens } from "../../theme";
import ProductForm from "../../component/ProductForm";
import { useState } from "react";
import putAPI from "../../api/putAPI";


// icon
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


const EditProductModal = ({ open, handleClose, data, setUpdate, display, setDisplay }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

//   const [display, setDisplay] = useState("none");

  const handleFormSubmit = (values) =>{
    // console.log(values);
    putAPI(`category/${data.categoryId}/product/${data.id}`, values)
    .then((response)=>{
        console.log(response);
        setDisplay("flex");
        setUpdate(a=> a+1)
    })
    .catch((error)=>{
        console.log(error);
    })
  }


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 8,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CloseRoundedIcon 
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            cursor: "pointer"   
          }}
          onClick = {handleClose}
        />
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Update <b>{data.name}</b> 
          </Typography>

          <ProductForm handleFormSubmit={handleFormSubmit} display={display} data={data} text="Product Updated Successfully" />

          
        </Box>
      </Modal>
    </>
  );
};

export default EditProductModal;
