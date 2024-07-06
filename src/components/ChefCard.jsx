import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const ChefCard = ({ chef }) => {
    return (
        <div className='chef-card'>
            <img src={chef.img} alt="" />
            <div className='chef-card-info'>
                <h3 className='chef-card-name'>{chef.name}</h3>
                <p className='chef-recipe-count'>recipes: <b>{chef.recipeCount}</b></p>
                <p className='chef-cuisine'>cuisine: <b>{chef.cuisine}</b></p>
                <p className='chef-icons'>
                    {/* <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} /> */}
                    <a href={chef.link}><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={chef.link}><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={chef.link}><FontAwesomeIcon icon={faInstagram} /></a>
                </p>
            </div>
        </div>
    )
}

export default ChefCard
