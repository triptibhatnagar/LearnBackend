const express = require('express')
const app = express()
const path = require('path')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    // res.send("Welcome")
    res.render("index1")
})

app.listen(3000)

// the tasks will be saved in a folder in the form of files