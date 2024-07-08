import React, { useEffect } from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {

    const recipes = [
        {
            title: "hamburger",
            image: "img/gallery/img_1.jpg",
            chef: "/img/top-chefs/img_1.jpg",
            description: "Just a normal burger."
        },
        {
            title: "food",
            image: "img/gallery/img_2.jpg",
            chef: "/img/top-chefs/img_2.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores sequi tenetur consequatur alias. Cum nostrum distinctio dolorum officiis suscipit architecto, voluptas, at nisi, aperiam iste adipisci laudantium sed sint."
        },
        {
            title: "fancy food",
            image: "img/gallery/img_3.jpg",
            chef: "/img/top-chefs/img_3.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim commodi corporis aliquid nesciunt repellat expedita architecto qui, ex vitae, aliquam, quo ipsa. Quidem placeat magnam repellendus amet iusto odit sequi!"
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <PreviousSearches />
            <div className='recipe-container'>
                {recipes.map((recipe, i) =>
                    <RecipeCard key={i} recipe={recipe} />
                )}
            </div>
        </div>
    )
}

export default Recipes
