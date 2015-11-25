var mongoose = require('mongoose');
var User   = require('./user');
var Schema   = mongoose.Schema;

var BottleSchema = new Schema({
    wineName:     { type: String },
    description:    { type: String },
    year: { type: Date },
    quantity: { type: Number },
    user_id: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Bottle', BottleSchema);