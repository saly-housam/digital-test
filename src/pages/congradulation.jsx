
import {Box, Button, Typography } from "@mui/material";


const CongradulationPage = () => {
  return (
    <Box className="congradulation">
        <Box className="innerBox">
            <Box className="backgroundBox">
            </Box>
            <Box className="congradPage">
            <img src="../../public/images/congrad.png" />
            </Box>
            <Box>
            <span>Congradulations!</span>
            <Typography>You Get 20% Total Bill</Typography>
            </Box>
            <Box className="middleBox">
                <img src="../../public/images/logoFirly.png" />
                <span>FireFly Burgur</span>
                <Typography>Reference Number</Typography>
                <span>A-00-000000000</span>
            </Box>
            

        </Box>
        <Button>Done</Button>
       
     
      
    </Box>
  );
};

export default CongradulationPage;
