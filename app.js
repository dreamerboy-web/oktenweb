const host = require('http');
const fs = require('fs');
const url = require('url');

const server = host.createServer(((req, res) => {
    let url = url.parse(req.url)

    switch (url.pathname) {
        case '/':
            fs.readFile('./index.html', (err, data) =>{
                res.end(data)
            });
            break;
        case '/login':
            fs.readFile('./contacts.html', (err, data) =>{
                res.end(data)
            });
            break;
        case '/register':
            fs.readFile('./servises.html', (err, data) =>{
                res.end(data)
            });
            break;
        default:
            fs.readFile('./about.html', (err, data) =>{
                res.end(data)
            });
    }
}));

server.listen(3000,(err) => {
    if (err) {
        console.log('Error');
    }

    console.log("good 3000");

});








// // содежимое index.js
// const http = require('http')
// const port = 3000
// const requestHandler = (request, response) => {
//     console.log(request.url)
//     response.end('Hello Node.js Server!')
// }
// const server = http.createServer(requestHandler)
// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${port}`)
// });
//
