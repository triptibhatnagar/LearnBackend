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

app.use(cookieParser())

app.get('/', (req, res) => {
    // setting cookie
    res.cookie("name", "abcd")
    res.send("done")
})
app.get('/read', (req, res) => {
    // ab cookie iske sath b chipak k jaygi
    console.log(req.cookies)//{ name: 'abcd' }
    res.send("read page")
})

app.listen(3000)