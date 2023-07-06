const express = require('express');
const router = express.Router();
const Order = require('./database').OrderSchema;

router.post('/orderSubmit', (req, res) => {
    const newOrder = new Order({
        user: req.body.user,
        items: req.body.items,
        total: req.body.total
    });

    newOrder.save()
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;