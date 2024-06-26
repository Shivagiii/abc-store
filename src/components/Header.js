import React, { useEffect, useState } from "react";
import "./Header.css";
import { fetchCategories } from "../fetchApi";
import {Divider,Box,Toolbar} from "@mui/material";
import {List,ListItem,ListItemButton,ListItemText} from "@mui/material";

function Header(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (fetchCategories) {
      fetchCategories().then((res) => {
        setCategories(res);
      });
    }
  }, []);

  return (
    <Box sx={{
        backgroundColor:"rgb(129, 189, 189)" , color:"white" , textAlign:"center", fontWeight:"bold"}}>
        <Toolbar>
          CATEGORY
        </Toolbar>
        <Divider />
        <List  >
          {categories.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{padding:"0.5rem"}} >
                <ListItemText primary={text.toUpperCase()}  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  );
}

export default Header;
