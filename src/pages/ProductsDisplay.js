import React, { useEffect, useState } from "react";
import { Toolbar, TextField, Box, Grid } from "@mui/material";
import { fetchAllProducts } from "../fetchApi";
import ProductCard from "../components/ProductCard";


function ProductsDisplay() {
  const [allProducts, setAllProducts] = useState([]);
  const [search,setSearch] = useState('');
const [debounceTimer,setDebounceTimer] = useState(0);

  useEffect(() => {
    if (fetchAllProducts) {
      fetchAllProducts().then((res) => {
        console.log(res);
        const data = res;
        setAllProducts(data);
      });
      console.log(allProducts);
    }
  }, []);
  useEffect (() => {
    if (debounceTimer !== 0) {
      clearTimeout(debounceTimer);
    }

    const newTimer = setTimeout(() => {
     // performAPICall(search);
    }, 800);
    setDebounceTimer(newTimer);
    }, [search]
    )

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Toolbar />
      <TextField
        className="search-mobile"
        placeholder="Search for items/categories"
        size="small"
        name="search"
        fullWidth
      />
      <Box className="hero">
        <p className="hero-heading">
          India’s <span className="hero-highlight">FASTEST DELIVERY</span> at
          your door step
        </p>
      </Box>
      <Grid container spacing={2} padding={1}  >
        {allProducts.map((item) => (
          <Grid
            item
           
            xs={6}
            md={4}
            lg={3}
            key={item.id}
            
          >
            <ProductCard data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductsDisplay;
