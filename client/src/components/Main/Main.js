import React from 'react'
import classes from './Main.module.css'
import AccountSummary from '../Accounts/AccountSummary'
import AccountGraph from '../Accounts/AccountGraph'
import Navbar from '../Navbar/Navbar.js'
import { useParams } from 'react-router-dom'


export default function Main() {
    const userId = useParams();

    return (
        <>
            {/* <Header /> */}
            <Navbar></Navbar>
            <div className={classes.main}>
                {!!userId.id && <AccountSummary uid={userId.id} />}
                <AccountGraph accountID="637d79920e16a1a7afc28205" duration="7" />    
            </div>
        </>
    )
}
