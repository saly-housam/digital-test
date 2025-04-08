
import {Grid ,Box, Typography } from "@mui/material";
import ImageSlider from "../components/imageSlider";
import SearchIcon from '@mui/icons-material/Search';
import Slides from "../data.json"
import Products from "../Pramitto.json"
import GalleryShow from "../Gallery.json"

const SalePage = () => {
  return (
    <Box className="salePage">
        <Box className="topBar">
            <Typography>Hello,Fahed</Typography>
            <SearchIcon />
        </Box>
      <Box className="uperSection">
      <Box className="leftSide">
            End of year sales
        </Box>
        <Box className="rightSide">
        <Typography>Lorem ipsum dolor sit amet</Typography>
         <h1>SALE</h1>
         <Typography>Lorem ipsum dolor sit amet</Typography>
        </Box>
      
       
      </Box>
      <Box className="slider">
           <ImageSlider
            className="sliderSwiper"
             slides={Slides} 
              slidesPerView ={3}
               />
      </Box>
      <Box className="pramitto">
        <h3>Show Pramitto</h3>
        <Grid container spacing={2}>
          {Products.map((product)=> (
             <Grid item xs={6} key={product.id}>
             <img src= {product.image} />
             <Typography>{product.title}</Typography>
             <span> {product.description} </span>
           </Grid>

          ))}
         
        </Grid>
      </Box>
      <Box className="bottomSlider">
           <ImageSlider className="sliderSwiper" slides={GalleryShow}  slidesPerView ={1.5} />
      </Box>
     
      
    </Box>
  );
};

export default SalePage;
