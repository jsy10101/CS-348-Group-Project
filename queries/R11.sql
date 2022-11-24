\connect cs348_gp47

Create Trigger updateAcc
AFTER insert on Transactions
Referencing new row as newTransaction
For each row
Begin
    Update Accounts 
    set balance = balance - newTransaction.amount
    where AccountID = newTransaction.senderID

    Update Accounts 
    set balance = balance + newTransaction.amount
    where AccountID = newTransaction.receiverID
End;
