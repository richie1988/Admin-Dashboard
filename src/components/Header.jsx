import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

import React from 'react'

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const { primary } = tokens(theme.palette.mode);
    return (
        <Box m="30px"> {/* Corrected from mg to m */}
            <Typography variant="h2" color={primary?.grey?.[100]} fontWeight="bold" sx={{ mb: "5px" }}>
                {title}
            </Typography>
            <Typography variant="h5" color={primary?.greenAccent?.[400]}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header
