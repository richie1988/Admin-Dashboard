import { Box } from "@mui/material";
import Header from "../../components/header";
import GeographyChart from "../../components/GeographyChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";


const Geography = () => {
    const theme = useTheme();
    const {primary} = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Geography Chart" subtitle="simple Geography Chart" />
            <Box height="75vh" border={`1px solid ${primary?.grey?.[100]}`} borderRadius="4px">
            <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography