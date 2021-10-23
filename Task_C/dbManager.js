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
const Password = mongoose.model('password', pwSchema);

var userSchema = mongoose.Schema({
    user: {
        type:String,
        required: true
    },
    access: {
        type: Number, 
        default: 0
    }
});
const User = mongoose.model('user', userSchema);

module.exports = {
    Password, User
}
