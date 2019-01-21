require('./db/db')
//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const housesRouter = require('./routers/houses.js')

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));



//routers
app.use('/houses', housesRouter); //should be plural //this is naming our home route essentially



//listeners
app.listen(3000, () => {
    console.log('Listening on port 3000');
})

