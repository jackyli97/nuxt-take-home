<template>
    <section class="recipes-container">
        <div class="recipes">
            <Recipe
                v-for="recipe in recipes"
                :key="recipe.id"
                :thumbnail="recipe.thumbnail"
                :title="recipe.title"
                :id="recipe.id"
                :previewText="recipe.previewText"
            />
        </div> 
        <form @submit.stop.prevent="submit()" class="new-recipe">
            <h1>Add New Recipe</h1>
            <input type="text" name="title" v-model="title" placeholder="Title">
            <input type="text" name="previewText" v-model="previewText" placeholder="Preview Text">
            <input type="text" name="description" v-model="description" placeholder="Description">
            <input type="text" name="thumbnail" v-model="thumbnail" placeholder="Thumbnail URL">
            <input type="submit" value="Submit">
        </form>
    </section>
</template>

<script>
    import Recipe from '@/components/Recipe';
    import axios from 'axios';

    export default {
        data(){
            return {
                title : null,
                description : null,
                previewText : null,
                thumbnail : null
            }
        },
        methods: {
            submit(){
                return axios.post('http://localhost:5000/api/recipes/',{title: this.title, description: this.description, previewText: this.previewText, thumbnail: this.thumbnail}).then(res=>{
                    this.$router.push("/recipes/" + res.data._id);
                })
                //if you want to send any data into server before redirection then you can do it here
            }
        },
        components: {
            Recipe
        },
            async asyncData() {
            const response = await axios.get('http://localhost:5000/api/recipes/')
            return {recipes: response.data}
            // return new Promise((resolve, reject) => {
            //     setTimeout(()=>{
            //         resolve({
            //             recipes: [
            //                 {
            //                     id: "1",
            //                     title: "Donuts and Burgers",
            //                     previewText: "Endulge in some junk food!",
            //                     thumbnail: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg"
            //                 },
            //                                             {
            //                     id: "2",
            //                     title: "Veggies",
            //                     previewText: "Very tasty and nutritious!",
            //                     thumbnail: "https://covid19.lacounty.gov/wp-content/uploads/GettyImages-1128687123-1024x683.jpg"
            //                 }
            //             ]
            //         })
            //     }, 1500)
            // })
        }
    }
</script>

<style scoped>
.recipes{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-left: 20px
}

.recipes-container {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}

.new-recipe {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    margin-right: 20px;
}
input, h1 {
    margin: 10px 0;
}
</style>