const express = require("express");
const router = express.Router();
const Blog_post = require("../models/Blog_posts");

router.get("/", (req, res) => {
    Blog_post.query()
        .eager("customers")
        .then(result => res.send(result));
});

router.get("/:id", (req, res) => {
    Blog_post.query()
        .findById(req.params.id)
        .eager("customers")
        .then(result => {
            res.json(result);
        });
});

router.post("/", (req, res) => {
    Blog_post.query()
        .insert(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
    Blog_post.query()
        .findById(req.params.id)
        .patch(req.body)
        .returning("*")
        .then(updatedBlog_post => res.json(updatedBlog_post));
});

router.delete("/:id", (req, res) => {
    Blog_post.query()
        .deleteById(req.params.id)
        .returning("*")
        .then(deletedBlog_post => res.json(deletedBlog_post));
});

module.exports = router;
