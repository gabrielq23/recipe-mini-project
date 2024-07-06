import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Sidebar = ({ closeSidebar, links }) => {

    const location = useLocation();

    return (
        <div className='sidebar'>
            {links.map(link =>
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            )}
        </div>
    )
}

export default Sidebar
