const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    previewText: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true  
    },
    thumbnail: {
        type: String,
        default: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg" 
    }
})

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;