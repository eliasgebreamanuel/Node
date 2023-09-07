const http = require('http')
const fs = require('fs')
const _ = require('lodash')
const server = http.createServer((req, res) => {
   // console.log(req.url, req.method)
    
   // this is for the lodash
   const num = _.random(0,20000000)


   // this is used ot execte a fucntion only once
   const greet = _.once(() => {
    console.log('Hello')
   })
   greet();
   greet();
   console.log(num)
   // these are the three steps to send a response
    // sdet header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){
        case  '/':
            path +='index.html'
            res.statusCode = 200
            break
        case '/about':
            path += "about.html"
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default: 
            path +='404.html'
            res.statusCode = 404
            break

    }
    // res.write('<head><link rel = "stylesheet" href="#"></head>')
    // res.write('<h1>Hello Elias</h1>')
    // res.write('<h1>Hello Elias Again</h1>')
    // send an html file
    fs.readFile(path, (err, data) => {
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