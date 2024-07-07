import React from 'react'
import CustomImage from './CustomImage'

const RecipeCard = ({ recipe }) => {



    return (
        <div className='recipe-card'>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className='recipe-card-info'>
                <img className='chef-image' src={recipe.chef} alt="" />
                <p className='recipe-title'>{recipe.title}</p>
                <p className='recipe-description'>{recipe.description}</p>
                <a className='view-recipe-btn' href="#!">View Recipe</a>
            </div>
        </div>
    )
}

export default RecipeCard
