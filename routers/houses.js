//requires
const express = require('express');
const router = express.Router();


//model data

//7 restful routes

//index route
router.get('/', (req, res) => {

})
//new 
router.get('/new', (req, res) => {

})


//create, POSTing data to server
router.post('/', (req, res) => {

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