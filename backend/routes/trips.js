const router = require('express').Router();
let Trip = require('../models/trips.model');

router.route('/').get((req, res) => {
    Trip.find()
        .then(trips => res.json(trips))
        .catch(err => res.status(400), json('Error while getting trips: ' + err));
});

