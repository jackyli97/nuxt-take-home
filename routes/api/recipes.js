const express = require("express");
const Recipe = require("../../models/Recipe");
const router = express.Router();

/**
 * @swagger
 * /api/recipes:
 *  get:
 *     description: Get all recipes
 *     responses:
 *      200:
 *          description: Success
 *      400:
 *          description: Error
 */

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

/**
 * @swagger
 * /api/recipes:
 *  post:
 *      description: Create new recipe
 *      parameters:
 *      - name: title
 *        in: formData
 *        required: true
 *        type: string
 *      - name: description
 *        in: formData
 *        required: true
 *        type: string
 *      - name: previewText
 *        in: formData
 *        required: true
 *        type: string
 *      - name: thumbnail
 *        description: Image URL
 *        in: formData
 *        required: true
 *        type: string
 *      responses:
 *          200:
 *              description: Created
 *          500:
 *              description: Internal Service Error
 */

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