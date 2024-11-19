import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SideBar from "../global/SideBar";
import TopBar from "../global/TopBar";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


// API
import getUser from "../../api/getUserAPI";


const PrivateRoute = () =>{
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const id= sessionStorage.getItem("id");

    // React pro sidebar settings
    const [collapse, setCollapse] = useState(false);


    useEffect(()=>{
        if(id){
            getUser(id)
            .then(response=>{
                dispatch({type:"UPDATE USER DATA", payload: response.data})
            })
            .catch(e=>{
                console.error(e);
            })
            
        }else{
            navigate("/login");
        }
    },[id]);

    return(
        <Box>
            <TopBar setCollapse={setCollapse} collapse={collapse} />
            <Box 
             display="flex"
             justifyContent="space-between"
             height="93vh"
            >
                <SideBar setCollapse={setCollapse} collapse={collapse} />
                <div className="content" style={{
                    minWidth: "80%",
                    maxWidth: "100%"
                }}>
                    <Box  height="93.2vh" sx={{overflowY: "scroll"}}>
                    {token? <Outlet/>: <Navigate to={"/login"}/>}
                    </Box>
                </div>
            </Box>
        </Box>
    )
}

export default PrivateRoute;