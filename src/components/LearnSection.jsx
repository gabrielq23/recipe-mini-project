import React from 'react'

const LearnSection = () => {

    const list = [
        "learn new recipes",
        "cook your own meals",
        "get tips on cooking",
        "write your own recipes"
    ]

    return (
        <div className='section learn'>
            <div className='col img'>
                <img src="https://www.acouplecooks.com/wp-content/uploads/2022/02/Lava-Cake-005-735x919.jpg" alt="" />
            </div>
            <div className='col typography'>
                <h1 className='title'>
                    learn new recipes
                </h1>
                {list.map((item, i) =>
                    <p key={i} className='skill-item'>{item}</p>
                )}
                <button className='btn'>
                    SIGN UP
                </button>
            </div>
        </div>
    )
}

export default LearnSection
