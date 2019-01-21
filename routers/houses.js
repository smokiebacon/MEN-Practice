//requires
const express = require('express');
const router = express.Router();


//model data
const House = require('../models/houses.js');

//7 restful routes

//index route
router.get('/', (req, res) => {

})
//new 
router.get('/new', (req, res) => {
    res.render('../views/new');
})


//create, POSTing data to server
router.post('/', (req, res) => {
     House.create(req.body, (err, createdHouse) => {
         if (err) {
             res.send(err)
         } else {
            console.log(createdHouse);
            res.redirect('/houses');
         }
     } )
})

//edit, getting a form to show to ideas
router.get('/:id/edit', (req, res) => {

})
//update PUTing data into the data
router.put('/:id', (req, res) => {

})


//show which is //:id
router.get('/:id', (req, res) => {

})
//delete
router.delete('/:id', (req, res) => {

})

module.exports = router;