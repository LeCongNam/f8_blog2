const path = require('path')
const express = require('express')
const morgan = require('morgan');
const app = express()
const port = 3000
const handlebars  = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/new', (req, res) => {
    res.render('home');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})