import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box } from "@mui/material";

const HighlightBg = ({ children, bg, accent, style, lightAccent }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        background: `linear-gradient(45deg,${colors.grey[800]} 55%, ${lightAccent})`,
        ...style,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box
        width="100%"
        height="100%"
        sx={{
          ...style,
          position: "absolute",
          top: 0,
          left: 0,
          background: bg,
          transform: "scaleX(0.995) scaleY(0.99)",
          overflow: "hidden"
          }}

      >
        <Box
        sx={{
          width:"200px",
          height: "200px",
          position: "absolute",
          top: "-200px",
          right: "-200px",
          boxShadow: `0px 0px 120px 100px ${accent} `,
          transform: "rotate(45deg)"
        }}
      ></Box>
      </Box>

      

      <Box sx={{
        position: "relative",
        zIndex: 3
      }}>
      {children}
      </Box>
    </Box>
    
  );
};

export default HighlightBg;
