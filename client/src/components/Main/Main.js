import React from 'react'
import classes from './Main.module.css'
import AccountSummary from '../Accounts/AccountSummary'
import AccountGraph from '../Accounts/AccountGraph'
import Navbar from '../Navbar/Navbar.js'
import { useParams } from 'react-router-dom'
import DGrid from '../Transaction/TransactionList'
import axios from 'axios'


export default function Main() {
    const userId = useParams();
    const [userAccounts, setUserAccounts] = React.useState([]);
    var url = 'http://localhost:3030/accounts/' + userId.id;
    React.useEffect(() => {
        axios.get(url)
            .then(response => {
                setUserAccounts(response.data)})
            .catch(err => console.log(err));
    }, [userId, url]);
    console.log(userAccounts)

    return (
        <>
            {/* <Header /> */}
            <Navbar></Navbar>
            <div className={classes.main}>
                {!!userId.id && <AccountSummary uid={userId.id} />}
                {console.log(userAccounts)}
                <ul>
                    {userAccounts.map(acc => {return (
                        <li key={acc._id}>
                            <h2>{acc.type}</h2>
                            <AccountGraph accountID={acc._id} />
                        </li>)
                        })}
                </ul>
                
                <h2>test</h2>
            </div>
        </>
    )
}
