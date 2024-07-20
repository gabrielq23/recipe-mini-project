import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [showSideBar, setShowSideBar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/recipe-mini-project/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipe-mini-project/recipes",
            icon: faList
        },
        // {
        //     name: "Settings",
        //     path: "/recipe-mini-project/settings",
        //     icon: faCog
        // }
    ]

    const closeSidebar = () => {
        setShowSideBar(false);
    }

    return (
        <>
            <div className='navbar container'>
                <Link to="/recipe-mini-project/" className='logo'>food and recipes website</Link>
                <div className='nav-links'>
                    {links.map(link =>
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )}
                </div>
                <div onClick={() => setShowSideBar(!showSideBar)} className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
            {showSideBar ? <Sidebar closeSidebar={closeSidebar} links={links} /> : null}
        </>
    )
}

export default Navbar
