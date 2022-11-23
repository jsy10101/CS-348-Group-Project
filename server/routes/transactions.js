const router = require('express').Router();
let Transaction = require('../models/Transaction');
var mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Transaction.where()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/add').post((req, res) => {
    const senderID = mongoose.Types.ObjectId.createFromHexString(req.body.senderID);
    const receiverID = mongoose.Types.ObjectId.createFromHexString(req.body.receiverID);
    const amount = req.body.amount;
    
    const newTransaction = new Transaction({senderID, receiverID, amount});
    
    newTransaction.save()
        .then(() => res.json('Transaction added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    
    module.exports = router;
