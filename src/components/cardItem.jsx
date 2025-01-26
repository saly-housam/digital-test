import * as React from "react";
import {
  Typography,
  DialogTitle,
  Dialog,
  CardMedia,
  CardContent,
  Card,
  Box,
  Button,
  List,
  ListItem,
  Checkbox,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { AddSide } from "../addSide";
import { AddSauce } from "../addSauce";

//   const { open } = props;

//   const handleClose = () => {
//     setOpen(false);
//   }; 

//   return (
//     <Dialog onClose={handleClose} open={open}>
//       <Box class="imgClose" >
//         <img src="/src/assets/food2.png" />
//         <HighlightOffIcon />
       
//       </Box>
//       <Box class="descPopup">
//         <DialogTitle>Prime Beef Tenderloin</DialogTitle>
//         <Typography>
//           Grilled to your preference, served with green beans, garlic mashed
//           potatoes & pepper corn sauce or mushroom sauce
//         </Typography>
//       </Box>
//       <Box class="boxCounter">
//         <span>AED 148</span>
//         <Box class="counter">
//           <RemoveIcon />
//           <span>1</span>
//           <AddIcon />
//         </Box>
//       </Box>
//       <Box class="addSide">
//         <h3>Add Side</h3>
//         <List>
//         {AddSide.map((item) => {
//             return (
//           <ListItem>
//                 <>
//                   <Typography key={item.id}> {item.name} </Typography>
//                   <Box class="checkbox">
//                     <AddIcon />
//                     <span>AED 30</span>
//                     <Checkbox />
//                   </Box>
//                 </>
//           </ListItem>
//               );
//             })}
//         </List>
//       </Box>
//       <Box class="addSide">
//         <h3>Add Sauce</h3>
//         <List>
//         {AddSauce.map((item) => {
//             return (
//           <ListItem>
//                 <>
//                   <Typography key={item.id}> {item.name} </Typography>
//                   <Box class="checkbox">
//                     <AddIcon />
//                     <span>AED 15</span>
//                     <Checkbox />
//                   </Box>
//                 </>
//           </ListItem>
//               );
//             })}
//         </List>
//       </Box>
      
//     </Dialog>
//   );
// }

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
// };

export default function ItemCard(props) {
  const { image, title, description, icon, type } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ display: "flex" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        <CardMedia
          component="img"
          sx={{ width: 160 }}
          image={image}
          alt="Live from space album cover"
        />
        <Box
          sx={{ display: "flex", flexDirection: "column" }}
          class="boxContent"
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div">{title}</Typography>
            {/* {icon ? (<img src={icon} alt="Canvas Logo" class="imgItem" />) : <div class="emptyDiv"></div>} */}
            <Typography class="subDiv" color="text.secondary" component="div">
              {description}
            </Typography>
          </CardContent>
          <Box class="boxCard">
            <span>{type}</span>
            <span>Add To Cart</span>
          </Box>
        </Box>
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </Card>
  );
  function SimpleDialog(props) {
    const [number, setNumber] = React.useState(1);
    const { open } = props;
  
    const handleClose = () => {
      setOpen(false);
    }; 
  
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <Box class="imgClose" >
          <img src="/src/assets/food2.png" />
         
        </Box>
        <Box class="descPopup">
          <DialogTitle>Prime Beef Tenderloin</DialogTitle>
          <Typography>
            Grilled to your preference, served with green beans, garlic mashed
            potatoes & pepper corn sauce or mushroom sauce
          </Typography>
        </Box>
        <Box class="boxCounter">
          <span>AED 148</span>
          <Box class="counter">
          <IconButton onClick={()=> {number>0? setNumber(number-1) : setNumber(number)}}>
            <RemoveIcon />
            </IconButton>
            
            <span> {number} </span>
            <IconButton onClick={()=> {setNumber(number+1)}}>
            <AddIcon />
            </IconButton>
         
          </Box>
        </Box>
        <Box class="addSide">
          <h3>Add Side</h3>
          <List>
          {AddSide.map((item) => {
              return (
            <ListItem>
                  <>
                    <Typography key={item.id}> {item.name} </Typography>
                    <Box class="checkbox">
                      <AddIcon />
                      <span>AED 30</span>
                      <Checkbox />
                    </Box>
                  </>
            </ListItem>
                );
              })}
          </List>
        </Box>
        <Box class="addSide">
          <h3>Add Sauce</h3>
          <List>
          {AddSauce.map((item) => {
              return (
            <ListItem>
                  <>
                    <Typography key={item.id}> {item.name} </Typography>
                    <Box class="checkbox">
                      <AddIcon />
                      <span>AED 15</span>
                      <Checkbox />
                    </Box>
                  </>
            </ListItem>
                );
              })}
          </List>
        </Box>
        
      </Dialog>
    );
  }
  
}
