const fs = require('fs')

// thisis used to read a file
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
});

console.log('Last Line')

// this is used to wrirte a file
fs.writeFile('./docs/blog1.txt', 'Bye Elias G/Amanuel', () => {
    console.log('File was written')
})

fs.writeFile('./docs/blog2.txt', 'London is blue', () => {
    console.log('File is created successfully')
})

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Folder created')
    })
} else{
    fs.rmdir('./assets', (err) => {
        if(err){
        console.log(err)
}})
}


// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
    if(err) {
        console.log(err)
    }
    console.log('File deleted')
    })
}