const mongoose = require("mongoose");

const bdaySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Bdays', bdaySchema);