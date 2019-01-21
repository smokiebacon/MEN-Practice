const mongoose = require('mongoose');
const houseSchema = new mongoose.Schema ( {
    name: {type: String, require: true},
    location: String,
    beds: Number,
    sqft: Number,
    bathroom: Number
})






const House = mongoose.model('House', houseSchema);
module.exports = House;