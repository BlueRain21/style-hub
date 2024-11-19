import { useSelector } from "react-redux";
import { Box, Backdrop, Modal, Fade, Button, Typography, useTheme, IconButton } from "@mui/material";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import HeaderText from "../../component/HeaderText";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import ViewCategoryModal from "./ViewCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import getAPI from "../../api/getAPI";
import deleteAPI from "../../api/deleteAPI";
import { useDispatch } from "react-redux";


// icon
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EditIcon from "@mui/icons-material/Edit";










const Category = () => {
    const [openView, setViewOpen]= useState(false);
    const [openEdit, setEditOpen] = useState(false);
    const [row1, setRow1] = useState({});
    const [update, setUpdate] = useState(1);
    const dispatch = useDispatch();


    const [display, setDisplay] = useState("none");


    const deleteRow = (row)=>{
      if(window.confirm(`Do you want to permanently delete ${row.name}`) == true){
        deleteAPI(`category/${row.id}`)
        .then(response=>{
          console.log(response);
          setUpdate(d=> d+1)
        })
        .catch(e=>{console.error(e)})
      }
      
    }


  const category = useSelector((data) => data.categoryData);
//   console.log(category);

const theme = useTheme();



  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.1,
    },
    {
      field: "name",
      type: "text",
      headerName: "Category Name",
      flex: 0.4,
    },
    {
      field: "image",
      headerName: "Image",
  
      renderCell: (params) => (
        <Box
          width="40px"
          height="40px"
          sx={{
            borderRadius: "50%",
            backgroundImage: `url(${params.value})`,
            backgroundSize: "cover"
          }}
        ></Box>
      ),
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: 'actionButton',
      headerName: 'Actions',
      description: 'Actions column.',
      sortable: false,
      flex: 0.3,
      headerAlign: "center",
      align: "center",
      renderCell: (params)=>{
        return (
          <>
            <IconButton onClick={()=>{setRow1(params.row);setViewOpen(true)}} ><VisibilityIcon/></IconButton>
          <IconButton onClick={()=>{setRow1(params.row); setEditOpen(true); setDisplay("none")}}>
            <EditIcon/>
          </IconButton>
          <IconButton onClick={()=>{deleteRow(params.row)}}><DeleteIcon/></IconButton>
          </>
        )
      }
      
    },
  ];






  // category data
  useEffect(() => {
    getAPI("category")
      .then((response) => {
        dispatch({ type: "UPDATE CATEGORY DATA", payload: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);
  

  return (
    <Box
      m="50px 30px"
      height= "69vh"
      sx={{
        " .header-center .MuiDataGrid-columnHeaderTitleContainer": {
          justifyContent: "center",
        },
        ".MuiButton-text":{
          color: theme.palette.mode === "dark"? "white": "black",
        }
      }}
    >
      <HeaderText
        title="Category"
        description="View, Edit and Delete Category"
      />
      <DataGrid
        columns={columns}
        rows={category}
        pageSizeOptions={[5, 8, 10, 25]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        
      />



      <ViewCategoryModal row={row1} open={openView} setOpen={setViewOpen}/>
      <EditCategoryModal row={row1} open={openEdit} setOpen={setEditOpen} setUpdate={setUpdate} display={display} setDisplay={setDisplay} />
    </Box>
  );
};

export default Category;
