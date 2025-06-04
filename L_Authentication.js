// Authentication and authorization
// authentication - user ko profile dene se phle ye check krna hota h ki user h kon, user ko validate krna
// authorization - authorized to perform some tasks which are only allowed to be executed by the admin

// server har baar bhool jata h ki aap kon h
// ab kyuki server bhool jata h aap kon ho to vo hr kaam k liye aapse puchega aap kon ho
// there comes cookies and sessions concept

// browser -> server
// authentication
// "hgjhgjhfvhjfhgfghfhg" -> sent on frontend by server and saved on browser
// next req, string will concatenate with every req on server, server will not ask who are you


// sbse phle hme kuch chize seekhni h alg alg
// 1. cookie kese set krte h and read krte h
// 2. bcrypt kese use krte h for encryption and decryption
// 3. jwt kya h and jwt m data kese store kre and bahar nikale

// const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const bcrypt = require('bcrypt')

// app.use(cookieParser())

app.get('/', (req, res) => {
    // setting cookie
    // res.cookie("name", "abcd")
    // saltRounds = 10 (default)
    // ENCRYPTION
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("helloworld", salt, function(err, hash) {
    //         console.log(hash) // this is your encrypted pwd or hashed pwd
    //     })
    // })
    // res.send("done")


    // DECRYPTION OR BASICALLY COMPARE
    bcrypt.compare("helloworld", "$2b$10$oI6HWfXwMZRAswZk7aQCSu0il0bcndkKjUyGAzrmVfrA0zlDKNRD6", (err, result) => {
        console.log(result) //true
    })
})


// app.get('/read', (req, res) => {
    // ab cookie iske sath b chipak k jaygi
    // console.log(req.cookies)//{ name: 'abcd' }
    // res.send("read page")
// })

// salt - random string
// hash - password coded
// salt + hash - another random string hence pwd can't be decrypted
// Eg - password => qbttxpse [algorithm - +1 in every char]
// more better algo - sha-256
// to convert pwd into a big random string: bcrypt is used

app.listen(3000)