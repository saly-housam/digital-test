import {  Box } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
export default function  FooterComponent(){
    return(
        <Box class="footerBox">
        <AccountBalanceIcon />
        <DensitySmallIcon />
        <SearchIcon />
        <WhatsAppIcon />

    </Box>

    );
}