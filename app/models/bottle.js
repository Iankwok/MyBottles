var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BottleSchema = new Schema({
    wineName:     { type: String },
    description:    { type: String },
    year: { type: Date },
    quantity: { type: Number }
});

module.exports = mongoose.model('Bottle', BottleSchema);