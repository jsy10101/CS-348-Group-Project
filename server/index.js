const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());
var uri="";
if (process.env.ENV === 'Test') { 
  uri = process.env.TEST_ATLAS_URI;
} else {
  uri = process.env.PROD_ATLAS_URI;
}

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const UserRouter = require('./routes/users');
const AccountRouter = require('./routes/accounts');
const TransactionRouter = require('./routes/transactions');

app.use('/users', UserRouter);
app.use('/accounts', AccountRouter);
app.use('/transactions', TransactionRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});