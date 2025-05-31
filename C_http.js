// protocol - rules
// internet pr kuch b krne k liye rules bnaye unke dwara jinhone internet bnaya h
// ab un rules ko follow krna jruri h, aur ye rules follow ho isliye ye rules aapke os k s/w m preinstalled aate h - all rules related to networkin

// http - protocol
// isko follow kre bina aap na hee kuch bhej skte ho na hee kuch manga skte ho

const http = require('http')

// HOW TO USE HTTP
// create server
const server = http.createServer(function(req, res) {
    res.end("Heyyyyy")
})
server.listen(3000)

// localhost:3000 server