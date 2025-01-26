import SearchIcon from '@mui/icons-material/Search';
import {TextField,Box } from '@mui/material';
export default function  SearchField(){
    return(
        <form>
        <Box class="searchBox">
        <TextField
        class="inputBox"
         placeholder='search for categories'/>
         <span class="searchIcon"><SearchIcon /></span>
        </Box>
        
      </form>
    );
 }