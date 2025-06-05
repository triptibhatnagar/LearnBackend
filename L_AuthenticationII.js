const express = require("express")
const app = express()

// create user account
    // mongoose
    // schema
    // model
    // usercreate -> password -> hash
    // jwt token -> cookie
    
    // login -> token -> decrypt -> email

const path = require("path")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cookieParser =  require("cookie-parser")
const userModel = require('./models/user1')


app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render("index3")
})
app.post('/create', async (req, res) => {
    let {username, email, password, age} = req.body

    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt)
        bcrypt.hash(password, salt, async (err, hash) => {
            console.log(hash)
            let createdUser = await userModel.create({
                username,
                email, 
                password: hash,
                age
            })

            let token = jwt.sign({email: email}, "secret")
            res.cookie("token", token)
            res.send(createdUser)
        })
    })
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    let user = await userModel.findOne({email: req.body.email})
    // console.log(user)
    if(!user) return res.send("Something went wrong")
    // console.log(user.password, req.body.password)
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        // console.log(result) // true
        if(result) {
            res.send("Yes, you can login")
            res.cookie("token", token)
            let token = jwt.sign({email: user.email}, "secret")
        }else {
            res.send("No, you can't login, something is wrong")
        }
    })
})

app.get("/logout", function(req, res) {
    res.cookie("token","")//cookie m se token ki value gaayab hogyi
    res.redirect('/')
})

app.listen(3000)