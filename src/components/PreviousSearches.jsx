

const PreviousSearches = ({ prevSearch }) => {

    return (
        <div className='previous-searches section'>
            <h2>previous searches</h2>
            <div className='previous-searches-container'>
                {prevSearch.map((search, i) => (
                    <div key={i} style={{ animationDelay: i * .1 + "s" }} className='search-item'>
                        {search}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PreviousSearches
