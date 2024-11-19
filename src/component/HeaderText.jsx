import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";


const HeaderText = ({title, description}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.tokens);

    return (
        <Box mb="30px">
            <Typography variant="h2" fontWeight={700}>{title}</Typography>
            <Typography variant="h6" fontWeight={500} color={colors.greenAccent[400]}>{description}</Typography>
        </Box>
    )
}


export default HeaderText;