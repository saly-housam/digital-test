import {
  Button,
  Typography,
  Toolbar,
  Badge,
  AppBar,
  IconButton,
  Box,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default  function AppBarComponent(props) {
  // const myData = await fetch("https://stg.tdh.start-tech.ae/api/8661e1bc-87d4-11ef-ba55-0050563f7167/restaurant/categories/2da6c53a-522d-485d-b77c-2fafd601ff0c").then((res) => res.json())
  // console.log("title",myData.data.title)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="appBar">
        <Toolbar class="toolBar">
          <Button class="buttonAppBar">
            <ArrowBackIosIcon />
            Back
          </Button>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {props.title}
          </Typography>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
