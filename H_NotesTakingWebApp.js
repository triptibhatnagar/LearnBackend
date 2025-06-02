const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        console.log(files)//[] //[ 'abcd.txt' ]
        res.render("index1", {files: files})
    })
    // res.send("Welcome")
})

app.post('/create', (req, res) => {
    // console.log(req.body)
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
        res.redirect('/')
    })
})

app.get('/files/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, "utf8", function(err, fileData) {
        // console.log(fileData)
        res.render("show", {filename: req.params.filename, fileData: fileData})
    })
})

app.get('/edit/:filename', (req, res) => {
    res.render("edit", {filename: req.params.filename})
})

app.post('/edit', (req, res) => {
    // console.log(req.body)
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err) {
        res.redirect('/')
    })
})

app.listen(3000)

// the tasks will be saved in a folder in the form of files