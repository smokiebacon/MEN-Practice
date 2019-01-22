//requires
const houseControl = require('../controllers/houses');
const express = require('express');
const router = express.Router();

//model data
const House = require('../models/houses.js');

//7 restful routes

//index route
router.get('/', houseControl.index);
//new 
router.get('/new', houseControl.new);

//create, POSTing data to server
router.post('/', houseControl.create);

//EDIT, GETing a form to show to edits
router.get('/:id/edit', houseControl.edit);

//update PUTing data into the data
router.put('/:id/edit', houseControl.update);

//show which is //:id
router.get('/:id', houseControl.show);
//delete
router.delete('/:id', houseControl.delete);

module.exports = router;