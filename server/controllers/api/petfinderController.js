const petfinderController = require("express").Router();
const axios = require("axios");

petfinderController.get("/all", (req, res) => {
    return axios.get("https://api.petfinder.com/shelter.getPets?format=json&id=NC664&key=95a099fdfd65ce480430c8c00c9e5a11")
    .then(results => res.json(results.data.petfinder.pets))
    .catch(err => {if (err) throw err})
})

module.exports = petfinderController