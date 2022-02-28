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
