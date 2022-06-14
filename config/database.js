const mongoose = require('mongoose')

const URL = "mongodb://localhost:27017/ies"

module.exports.connect = () => {
    try {
        mongoose.connect(URL)
        console.log("Successfully connected to databases")
    } catch (error) {
        console.log("database connection failed. exit now ..")
        process.exit(1)
    }
}