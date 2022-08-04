const express = require('express');
const router = express.Router();

const authController = require('../controller/auth-controller')

router.get('/Signup', authController.getSignup);

router.get('/login', authController.getLogin);

