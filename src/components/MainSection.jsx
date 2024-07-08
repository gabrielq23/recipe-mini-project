import React from 'react'
import CustomImage from './CustomImage'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const MainSection = () => {

    const navigate = useNavigate();

    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg"
    ]

    const redirectToRecipes = () => {
        navigate('/recipes');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='section main'>
            <div className='col typography'>
                <h1 className='title'>
                    intro to food and recipes
                </h1>
                <p className='info'>
                    A place to find recipes for many different foods
                </p>
                <button onClick={redirectToRecipes} className='btn'>
                    EXPLORE NOW
                </button>
            </div>
            <div className='col gallery'>
                {images.map((image, i) =>
                    <CustomImage key={i} pt={"90%"} imgSrc={image} />
                )}
            </div>
        </div>
    )
}

export default MainSection
