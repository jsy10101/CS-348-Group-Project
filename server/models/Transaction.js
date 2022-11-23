const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    senderID:   {type: mongoose.Schema.Types.ObjectId,
                ref: 'Account',
                required: true,},
    receiverID:   {type: mongoose.Schema.Types.ObjectId,
                ref: 'Account',
                required: true,},
    amount:    {type: Number,
                required: true}
    }, {
        timestamps: true,
    });

    const Transaction = mongoose.model('Transaction', TransactionSchema);

    module.exports = Transaction;