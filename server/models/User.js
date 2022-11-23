const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:   {type: String,
                required: true,
                unique: true,
                trim: true,
                minLength: 5},
    password:   {type: String,
                required: true,
                minLength: 8},
    firstName:  {type: String,
                required: true},
    lastName:   String,
    mobileNo:   {type: String,
                required: true,
                unique: true,
                trim: true,
                minLength: 10},
    emailID:    {type: String,
                required: true,
                unique: true,
                trim: true,},
    address:    [{line1: String, line2: String, pin: Number}],
    admin:      Boolean,
    }, {
        timestamps: true,
    });

    const User = mongoose.model('User', UserSchema);

    module.exports = User;