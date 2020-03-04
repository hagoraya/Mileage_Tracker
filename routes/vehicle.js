const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');


router.route('/').get((req, res) => {
    Vehicle.find()
        .then(vehicle => res.json(vehicle))
        .catch(err => res.status(400).json('Error while getting vehicle: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const fuel_economy = req.body.fuel_economy;
    const newVehicle = new Vehicle({ name, fuel_economy });

    newVehicle.save()
        .then(() => res.json('Vehicle added'))
        .catch(err => res.status(400).json('Error while adding vehicle: ' + err));
});
module.exports = router