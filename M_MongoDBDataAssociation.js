/*
a shop
products array - 
1. [id1, id2, id3, id4, id5]  REFERENCING (only ids that point to different products in a single array)  [most used]
2. [prod1, prod2, prod3, prod4, prod5]  EMBEDDING (whole products data in a single array)
*/


const express = require("express")
const app = express()

const userModel = require('./models/user2')
const postModel = require('./models/post')

app.get('/', (req,res) => {
    res.send("heyyy")
})

// creating user
app.get('/create', async (req,res) => {
    // res.send("create krenge")
    let user = await userModel.create({
        // username email age posts
        username: "ansh",
        email: "ansh@mail.com",
        age: 23,
    })
    res.send(user)
})

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "helloo guysss",
        userInfo: "6842a089cb020af1e3b70892" //logged in user id
    })
    let user = await userModel.findOne({_id: "6842a089cb020af1e3b70892"})
    user.posts.push(post._id)
    await user.save()// khud k changes ko save krna pdta h
    res.send({post, user})
})

app.listen(3000)