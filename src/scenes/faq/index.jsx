import {Box, useTheme,Typography} from '@mui/material';
import Header from '../../components/Header';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const {primary} = tokens(theme.palette.mode);
     return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={primary?.greenAccent?.[500]} variant="h5">
                        What is the best thing about Switzerland?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I don't know, but the flag is a big plus! 
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={primary?.greenAccent?.[500]} variant="h5">
                        What is the city of Zambia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I don't know, but the flag is a green and red! 
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={primary?.greenAccent?.[500]} variant="h5">
                        What is the best thing about Switzerland?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I don't know, but the flag is a big plus! 
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={primary?.greenAccent?.[500]} variant="h5">
                        What is the best thing about Switzerland?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I don't know, but the flag is a big plus! 
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={primary?.greenAccent?.[500]} variant="h5">
                        What is the best thing about Switzerland?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I don't know, but the flag is a big plus! 
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={primary?.greenAccent?.[500]} variant="h5">
                        What is the best thing about Switzerland?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I don't know, but the flag is a big plus! 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
     )

}

export default FAQ;