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
    const vehicle = req.body.vehicle;
    const fuel_price = req.body.fuel_price;
    const date = Date.parse(req.body.date);

    const newTrip = new Trip({
        name,
        distance,
        vehicle,
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
});

// router.route('/delete/:id').delete((req, res) => {
//     Trip.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Trip deleted'))
//         .catch((err) => res.status(400).json('Error while deleting trip: ' + err));
// });

router.delete('/delete/:id', function (req, res) {
    var id = req.params.id;
    Trip.findByIdAndDelete({ _id: id }, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send();
        }

        return res.status(500).send();
    });
});

router.route('/update/:id').post((req, res) => {
    Trip.findById(req.params.id)
        .then(trip => {
            trip.name = req.body.name;
            trip.distance = req.body.distance;
            trip.fuel_price = req.body.fuel_price;
            trip.date = Date.parse(req.body.date);

            trip.save()
                .then(() => res.json('Trip updated'))
                .catch((err) => res.status(400).json('Error while updating trip: ' + err));
        })
        .catch((err) => res.status(400).json('Error while getting trip to update: ' + err));
});

module.exports = router;