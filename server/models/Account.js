const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    userID:     {type: Number,
                ref: 'User',
                required: true,},
    balance:    {type: Number,
                required: true,},
    type:       {type: String,
                required: true,
                trim: true},
    }, {
        timestamps: true,
    });

    const Account = mongoose.model('Account', AccountSchema);

    module.exports = Account;