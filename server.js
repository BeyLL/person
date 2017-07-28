let express = require('express');
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
let app = express();
app.use('/', index);
app.use('/user', user);
app.use('/article', article);
app.listen(8080);