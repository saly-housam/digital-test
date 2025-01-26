import React, { useState, useEffect } from "react";
import { Grid, Box, Container } from '@mui/material';
import { Typography,} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import AppBarComponent from "../components/appBar";
import SearchField from "../components/searchedField";
import FooterComponent from '../components/footer';
import { Link } from 'react-router-dom';


const url = "https://stg.tdh.start-tech.ae/api/8661e1bc-87d4-11ef-ba55-0050563f7167/restaurant/categories/2da6c53a-522d-485d-b77c-2fafd601ff0c"

const CategoriesList = ()=> {
    const [resturantsList, setResturantsList] = useState([])

      useEffect(() => {
          async function fetchData() {
            const myData = await fetch(url);
            const dataCategories = await myData.json();
            setResturantsList(dataCategories.data.categories);
        }
        fetchData();
      }, []);


    return (
   
        <Container>
            <AppBarComponent  />
            <SearchField />

            <Grid container spacing={2} >
                {resturantsList.map((resturant) => {
                  
                      return( <Grid item key={resturant.id} md={6} xs={12} >
                        <Link to="/item" class="linkItem">
                        <Card sx={{ maxWidth: 345 }}>
                              <CardActionArea >
                                  <CardMedia
                                      component="img"
                                      height="140"
                                      image={resturant.image}
                                      alt="green"
                                  />
                                  <CardContent class="titleImage" >
                                      <Typography gutterBottom variant="h6" component="div">
                                      {resturant.name}
                                      </Typography>
                                  </CardContent>
                              </CardActionArea>
                          </Card>
                          </Link>
                         
                      </Grid>
                      )
                }
                  
                   
                )}

            </Grid>
            <FooterComponent />

        </Container>
    );
}

export default CategoriesList;