import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import "./LandingPage.css";
import {AppBar,CssBaseline,Drawer,IconButton,Toolbar,Box,InputAdornment} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProductsDisplay from "./ProductsDisplay";
import Header from "../components/Header";
import SearchIcon from '@mui/icons-material/Search';


function LandingPage(props) {
  const drawerWidth = 15;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}vw)` },
          ml: { sm: `${drawerWidth}vw` },
        }}
      >
        <Toolbar sx={{backgroundColor:"cadetblue" , color:"white"}}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            className="toolBar"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <TextField
              className="search-desktop"
              placeholder="Search for item/category"
              size="small"
              name="search"
              variant="outlined"
              sx={{
                // Root class for the input field
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderWidth: "2px",
                  },
                },
               
              }}
            > <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton></TextField>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Button color="inherit">Sign In</Button>
              

              
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: `${drawerWidth}vw` }, flexShrink: { sm: 0 } }}
       
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            backgroundColor:"cadetblue" , color:"white",
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: `calc(100px- ${drawerWidth}vw)`,
            },
          }}
        >
         <Header/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor:"cadetblue" , color:"white",
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: `${drawerWidth}vw`,
            },
          }}
          open
        >
           <Header/>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100vw - ${drawerWidth}vw)` },
        }}
      >
        <ProductsDisplay/> 
      </Box>
    </Box>
  );
}

export default LandingPage;
