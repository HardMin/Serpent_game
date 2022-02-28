// const http = require('http');

// const sitioweb = (req, res) =>{
//     res.writeHead(200, {'Content-type': 'text/plain'})
//     res.end("HOLA MUNDO");
// };

// const server = http.createServer(sitioweb);

// const server = http.createServer((req, res) => {
    //     res.status = 200;
    //     res.setHeader('Content-Type', 'text/plain');
//     res.end('index')
// });

// server.listen(5000, '192.168.101.10');

const http = require('http');
const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 5000;

app.set('port', process.env.PORT || port);
// app
app.set('views', path.join(__dirname, 'public'));

app.use((req,res,next) => {
    console.log(`${req.url} ${req.method}`);
    next();
});

router.get('/',  (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.use(router)

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'))
