// EXPRESS.JS FRAMEWORK
// introduction to expressjs
// Setting up a basic express application
// Routing
// Middleware
// Request and response handling
// Error handling


// EXPRESS
// MERN stack - _ Express _ _
// express js ek npm pkg h
// framework -> gives you a "flow", tell konsi cheez krni h, kesi krni h vo aap kisi b trh kr skte ho
// library -> gives you tools, go and work
// react is library
// express is framework

// express manages everything from receiving the req and giving back the response


// SETTING UP A BASIC EXPRESS APPLICATION

// const express = require('express')
// const app = express()

// ROUTING
// app.get(route, requestHandler)
// requestHandler is a middleware

// app.get('/', function(req, res) {
//     res.send("Hellooo Worrldd")
// })
// app.get('/tripti', function(req, res) {
//     res.send("Hey TRIPTI")
// })
// app.listen(3000) // 3000 is port

// express variable k andr ek express() function stored h
// ye jb chlta h to app m express ki power aa gyi
// now you can create routes
// routes: domain k baad jo hota h
// Eg of routes - abc.com/, x.com/, youtube.com/ ('/' is route here)


// MIDDLEWARE
// jb b server req accept krta h, vha se route k beech pahuchne tk agr aap uss req ko beech m rokte ho and kuch perform krte ho, toh ye elm middleware kehlata h
// koi b route chle usse phle kuch kaam krna h to middleware is used
// 2 ways to use 
// app.get se phle app.use krenge to hr req se phle app.use chlega

// 1. use -> (req,res,next)
// 2. app.get(route, middleware, reqHandler)

// app.use(function(req, res, next) {
//     console.log("middleware chlao")
//     // but the loader keeps on rounding, req comes, but not yet forwarded, so next is used
//     next()
// })
// app.use(function(req, res, next) {
//     console.log("middleware chlao ek aur baar")
//     // but the loader keeps on rounding, req comes, but not yet forwarded, so next is used
//     next()
// })
// app.get('/', function(req, res) {
//     res.send("Hellooo Worrldd")
// })

// FRONTEND BACKEND FRONTEND

// ERROR HANDLING
// there exists a default error handler
// always wriiten at last

// using error handler in get
// app.get('/profile', function(req, res, next) {
//     return next(new Error("Something went wrong")) // goes to console
// })
// default error handler
// app.use(function(err, req, res, next) {
//     console.error(err.stack)
//     res.status(500).send("Something broke!")// goes to frontend
// })
// app.listen(3000)