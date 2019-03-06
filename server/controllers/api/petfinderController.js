const petfinderController = require("express").Router();
const axios = require("axios");
const db = require("../../models/index")

petfinderController.get("/all", (req, res) => {
    return axios.get("https://api.petfinder.com/shelter.getPets?format=json&id=NC664&key=95a099fdfd65ce480430c8c00c9e5a11")
    .then(results => res.json(results.data.petfinder.pets.pet))
    .catch(err => {if (err) throw err})
})

petfinderController.post("/create", (req, res) => {

    db.Dogs.create({ 
        image: req.body.media.photos.photo[3].$t, 
        dogId: req.body.id.$t,
        name: req.body.name.$t, 
        age: req.body.age.$t, 
        breed: req.body.breeds.breed.$t, 
        sex: req.body.sex.$t, 
        size: req.body.size.$t, 
        description: req.body.description.$t })
    .then(dbDogs => res.json(dbDogs))
    .catch(err => {if (err) throw err})
})

petfinderController.get("/bio/:id", (req, res) => {
    db.Dogs
    .findById(req.params.id)
    .then(dbDog => res.json(dbDog))
    .catch(err => res.status(422).json(err));
})

petfinderController.get("/alldogs", (req, res) => {
    db.Dogs
    .find(req.query)
    .sort({ date: -1 })
    .then(dbDog => res.json(dbDog))
    .catch(err => res.status(422).json(err));

})

module.exports = petfinderController