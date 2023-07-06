const express = require('express');
const router = express.Router();
const User = require('./database').UserSchema;
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    try {
        await user.save();
        res.status(200).send({ message: 'userSignup', user });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }
        res.status(200).send({ message: 'userLogin', user });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;