const mongoose = require('mongoose');
const { isEmail } = require("validator")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true, "User name is required!"],
        unique: [true, "This user name already exist please another one"],
        lowercase: true
    },
    email: {
        type: String,
        resquired: [true, "Email is required"],
        lowercase: true,
        unique: true,
        validate: [isEmail, "please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "password is required!"],
        minlenght: [6, "The minemum password lenght is 6"]
    }
})

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    console.log(this.password)
    this.password = await bcrypt.hash(this.password, salt)
    console.log(this.password)
    next()
})

const User = mongoose.model('user', userSchema);
module.exports = User