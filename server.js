let express = require('express');
let path = require('path');
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
let app = express();
app.set('views engine','html');
app.set('views',path.resolve('views'));
app.use(express.static(path.resolve('node_modules')));
app.engine('html',require('ejs').__express);
app.use('/', index);
app.use('/user', user);
app.use('/article', article);

app.listen(8080);