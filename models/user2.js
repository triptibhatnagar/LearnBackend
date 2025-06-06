const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/testingdb")

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    // posts: Array // a user can write multiple posts //array of posts [id1, id2,...] REFERENCING
    // [hjwvefdwhjfdwehjfdwehjfvewqhj, uwqgfdyjwhgfcwjagdjqwgdjqw]
    // har post ki id hogi posts array m, aur post k paas user k andr ek id hogi jo btayega ki vo post kis user k dwara h
    // user -> posts[id1, id2, id3, ...]
    // post -> user id

    // age: Number OR 
    // age: {
    //      type: Number
    // }

    posts: [// array of ids
        { // an id
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'// ids will belong to post model
        }
    ]
})

module.exports = mongoose.model("user", userSchema)