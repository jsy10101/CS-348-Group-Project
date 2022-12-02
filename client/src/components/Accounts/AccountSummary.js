import React, { useState, useEffect } from 'react';
import AccountCard from "../AccountDetail/AccountCard";
import TotalAccount from "../AccountDetail/TotalAccount";
import axios from 'axios';

export default function AccountSummary({uid}) {
    const [total, setTotal] = useState(0);
    const [chequing, setChequing] = useState({});
    const [saving, setSaving] = useState({});
    const [credit, setCredit] = useState({});
    let userAccountInfo = [];
    useEffect(() => {
        const url = 'http://localhost:3030/accounts/' + uid;
        axios.get(url).then(res => {
            userAccountInfo = res.data;
            setChequing(userAccountInfo.find(account => account.type === 'Chequing'));
            setSaving(userAccountInfo.find(account => account.type === 'Saving'));
            setCredit(userAccountInfo.find(account => account.type === 'Credit'));
            setTotal(chequing.balance + (!!saving ? saving.balance : 0));
        }).catch(err => console.error(err));

    }, [uid, total]);
    return (
        <div>
            <div>
                <h2>Debit</h2>
            </div>
            {!!chequing && <AccountCard type={chequing.type} balance={chequing.balance} accountId={chequing._id} />}
            {!!saving
             &&
                <div>
                    <h2></h2>
                 </div>
            }

            {!!saving && <AccountCard type={saving.type} balance={saving.balance} accountId={saving._id} />}
            {!!chequing &&
                <div>
                    <h3>Total</h3>
                </div>
            }
            {!!chequing && <TotalAccount type="Total" balance={total} />}
            {!!credit &&
                <div>
                    <hr></hr>
                    <h2>Credit</h2>
                </div>
            }
            {!!credit && <AccountCard type={credit.type} balance={credit.balance} accountId={credit._id} />}
        </div>
    );
}
