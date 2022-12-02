import React from 'react';
import classes from "./Header.module.css";
import logo from "../../assets/BANKLOGO.png"
import { Link } from "@mui/material"

export default function Header() {
    return (
      <div className={classes.header}>
        <div className={classes.logo}>
            <img src={logo} alt="Bank Logo" />
        </div>
        <div>
          <ul className={classes.nav}>
            <Link className="link">Transfer</Link>
            <Link className="link">Edit Profile</Link>
          </ul>
        </div>
      </div>
    );
};
  