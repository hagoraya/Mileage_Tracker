const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: { type: String, required: true },
    distance: { type: Number, required: true },
    fuel_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;