const http = require('http')

// create server
const server = http.createServer(function(req, res) {
    res.end("Heyyyyy")
})
server.listen(3000)