// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var pwSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var schema = module.exports = mongoose.model('password', pwSchema);
module.exports.get = function (callback, limit) {
    schema.find(callback).limit(limit);
}
