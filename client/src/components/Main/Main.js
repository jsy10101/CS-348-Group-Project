import React from 'react'
import classes from './Main.module.css'
import AccountSummary from '../Accounts/AccountSummary'
import AccountGraph from '../Accounts/AccountGraph'

export default function Main() {
    return (
        <div className={classes.main}>
            <AccountSummary />
            <AccountGraph accountID="637d79920e16a1a7afc28205" duration="7" />    
        </div>
    )
}
