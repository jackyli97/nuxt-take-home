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
export default {
    asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve({
                    recipe: [
                        {
                            id: "1",
                            title: "Donuts and Burgers",
                            previewText: "Endulge in some junk food!",
                            description: "This is a really good meal",
                            thumbnail: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg"
                        },
                                                    {
                            id: "2",
                            title: "Veggies",
                            previewText: "Very tasty and nutritious!",
                            description: "This is a really good meal",
                            thumbnail: "https://covid19.lacounty.gov/wp-content/uploads/GettyImages-1128687123-1024x683.jpg"
                        }
                    ].find(recipe=>recipe.id === context.params.id)
                })
            }, 1500)
        })
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