var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require('./VerifyToken');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file

exports.login = function login (req,res,next)
{
    var token = jwt.sign({id: 'E10' }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    // return the information including token as JSON
    console.log(token)

    res.status(200).send({ auth: true, token: token });
  };

exports.logout = function logout (req,res,next)
{
  console.log("out")
  res.status(200).send({ auth: false, token: null });
};
