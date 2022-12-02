const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/User');
let User = require('../models/User');

// Get All Users Route 
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
    });

// Get User with ID Route
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
    });

// Delete User with ID Route
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });

// Add User Route
router.route('/add').post(async(req, res) => {
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    _id: req.body._id || 101,
    username: req.body.username,
    password: hashedPass,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobileNo: req.body.mobileNo,
    emailID: req.body.emailID,
    address: req.body.address || [{
            line1: '',
            line2: '',
            pin: '',
    }],
    admin: req.body.admin || false,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt
  });
  try{
      const savedUser = await user.save();
      res.send(savedUser);
  } catch(err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update User
router.route('/:_id').post((req, res) => {
  User.findById(req.params._id)
    .then(user => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.mobileNo = req.body.mobileNo;
      user.address = req.body.address;
      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Login Route
router.route('/authenticate/login').post(async(req, res) => {
  const user = await User.findOne({username: req.body.username});
  if (!user) {
    return res.status(400).send('Username or password incorrect');
  }
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send('Password incorrect');
  } 
  const token = user._id.toString();
  res.header('auth-token', token).send(token);
});

// Token Validation Function
function validateToken(req, res, next) {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send('Access Denied');
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch(err) {
    res.status(400).send('Invalid Token');
  }
}

module.exports = router;
