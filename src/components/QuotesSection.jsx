import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuotesSection = () => {
    return (
        <div className='section quote'>
            <p className='quote-text'>
                <FontAwesomeIcon icon={faQuoteLeft} />
                The belly rules the mind.
            </p>
            <p className='quote-author'>
                - Spanish Proverb
            </p>
        </div>
    )
}

export default QuotesSection
