const express = require("express");
const Recipe = require("../../models/Recipe");
const router = express.Router();

router.get("/", (req, res) => {
    Recipe
        .find()
        .sort({ title: -1 })
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json(err));
})

router.post("/", (req, res) => {
        const newRecipe = new Recipe({
            title: req.body.title,
            previewText: req.body.previewText,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
        })
        newRecipe.save().then(recipe => {
            return res.json(recipe)
        })
    })

module.exports = router;