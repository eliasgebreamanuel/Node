const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


// exporess app
const  app = express()
// this is used o connect to the database
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.xjjarpq.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err))

// this is used to register a view engine
app.set('view engine', 'ejs')


// listen for requests
// app.listen(3000)

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ',req.hostname);
//     console.log('path: ',req.path);
//     console.log('method: ',req.method);
//     next();
// });
// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// })
// middleware and static files
app.use(express.static('public'))
app.use(morgan('dev'));

// this us used ot listen for a get request
app.get('/', (req, res) => {
  //  res.send('<p>Homepage</p>');
//   res.sendFile('./views/index.html', { root: __dirname })
    const blogs = [
        {title: 'Elias has airpods', snippet: 'This is the first line of the text'},
        {title: 'Elias has headphones', snippet: 'This is the first line of the text'},
        {title: 'Elias has speaker', snippet: 'This is the first line of the text'},

    ]

    res.render('index', {title: 'Home', blogs});
})

// this is used to handkle the get request for about
app.get('/about', (req, res) => {
  //  res.send('<p>About Page</p>')
//   res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', {title: 'About'})
})


// this is used to redirect the user in to another page
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'})
})
// this is used to show a 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname})
    res.render('404', {title: 'Not Found'})
})