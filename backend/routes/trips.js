const router = require('express').Router();

let Trip = require('../models/trips.model');

router.route('/').get((req, res) => {
    Trip.find()
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json('Error while getting trips: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const distance = req.body.distance;
    const fuel_price = req.body.fuel_price;
    const date = Date.parse(req.body.date);

    const newTrip = new Trip({
        name,
        distance,
        fuel_price,
        date,
    });

    newTrip.save()
        .then(() => res.json('Trip added'))
        .catch(err => res.status(400).json('Error while adding trip: ' + err));

});


router.route('/:id').get((req, res) => {
    Trip.findById(req.params.id)
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json('Error while getting trip with id: ' + err));
})

module.exports = router;