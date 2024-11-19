import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { tokens } from "../../theme";
import { useTheme, Box, Typography, IconButton, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// icon
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";

const SideBar = ({ collapse }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const userData = useSelector((data) => data.userData);

  return (
    <Box
      style={{
        display: "flex",
        height: "100%",
        minHeight: "92.5vh",
      }}
    >
      <Sidebar
        collapsed={collapse}
        backgroundColor={colors.black[900]}
        style={{
          border: "none",
        }}
        rootStyles={{
          " .ps-submenu-content .ps-menu-button": {
            backgroundColor: colors.black[900] + " !important",
          },
          " .ps-menu-button:hover": {
            color: colors.greenAccent[500] + " !important",
            background: "none !important",
          },
          " .ps-submenu-content .ps-menu-button:hover": {
            color: colors.greenAccent[500] + " !important",
            backgroundColor: colors.black[900] + " !important",
          },
          " .active": {
            color: colors.greenAccent[500] + " !important",
          },
          ...(collapse
            ? {
                " .ps-submenu-expand-icon": {
                  display: "none",
                },
                " .ps-menu-button": {
                  padding: "0px !important",
                },
              }
            : {}),
        }}
      >
        <Menu style={{ padding: "20px", position: "relative" }}>
          <Box
            display={collapse ? "none" : "flex"}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              alt={`${userData.firstName} ${userData.lastName}`}
              src={userData.image}
              sx={{
                width: "75px",
                height: "75px",
              }}
            />
            <Typography variant="h3">
              {userData.firstName} {userData.lastName}
            </Typography>
            <Typography variant="h5">{userData.role}</Typography>
          </Box>

          <MenuItem
            icon={<HomeOutlinedIcon />}
            component={<NavLink to="/dashboard" />}
          >
            Dashboard
          </MenuItem>

          <SubMenu
            defaultOpen
            label="Category"
            component="div"
            icon={<CategoryRoundedIcon />}
          >
            <MenuItem
              icon={<ViewListIcon />}
              component={<NavLink to="/category" />}
            >
              Category List
            </MenuItem>

            <MenuItem
              icon={<AddIcon />}
              component={<NavLink to="/category/add" />}
            >
              Add Category
            </MenuItem>
          </SubMenu>

          <SubMenu
            defaultOpen
            label="Product"
            component="div"
            icon={<InventoryIcon />}
          >
            <MenuItem
              icon={<ViewListIcon />}
              component={<NavLink to="/product" />}
            >
              Product List
            </MenuItem>

            <MenuItem
              icon={<AddIcon />}
              component={<NavLink to="/product/add" />}
            >
              Add Product
            </MenuItem>
          </SubMenu>
          
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
