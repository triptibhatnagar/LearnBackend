// mongodb installation

// mongodb connection


// schema
// model
// CRUD

// mongoose - resp for communication from node server to db server
// mongoose - ODM (Object Document Mapping)
// ORM (Object Relational Mapping)
// mongoose related work like crud - asynchronous

const express = require('express')
const app = express()
const userModel = require('./J_userModel')

app.get('/', (req, res) => {
    res.send("Hey")
})
app.get('/create', async (req, res) => {
    // requirement of await - async on nearest parent function
    let createdUser = await userModel.create({
        name: "atharv",
        email: "atharv@gmail.com",
        username: "ATHARV"
    })
    // _id = 24 characters, 12 bytes
    // 3 bytes in _id - timestamp
    // rest - m/c info, user info
    res.send(createdUser)
})

app.get('/update', async (req, res) => {
    // (findone, update, {new: true})
    let updatedUser = await userModel.findOneAndUpdate({username: "SOHAM"}, {name: "abcd"}, {new: true})
    res.send(updatedUser)
})
// find means read, find gives array (if no user, empty arr)
app.get("/read", async (req, res) => {
    let allUsers = await userModel.find()
    res.send(allUsers)
})
// fidOne gives object, findOne (if no user, null)
app.get("/readOne", async (req, res) => {
    let user = await userModel.findOne({username: "SOHAM"})
    res.send(user)
})

app.get('/delete', async (req, res) => {
    let delUser = await userModel.findOne({username: "SOHAM"})
    res.send(delUser)
})

app.listen(3000)