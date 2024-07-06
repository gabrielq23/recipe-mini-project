import React from 'react'
import ChefCard from './ChefCard'

const ChefSection = () => {

    const chefs = [
        {
            name: "chef eric",
            img: "/img/top-chefs/img_1.jpg",
            recipeCount: "10",
            cuisine: "mexican",
            link: "https://pathofexile.com/trade"
        },
        {
            name: "eric teo",
            img: "/img/top-chefs/img_2.jpg",
            recipeCount: "6",
            cuisine: "italian",
            link: "https://pathofexile.com/trade"
        },
        {
            name: "张 添 来",
            img: "/img/top-chefs/img_3.jpg",
            recipeCount: "12",
            cuisine: "chinese",
            link: "https://pathofexile.com/trade"
        }
    ]

    return (
        <div className='section chefs'>
            <h1 className='title'>known chefs</h1>
            <div className='chefs-container'>
                {chefs.map((chef, i) =>
                    <ChefCard key={i} chef={chef} />
                )}
            </div>
        </div>
    )
}

export default ChefSection
