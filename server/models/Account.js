const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    userID:     {type: mongoose.Schema.Types.ObjectId,
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