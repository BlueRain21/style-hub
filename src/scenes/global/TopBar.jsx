import { Box, IconButton, Avatar, Menu, MenuItem, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import { useContext, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoComponent from "../../component/LogoComponent";
import getAPI from "../../api/getAPI";

// icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const TopBar = ({ setCollapse, collapse }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);

  const userData = useSelector((data) => data.userData);
  const dispatch = useDispatch();

  // Avatar Menu Setting
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Logout
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("id", "");
    navigate("/login");
  };

  // category data
  useEffect(() => {
    getAPI("category")
      .then((response) => {
        dispatch({ type: "UPDATE CATEGORY DATA", payload: response.data });
      })
      .catch((error) => {
        // console.error(error)
      });


    getAPI("product")
      .then((response) => {
        // console.log(response);
        dispatch({ type: "UPDATE PRODUCT DATA", payload: response.data });
      })
      .catch((error) => {
        // console.error(error);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: colors.black[900],
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px 10px 20px",
      }}
    >
      <Stack direction="row" gap={2} alignItems="center">
        <IconButton onClick={() => setCollapse(!collapse)}>
          <MenuRoundedIcon />
        </IconButton>
        <LogoComponent width="70px" />
      </Stack>

      <Stack direction="row" gap={2} alignItems="center">
        <IconButton
          onClick={() => {
            toggleColorMode();
          }}
        >
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        <div>
          <Avatar
            alt={`${userData.firstName} ${userData.lastName}`}
            src={userData.image}
            onClick={handleMenuClick}
            sx={{
              width: "35px",
              height: "35px",
            }}
          />
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
              <Avatar
                alt={`${userData.firstName} ${userData.lastName}`}
                src={userData.image}
                onClick={handleMenuClick}
                sx={{
                  width: "20px",
                  height: "20px",
                  mr: "10px",
                }}
              />
              Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <AccountCircleIcon sx={{ mr: "10px" }} />
              My Account
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ mr: "10px" }} /> Logout
            </MenuItem>
          </Menu>
        </div>
      </Stack>
    </Box>
  );
};

export default TopBar;
