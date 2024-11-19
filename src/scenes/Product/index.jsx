import HeaderText from "../../component/HeaderText";
import { tokens } from "../../theme";
import { useTheme, Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";


// component
import ViewProductModal from "./ViewProductModal";
import deleteAPI from "../../api/deleteAPI";
import getAPI from "../../api/getAPI";
import EditProductModal from "./EditProductModal";

// icon
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EditIcon from "@mui/icons-material/Edit";

const Product = () => {
  // data
  const [data, setData] = useState({})
  const [update, setUpdate] = useState(1);
  const [display, setDisplay] = useState("none");


  // View modal
  const [openView, setOpenView] = useState(false);
  const handleViewOpen = () => {
    setOpenView(true);
  };
  const handleViewClose = () => {
    setOpenView(false);
  };

  // Edit Modal
  const [openEdit, setOpenEdit] = useState(false);
  const handleEditOpen = () =>{ setOpenEdit(true) };
  const handleEditClose = () =>{ setOpenEdit(false)};


  const handleDelete = (cid, pid, pname) =>{
    // alert(`category/${cid}/product/${pid}`);
    const a = window.confirm(`Do you want to delete ${pname} ?`);
    if(a === true){
      deleteAPI(`category/${cid}/product/${pid}`).then(r=>{
        setUpdate(a=>a+1);
      })
    }
  }


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  const productData = useSelector((d) => d.productData);
  const categoryData = useSelector((d) => d.categoryData);
  const dispatch = useDispatch();
  // console.log(productData);

  
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 0.2,
      renderCell: (params) => (
        <Box
          width="40px"
          height="40px"
          sx={{
            borderRadius: "50%",
            backgroundImage: `url(${params.value})`,
            backgroundSize: "cover",
          }}
        ></Box>
      ),
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 0.3,
      renderCell: (params) =>
        categoryData.find((a) => a.id === params.value).name,
    },
    {
      field: "material",
      headerName: "Material",
      // flex: 0.3
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.1,
    },
    {
      field: "discount",
      headerName: "Discount",
      flex: 0.1,
    },
    {
      field: "quantitySold",
      headerName: "Sold",
      flex: 0.1,
    },
    {
      field: "totalRevenue",
      headerName: "Total Revenue",
      flex: 0.1,
    },
    {
      field: "avgRating",
      headerName: "Average Rating",
      flex: 0.1,
    },
    {
      field: "tags",
      headerName: "Tags",
      flex: 0.3,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 0.4,
    },
    {
      field: "actionButton",
      headerName: "Actions",
      description: "Actions column",
      sortable: false,
      flex: 0.4,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <IconButton onClick={()=>{handleViewOpen(); setData(params.row)}}>
              <VisibilityIcon />
            </IconButton>

            <IconButton onClick={()=>{
              handleEditOpen();
              setData(params.row);
              setDisplay("none");
            }}>
              <EditIcon />
            </IconButton>

            <IconButton onClick={()=>{
                handleDelete(params.row.categoryId, params.row.id, params.row.name)
              }}>
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];




  useEffect(()=>{
    getAPI('product')
    .then(r=>{
      dispatch({type: "UPDATE PRODUCT DATA", payload: r.data})
    })
  }, [update]);

  return (
    <Box
      m="50px 30px"
      height="69vh"
      sx={{
        " .header-center .MuiDataGrid-columnHeaderTitleContainer": {
          justifyContent: "center",
        },
        ".MuiButton-text": {
          color: theme.palette.mode === "dark" ? "white" : "black",
        },
      }}
    >
      <HeaderText title="Product" description="View, Edit or Delete product" />
      <DataGrid
        columns={columns}
        rows={productData}
        initialState={{
          columns: {
            columnVisibilityModel: {
              totalRevenue: false,
              avgRating: false
            },
          },
        }}

        slots={{ toolbar: GridToolbar }}
      />

      <ViewProductModal open = {openView} handleClose= {handleViewClose} data={data}/>

      <EditProductModal open={openEdit} handleClose={handleEditClose} data={data} setUpdate={setUpdate} display={display} setDisplay={setDisplay} />
    </Box>
  );
};

export default Product;
