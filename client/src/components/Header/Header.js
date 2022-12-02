import React from 'react';
import classes from "./Header.module.css";
import logo from "../../assets/BANKLOGO.png"
import { Link } from "react-router-dom"
import { useParams } from 'react-router';

export default function Header() {
    const { id } = useParams();

    return (
      <div className={classes.header}>
        <div className={classes.logo}>
            <img src={logo} alt="Bank Logo" />
        </div>
        <div>
          <ul className={classes.nav}>
            <Link to={`/edit-profile/${id}`} >Edit Profile</Link>
            <Link to={'/login'} >Log Out</Link>
          </ul>
        </div>
      </div>
    );
};
  