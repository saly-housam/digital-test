
import { Grid, Container, Box, Typography,Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import AppBarComponent from "../components/appBar";
import SearchField from "../components/searchedField";
import TabsComponent from "../components/tabsComponent";
import ItemCard from "../components/cardItem";
import { itemsList } from "../items";


const urlItems = "https://stg.tdh.start-tech.ae/api/8661e1bc-87d4-11ef-ba55-0050563f7167/restaurant/2da6c53a-522d-485d-b77c-2fafd601ff0c"


export default  function ItemsList() {
   const [items, setItems] = useState([])
   
  useEffect(() => {
    async function fetchData() {
      const myData = await fetch(urlItems);
      const dataItems = await myData.json();
      console.log("dataItems",dataItems)
      setItems(dataItems.data.items.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <AppBarComponent />
      <SearchField />
      <TabsComponent />
      <Box class="boxOfCards">
        <Grid container spacing={2}>
          {items.map((item) => {
            return(
              <Grid item key={item.id} md={6} xs={12}>
            
                <ItemCard
                  image={item.image}
                  title={item.name}
                  description={item.description}
                  // icon={item.icon}
                  icon="/src/assets/icons/spice.png"
                  // type={item.type}
                  type="AED 140"
                />
             
            </Grid>
            );
          }
            
          )}
        </Grid>
      </Box>
      <Box class="viewBox">
        <Box class="bottomBox">
          <Typography>
            <span>0</span>View Cart
          </Typography>
          <span>AED 0</span>
        </Box>
        <Typography>
          Prices are in AED and are inclusive of 10% service charges, 5% VAT &
          7% Municipality fee.
        </Typography>
      </Box>
    </Container>
  );
}
