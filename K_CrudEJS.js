const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render("index2")
})
app.get('/read', async (req, res) => {
    let allUsers = await userModel.find()
    res.render("read", {users: allUsers})
})

app.get('/delete/:id', async (req, res) => {
    let allUsers = await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})

app.get('/edit/:userid', async (req, res) => {
    let user = await userModel.findOne({_id: req.params.userid})
    console.log("User object:", user)
    res.render("edit1", {user})
})

app.post('/update/:userid', async (req, res) => {
    let {img, username, email} = req.body
    let user = await userModel.findOneAndUpdate({_id: req.params.userid}, { image: img, name: username, email }, {new : true})
    res.redirect("/read")
})

app.post('/create', async (req, res) => {
    // destructuring
    let {username, email, img} = req.body
    let createdUser = await userModel.create({
        // name: req.body.name
        // name in form: username, email, img
        // in userModel: name, email, image
        name: username,
        email,// email: email   ~~   email
        image: img
        // https://www.fhmpakistan.com/wp-content/uploads/2023/09/maxresdefault.jpg
    })
    res.redirect('/')
    // res.send(createdUser)
})

app.listen(3000)