import React from 'react'

export default function AccountSummary() {
    return (
        <div>
            <div className="justify">
                <h2>Debit</h2>
            </div>
            <AccountCard accountID="6373fef95f0f9c3ef2841db0" />
            <p></p>
            <AccountCard accountID="637401c9d183ff23f1fee804" />
            <h2>Total</h2>
            <div>
                <h2>Credit</h2>
            </div>
            <AccountCard accountID="637d73100e16a1a7afc281eb" />
        </div>
    )
}
