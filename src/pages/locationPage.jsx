
import { Grid, Box, Typography } from "@mui/material";
import ImageSlider from "../components/imageSlider";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WestIcon from "@mui/icons-material/West";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RoomIcon from "@mui/icons-material/Room";
import Images from "../Location.json";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};
const LocationPage = () => {
  console.log("Images",Images)
  return (
    <Box className="containerPage">
      <Box className="locationPage">
        <ImageSlider className="sliderSwiper" slides={Images} slidesPerView ={1} />
        <WestIcon />
        <Box className="biteOmar">
          <Box>
            <span className="pinyon-script-regular">بيت عمر</span>
            <Box>
              <span>____</span>
              <span>Bite Omar</span>
              <span>____</span>
            </Box>
          </Box>

          <span>Beit Omar</span>
        </Box>
      </Box>
      <Box className="offersTitle">
        <h3>Offers</h3>
        <span>
          <LocalFireDepartmentIcon />
        </span>
      </Box>
      <Box className="totalBill">
        {/* <span className="boxshadow">
                </span> */}
        <span>20% Total Bill</span>
        <Grid container className="expiresAvailable">
          <Grid size={4}>
            <Box>
              <Typography>Expires</Typography>
              <span>01 jun 2023</span>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box>
              <Typography>Available</Typography>
              <span>Unlimitude</span>
            </Box>
          </Grid>
          <Grid size={4}>
            <NavigateNextIcon />
          </Grid>
        </Grid>
      </Box>
      <Box className="offersTitle">
        <h3>Locations</h3>
        <span>
          <RoomIcon />
        </span>
      </Box>
      <Box className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
        <h3>Al Olaya</h3>
        <Box className="prince">
          <Typography>Prince Muhammad Abd Alaziz Rd</Typography>
          <span>Directions</span>
        </Box>
        <Box>About Bite Omar</Box>
      </Box>
      
    </Box>
  );
};

export default LocationPage;
