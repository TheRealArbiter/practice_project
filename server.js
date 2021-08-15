const express = require('express')
const app = express()
const server = app.listen(8000, 'localhost', function(err) {
    if(err) return console.log(err)
    console.log('Listening on port 8000')
})

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes').index);
