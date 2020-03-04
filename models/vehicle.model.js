const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    name: { type: String, required: true },
    fuel_economy: { type: Number, required: true },
});

const VehicleTrip = mongoose.model('Vehicle', vehicleSchemaSchema);

module.exports = VehicleTrip;