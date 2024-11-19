import { Box,Button, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ButtonComponent = ({ text, type="" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      style={{
        marginLeft: "3px",
        marginTop: "15px",
        background: colors.greenAccent[500],
        width: "fit-content",
        cursor: "pointer",
        padding: 0,
        border: "none"
      }}
      type={type}
    >
      <Button
        sx={{
          background: colors.primary[900],
          padding: "10px 20px",
          borderRadius: "2px",
          width: "fit-content",
          transform: "translate(-2px,-2px)",
          transition: "all 0.3s",
          color: theme.palette.mode== "dark"? "white !important": "black !important",
          ":hover": {
            transform: "translate(-1px, -1px)",
            background: colors.primary[900]
          },
          textTransform: "uppercase",
          fontWeight: 600,
        }}
        type={type}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
