import { useTheme, Modal, Box, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';


// icon
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ViewProductModal = ({ open, handleClose, data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const categoryData = useSelector(d=> d.categoryData);
  const {salesRecord} = data;


  
  // https://purecatamphetamine.github.io/country-flag-icons/3x2/.svg

  const columns = [{
    field: "id",
    headerName : "ID",
  },{
    field: "customerName", 
    headerName : "Customer Name",
    align: "center",
    headerAlign: "center",
    flex: 1
  },{
    field: "country",
    headerName: "Country",
    align: "center",
    headerAlign: "center",
    renderCell : (params)=>(
      <Box sx={{display:"flex", justifyContent: "center", "alignItems": "center", height: "100%"}}>
        <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${params.value}.svg`} width="50%" style={{marginRight: "10px"}}/>
        <p>{params.value}</p>
      </Box>
    )
  },{
    field: "quantitySold",
    headerName: "Quantity Sold",
    type:"number",
    align: "center",
    headerAlign: "center"
  }]

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 8,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseRoundedIcon sx={{position: "absolute", top: "25px", right: "25px", cursor: "pointer", fontSize: "20px"}} onClick = {handleClose}/>
        <Typography
          id="modal-modal-title"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          Text in a modal {data.name}
        </Typography>
        <Box
          id="modal-modal-description"
          sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
        >
          {/* <img src={data.image} style={{ width: "25%" }} /> */}
          <Box width="100%">
          <img src={data.image} style={{ width: "24%", float: "left", marginRight: "20px" }} />

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                variant="h4"
                sx={{ marginRight: "10px", color: colors.greenAccent[500] }}
              >
                {data.discount}%
              </Typography>
              <Typography variant="h3">
                ₹{data.price - data.price * data.discount * 0.01}
              </Typography>
            </Box>

            <small style={{ color: "grey" }}>
              M.R.P.:{" "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{data.price}
              </span>
            </small>

            <Typography sx={{paddingTop: "20px"}}><b>Material: </b>{data.material}</Typography>
            <Typography><b>Category: </b>{categoryData.find(a=> a.id === data.categoryId)?.name}</Typography>
            <Typography><b>Quantity Sold: </b>{data.quantitySold}</Typography>
            <Typography><b>Average Rating: </b>{data.avgRating}</Typography>
            <Typography><b>Total Revenue: </b>₹{data.totalRevenue}</Typography>
            <Typography><b>Tags: </b>{data.tags}</Typography>




            <Box
              sx={{
                fontSize: "13px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 5,
                paddingTop: "10px"
              }}
            >
              {data.description}
            </Box>
          </Box>
        </Box>
        

        <Typography variant="h4"
          sx={{
            m: "auto",
            width: "fit-content",
            mt: "20px",
            textAlign: "center",
            "::after":{
              content: "''",
              display: "block",
              width: "100%",
              height: "1px",
              backgroundColor: colors.greenAccent[500],
              mb: "10px"
            }
          }}
        > Sales Record</Typography>


        <Box width="100%" height="250px">
          <DataGrid columns={columns} rows={salesRecord} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ViewProductModal;













