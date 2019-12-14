const express = require("express");
const router = express.Router();
const Pin = require("../models/Pin_products");

router.get("/", (req, res) => {
    Pin.query()
        .then(result => res.send(result));
});

router.get("/:id", (req, res) => {
    Pin.query()
        .findById(req.params.id)
        .then(result => res.json(result));
});

router.post("/", (req, res) => {
    Pin.query()
        .insert(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
    Pin.query()
        .findById(req.params.id)
        .patch(req.body)
        .returning("*")
        .then(updatedPin => res.json(updatedPin));
});

router.delete("/:id", (req, res) => {
    Pin.query()
        .deleteById(req.params.id)
        .returning("*")
        .then(deletedPin => res.json(deletedPin));
});

module.exports = router;
