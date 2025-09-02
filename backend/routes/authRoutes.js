const express = require('express');

const User = require('../models/User');
const AuthRepository = require('../repositories/authRepository');
const AuthService = require('../services/authService');
const AuthController = require('../controllers/authController')

const router = express.Router();

const authRepo = AuthRepository(User);
const authService = AuthService(authRepo);
const authController = AuthController(authService)

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;