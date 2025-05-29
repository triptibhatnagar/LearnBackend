// form handling and working with the forms

// handle backend process of forms and making sure that the data coming from any frontend lib or framework or templating engines, we still handle it at the backend

// npm i cookie-parser

// session cookie
// website -> ask for photo -> website asks for login -> you login -> get photo -> and close -> now server dont know about u
// everytime u visit and ask for photo -> you have to login

// hm log kuch b data frontend pr browser pr rkh skte h and jb b aap kuch b req backend p kroge vo frontend pr saved data automatically backend pr chla jega

// so login krne k baad ek string server aapko dega and jb b aap vapas se req kroge to end m ye string b boldena
// string browser m stored hogi aapke, aap koi b req kroge uspe, to vo string chipak k jayegi
// so ye jo frontend p browser p saved h -> COOKIE
// server se connected ho cookie k basis p -> SESSION

// mainly cookie used for authentication
// login to logout is a session


const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {

})

// data passed to server -> coverted to blob (unreadable string)
// blob not correct way to say
// data send to server in form of stream
// tumne bheja tha plain text, server ko mila blob, not directly readable, as is chhez ko handle krna pdega so that hm us blob ko vapas se readable kr ske
// app.use(express.json()) // json based data ko readable krti h
// app.use(express.urlencoded({extended: true})) // url encoded data ko read krti h