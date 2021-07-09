import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <a href=""><h1>Snaphunt</h1></a>
                </div>

                <div className="nav-list">
                    <ul>
                        <li><Link to="/"> HOME </Link></li>
                        <li><Link to="/login"> LOGIN </Link></li>
                        <li><Link to="/signup">SIGNUP </Link></li>
                    </ul>
                </div>
            </nav>

            <div className="heading">
                <h1>Welcome to Snaphunt</h1>
            </div>
        </>
    )
}

export default Header
