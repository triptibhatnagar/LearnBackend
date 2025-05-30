// 1) Initialize a project : npm init
// 2) express install : npm i express
// package.json created
// running server - npx nodemon <filename>


// Dynamic Routing
// How to get data coming from frontend at backend
// Setting up Parsers for form
// setting up ejs for ejs pages (frontend jo dikhega, html jesa hota h, u can write dynamic stuff or calculations in it = ejs)
// setting up public static files

const express = require('express')
const app = express()
const path = require('path')

// Setting up Parsers for form
// with this, you can handle form data on backend
// parsers
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public'))) // sari static files (eg- images, vudeos, stylesheets, vanilla, js), to search them go to public folder
console.log(__dirname) //C:\Users\Dell\Desktop\Backend, path - jis folder m aap kaam kr re ho
console.log(__dirname+'\\public') // C:\Users\Dell\Desktop\Backend\public <- this is what path.join does

// setting up ejs for ejs pages
//      install ejs from npm : npm i ejs
//      set up ejs as a view engine
app.set('view engine', 'ejs') // backend will render or view ejs pages

// app.get("/" ,(req, res) => {
//     res.send("chal rha h")
// })

app.get("/" ,(req, res) => {
    // render 
    // page which must exist in views is wriiten in render
    res.render("index") //.ejs not required because rendre hmesha vhi view hoga jo aapne set up kiya hoga jese ki yha pr ejs
})

// setting up public static files
// app.use(express.static("yha p sara path aayeg a jaha pr static files ko serach krna h"))
// create a folder at root level

// what is dynamic routing
// hum log kyi baar kuch routes dekhte h, unme sirf ek hee hissa change hota h
// /author/harsh
// /author/harshita
// /author/harshika
// do we have to create diff routes fro all these

// sbse phle browser pr jao
// url likho apna jo chaiye
// enter dabao
// create that url route
// res send kuch b
// ab usi url ko dynamic bnana h, then realise konsa part dynamic aur uss part k aage route m colon lgado
// now this username has become a variable, jo b url iss pattern ko match krega ye route chl jayega
// after colon part is dynamic
// req.params -> aesa kuch b jiske aage : h
app.get("/profile/:username" ,(req, res) => {
    res.send(`Welcome ${req.params.username}`) 
    // res.send("chal rhi h profile")
})
app.get("/author/:username/:age" ,(req, res) => {
    res.send(`Welcome ${req.params.username}, your age is: ${req.params.age}`) 
    // res.send("chal rhi h profile")
})

app.listen(3000, function(){
    console.log("Server running")
})