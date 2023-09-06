const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    // these are the three steps to send a response
    // sdet header content type
    res.setHeader('Content-Type', 'text/html');
    // res.write('<head><link rel = "stylesheet" href="#"></head>')
    // res.write('<h1>Hello Elias</h1>')
    // res.write('<h1>Hello Elias Again</h1>')
    // send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else{
           // res.write(data)
            res.end(data)
        }
    })
    // res.end()
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})