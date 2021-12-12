const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

// importing an md5 hash that I generated with some name, then joining with a JWT thus forming a more secure token
const authConfig = require('../../config/auth.json');
const User = require("../models/user");


const router = express.Router();

// Generate token with 1 hour of inspiration
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

// Register user
router.post('/register', async (req, res) => {
    
    const { username } = req.body

    try {

        if (await User.findOne({ username })) {
            return res.status(400).send({ error: 'Username already exists'});
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ 
            user,
            token: generateToken({ id: user.id })
        });

    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'})
    }

});


// Authenticate user
router.post('/authenticate', async (req, res) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username }).select('+password');

    if (!user) {
        return res.status(400).send({ error: 'User not found'});
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Invalid password'});
    }

    user.password = undefined;

    res.send({
        user, 
        token: generateToken({ id: user.id }) 
    });

});


module.exports = app => app.use('/auth', router);