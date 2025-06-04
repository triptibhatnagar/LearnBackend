const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/mongoPrac`)

// structure of every user
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

module.exports = mongoose.model("user", userSchema) // model name: "users" : pluralized version

// if model created, only then -> CRUD done