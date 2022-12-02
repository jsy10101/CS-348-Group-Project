import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from "../../assets/BANKLOGO.png"
import styles from './Navbar.module.css'; 
import { useParams } from 'react-router';
import { Link } from "react-router-dom"
import axios from 'axios';


export default function Navbar() {
    const { id } = useParams();
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const url = 'http://localhost:3030/users/' + id;
        axios.get(url).then(res => {
            setIsAdmin(res.data.admin);
        }).catch(err => console.error(err));
    }, [id]);

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
            {isAdmin && 
                <Button
                    component={Link}
                    variant="container"
                    to={`/admin/add-user`}
                    sx={{ color: '#fff' }}
                >
                    Add New User  
                </Button>
            }
            {navItems.map((item) => (
              <Button variant="container" component={Link} to={item.link} key={item.name} sx={{ color: '#fff' }}>
                {item.name}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
