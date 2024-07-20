import React, { useEffect, useState } from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Recipes = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [prevSearch, setPrevSearch] = useState([]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    const handleSearchRecipes = (searchTerm) => {
        if (searchTerm.trim() !== '') {
            setPrevSearch(prev => [...prev, searchTerm]);
            const filtered = recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredRecipes(filtered);
            console.log(filteredRecipes);
        }
        else {
            setFilteredRecipes(recipes);
        }
    }

    const clearSearches = () => {
        setPrevSearch([]);
    }

    const recipes = [
        {
            title: "hamburger",
            image: "img/gallery/img_1.jpg",
            chef: "img/top-chefs/img_1.jpg",
            description: "Just a normal burger."
        },
        {
            title: "food",
            image: "img/gallery/img_2.jpg",
            chef: "img/top-chefs/img_2.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores sequi tenetur consequatur alias. Cum nostrum distinctio dolorum officiis suscipit architecto, voluptas, at nisi, aperiam iste adipisci laudantium sed sint."
        },
        {
            title: "fancy food",
            image: "img/gallery/img_3.jpg",
            chef: "img/top-chefs/img_3.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim commodi corporis aliquid nesciunt repellat expedita architecto qui, ex vitae, aliquam, quo ipsa. Quidem placeat magnam repellendus amet iusto odit sequi!"
        }
    ]

    useEffect(() => {
        setFilteredRecipes(recipes);
    }, // eslint-disable-next-line
        [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <PreviousSearches prevSearch={prevSearch} />
            <div className='search-box'>
                <button className='btn' onClick={clearSearches}>clear searches</button>
                <input type="text" placeholder='search...' onChange={handleInputChange} />
                <button className='btn'>
                    <FontAwesomeIcon icon={faSearch} onClick={() => handleSearchRecipes(searchTerm)} />
                </button>
            </div>
            <div className='recipe-container'>
                {filteredRecipes.map((recipe, i) =>
                    <RecipeCard key={i} recipe={recipe} />
                )}
            </div>
        </div>
    )
}

export default Recipes
