const mongoose = require('../config/mongo');

const UserSchema = new mongoose.Schema({
    nik: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    nacimiento: {
        type: Date,
        required: true,
    },
    // sexo: {
    //     type: String,
    //     required: true,
    // },
    publi: {
        type: Boolean,
        value: true,
    }




});

const User = mongoose.model('user', UserSchema)

module.exports = User;