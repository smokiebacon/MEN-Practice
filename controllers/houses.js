const House = require('../models/houses');
module.exports = {
    index: (req, res) => {
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
    },
    new: (req, res) => {
        res.render('../views/new.ejs');
    },

    create: (req, res) => {
        House.create(req.body, (err, createdHouse) => {
            if (err) {
                res.send(err)
            } else {
               console.log(createdHouse);
               res.redirect('/houses');
            }
        })
   },
   edit: (req, res) => {
    House.findById(req.params.id, (err, editedHouse) => {
        err ? res.send(err) : res.render('../views/edit.ejs', {
            house: editedHouse
            })
        })
    },
    update: (req, res) => {
        House.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedHouse) => {
            err ? res.send(err) : res.redirect('/houses')
        })
    },

    show: (req, res) => {
        House.findById(req.params.id, (err, foundHouse) => {
            err ? res.send(err) : res.render('../views/show.ejs', {
                house: foundHouse
            })
        })
    },

    delete: (req, res) => {
        House.findOneAndRemove(req.params.id, (err, deletedHouse) => {
            err ? res.send(err) : res.redirect('/houses');
        })
    }
}