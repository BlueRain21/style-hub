import lightLogo from "../images/lightLogo.png";
import darkLogo from "../images/darkLogo.png";
import { useTheme } from "@emotion/react";

const LogoComponent = ({width})=>{
    const theme = useTheme();

    return (
        <img src={theme.palette.mode === "dark"? darkLogo: lightLogo} width={width} loading="lazy"/>
    )

}   

export default LogoComponent;