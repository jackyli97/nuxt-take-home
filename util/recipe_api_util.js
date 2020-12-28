import axios from 'axios';

export const fetchRecipes = () => {
    return axios.get('/api/recipes/')
};

export const fetchRecipe = (recipeId) => {
    return axios.get('/api/reci[es/' + channelId)
}

export const createRecipe = recipe => {

    return axios({
        method: 'post',
        url: '/api/recipes/',
        data: recipe,
    })
}