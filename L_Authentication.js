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

const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(cookieParser())

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
    // bcrypt.compare("helloworld", "$2b$10$oI6HWfXwMZRAswZk7aQCSu0il0bcndkKjUyGAzrmVfrA0zlDKNRD6", (err, result) => {
    //     console.log(result) //true
    // })


    let token = jwt.sign({email: "abcd@example.com"}, "secret") // "secret" is very very secret if anyone will know this then they can hack
    // console.log(token)// ye browser p bhejte h
    res.cookie("token", token)
    res.send("done")
})

app.get("/read", (req, res) => {
    // console.log(req.cookies.token)
    // backend p token aagya, iss token ka data nikalna h ab
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)// { email: 'abcd@example.com', iat: 1749019978 }
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



// jwt 3 hisso se bnta h and usme se 1 hissa mainly kaam ka h
// header[algorithm rel data], payload[your data], signature = sb ikathe
// jwt in 3no ko alg krdeta h
// payload se pta lg jega ki ye bnda h kon usually email as it is unique'
// to agli barr puchna ni pdega ki tum kon ho
app.listen(3000)