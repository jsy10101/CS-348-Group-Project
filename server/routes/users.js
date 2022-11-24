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
    username: req.body.username,
    password: hashedPass,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobileNo: req.body.mobileNo,
    EmailID: req.body.EmailID,
    Address: req.body.Address,
    Admin: req.body.Admin
  });
  try{
      const savedUser = await user.save();
      res.send(savedUser);
  } catch(err) {
      res.status(400).send(err);
  }
});

// Login Route
router.route('/login').post(async(req, res) => {
  const user = await User.findOne({username: req.body.username});
  if (!user) {
    return res.status(400).send('Username or password incorrect');
  }
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send('Password incorrect');
  } 
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
  // res.send('Logged in!')
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
