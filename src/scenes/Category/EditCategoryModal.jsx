import { Box, Button, Typography, Modal } from "@mui/material";
import { useState, useEffect , useMemo} from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CategoryForm from "../../component/CategoryForm";
import putAPI from "../../api/putAPI";



const EditCategoryModal = ({ row, setUpdate, open,setOpen, display, setDisplay }) => {
  // const [display, setDisplay] = useState("none");


  const handleFormSubmit = (values) => {

    putAPI("category/"+row.id, values)
      .then((response) => {
        setDisplay("flex");
        setUpdate(d=> d+1);
      })
      .catch((e) => {
        console.error(e);
      });
  };


  // const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: "50px",
  };

  return (
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Upate <b>{row.name}</b> Category
          </Typography>
          <CloseRoundedIcon
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
          
          <Box mt="20px">
          <CategoryForm data={row} handleFormSubmit={handleFormSubmit} display={display} text="Category Updated Successfully"/>
          </Box>
        </Box>
      </Modal>
    
  );
};

export default EditCategoryModal;



