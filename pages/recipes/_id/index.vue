<template> 
    <section class="single-recipe">
        <h1>{{ recipe.title }}</h1>
        <div>
            <img class="recipe image" :src="recipe.thumbnail" alt="">
        </div>
        <p>{{recipe.description}}</p>
    </section>
</template> 

<script>
import axios from 'axios';

export default {
    async asyncData(context) {
        const response = await axios.get('http://localhost:5000/api/recipes/');
        return {recipe: response.data.find(recipe=>recipe._id === context.params.id)}
    }
}
</script>

<style scoped>
.single-recipe {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px
}

.recipe-image{
    width: 100%;
}

</style>