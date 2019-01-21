//requires
const express = require('express');
const router = express.Router();


//model data
const House = require('../models/houses.js');

//7 restful routes

//index route
router.get('/', (req, res) => {
    House.find({}, (err, allHouse) => {
        if (err) {
            res.send(err)
        } else {
           console.log(allHouse);
           res.render('../views/index.ejs', {
           house: allHouse //key becomes a variable inside the template
           });
        }
    });
})
//new 
router.get('/new', (req, res) => {
    res.render('../views/new.ejs');
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
     })
})

//edit, getting a form to show to edits
router.get('/:id/edit', (req, res) => {
    House.findByIdAndUpdate(req.params.id, (err, editedHouse) => {
        err ? res.send(err) : res.render('/../views/edit.ejs', {
            house: editedHouse
        })
    })
})
//update PUTing data into the data
router.put('/:id', (req, res) => {

})


//show which is //:id
router.get('/:id', (req, res) => {
    House.findById(req.params.id, (err, foundHouse) => {
        err ? res.send(err) : res.render('../views/show.ejs', {
            house: foundHouse
        })
    })

})
//delete
router.delete('/:id', (req, res) => {
    House.findOneAndRemove(req.params.id, (err, deletedHouse) => {
        err ? res.send(err) : res.redirect('/houses');
    })
})

module.exports = router;