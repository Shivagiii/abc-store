import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import './SignIn.css';

import axios from "axios";

function SignIn() {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userDetails,setUserDetails]= useState({
        username:"",
        password:""
    });
    const change = (e) => {
  
        setUserDetails(
         {   ...userDetails,
            [e.target.name]: e.target.value
          }
          );
        }
        const register = async (formData) => {
            console.log(formData)
    
            const url =`https://fakestoreapi.com/users`
            console.log(url)
             await axios.post(url,{
              username: formData.username,
                password:formData.password,
              
            })
            .then(() => {
            
              console.log("Registered")
           
            
            })
            .catch(() => 
                console.log("Failed")
            )}
  return (
    <div><Button color="inherit" onClick={() => {handleOpen(true)}}>Sign In</Button>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal"  sx={{
        '& .MuiTextField-root': { m: 1, width: "90%", height:"40%"},
      }}>
            <Stack>
          <TextField required
          fullWidth
          id="outlined-required"
          label="UserName"
          placeholder="Enter User Name"
          name='username'
          onChange={change}
          value={userDetails.name}/>
          
          <TextField required
          fullWidth
          id="outlined-required"
          label="Password"
          placeholder="Enter your Password"
          name='password'
          onChange={change}
          value={userDetails.password}/>
          <Button onClick={()=> register(userDetails)}>Submit</Button>
          </Stack>
        </Box>
      </Modal></div>
  )
}

export default SignIn