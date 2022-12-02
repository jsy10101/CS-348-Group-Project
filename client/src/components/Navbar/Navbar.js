import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/BANKLOGO.png"
import styles from './Navbar.module.css'; 

const navItems = ["Profile", "Log Out"];
export default function Navbar() {

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
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
