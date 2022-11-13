const router = require('express').Router();
let User = require('../models/User');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
    });


router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNo = req.body.mobileNo;
    const EmailID = req.body.EmailID;
    const Address = req.body.Address;
    const Admin = req.body.Admin;
    
    const newUser = new User({username, password, firstName, lastName, mobileNo, EmailID, Address, Admin});
  
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
    });