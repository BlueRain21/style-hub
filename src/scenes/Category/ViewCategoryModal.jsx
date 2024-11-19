import { useState } from "react";
import { Box,Backdrop, Modal, Fade, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const ViewCategoryModal = ({row, open, setOpen}) =>{
    // const [open, setOpen] = useState(false);
    const handleViewOpen = () => setOpen(true);
    const handleViewClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


    return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleViewClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h3" component="h2" p="10px">
                {row.name} 
              </Typography>
              <CloseRoundedIcon
                sx={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    cursor: "pointer"
                }}
                onClick= {handleViewClose}
              />
              <Box display="flex" p="10px">
                <img src={row.image} width="25%" style={{borderRadius: "10px"}}/>
                <Typography variant="p" ml="20px">{row.description}</Typography>
              </Box>
            </Box>
          </Fade>
        </Modal>
      
    )
}


export default ViewCategoryModal;