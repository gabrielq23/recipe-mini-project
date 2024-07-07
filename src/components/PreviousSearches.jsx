import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const PreviousSearches = () => {

    const searches = [
        'pizza', 'hamburger'
    ]

    return (
        <div className='previous-searches section'>
            <h2>previous searches</h2>
            <div className='previous-searches-container'>
                {searches.map((search, i) => (
                    <div key={i} style={{ animationDelay: i * .1 + "s" }} className='search-item'>
                        {search}
                    </div>
                ))}
            </div>
            <div className='search-box'>
                <input type="text" placeholder='search...' />
                <button className='btn'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default PreviousSearches
