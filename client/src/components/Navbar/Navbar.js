import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from "../../assets/BANKLOGO.png"
import styles from './Navbar.module.css'; 
import { useParams } from 'react-router';
import { Link } from "react-router-dom"


export default function Navbar() {
    const { id } = useParams();
    const navItems = [
        {
            name: "Profile", 
            link: `/edit-profile/${id}`
        },
        {
            name: "Log Out",
            link: "/login"
        }
    ];
    return (
        <Box sx={{ flexGrow: 1 , width:"100%"}}>
        <AppBar position="static">
          <Toolbar sx={{
            display: "flex" ,
            flexDirection: "row",
            backgroundColor: "teal",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
           <img src={logo} alt="logo" className={styles.logo} />

          <Box sx={{ display:"flex", justifyContent:"space-between" } }>
            {navItems.map((item) => (
              <Button component={Link} to={item.link} key={item.name} sx={{ color: '#fff' }}>
                {item.name}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
