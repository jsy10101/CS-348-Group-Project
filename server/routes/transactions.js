const router = require('express').Router();
let Transaction = require('../models/Transaction');
var mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Transaction.where()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/').post((req, res) => {
    if (req.body.duration == 0) {
        Transaction.where({SenderID:req.body.AccountID})
             .then(transactions => res.json(transactions))
            .catch(err => res.status(400).json('Error: ' + err));
    } else {
        var startDate = new Date();
        startDate.setDate(startDate.getDate() - req.body.duration);
        Transaction.where('SenderID',req.body.AccountID)
            .where('createdAt').gte(startDate)
            .then(transactions => res.json(transactions))
            .catch(err => res.status(400).json('Error: ' + err));
    }});

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
