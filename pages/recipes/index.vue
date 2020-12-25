<template>
    <section class="recipes"> 
        <Recipe 
            v-for="recipe in recipes"
            :key="recipe.id"
            :thumbnail="recipe.thumbnail"
            :title="recipe.title"
            :id="recipe.id"
            :previewText="recipe.previewText"
        />
    </section>
</template>

<script>
    import Recipe from '@/components/Recipe'

    export default {
        components: {
            Recipe
        },
        asyncData() {
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve({
                        recipes: [
                            {
                                id: "1",
                                title: "Donuts and Burgers",
                                previewText: "Endulge in some junk food!",
                                thumbnail: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg"
                            },
                                                        {
                                id: "2",
                                title: "Veggies",
                                previewText: "Very tasty and nutritious!",
                                thumbnail: "https://covid19.lacounty.gov/wp-content/uploads/GettyImages-1128687123-1024x683.jpg"
                            }
                        ]
                    })
                }, 1500)
            })
        }
    }
</script>

<style scoped>
.recipes{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
</style>