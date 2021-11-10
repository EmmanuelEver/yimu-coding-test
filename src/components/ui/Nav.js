import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <nav className="nav">
                <div className="nav__logo">
                    <img src="https://westshade.com/images/icon/logo-site-dark-header.png" alt="logo"/>
                </div>
                <ul className="nav__links">
                    <li>
                        <Link to="/canopy-tent">
                            CANOPY TENT
                        </Link>
                    </li>
                    <li>
                        <Link to="/umbrella">
                            UMBRELLA
                        </Link>
                    </li>
                    <li>
                        <Link to="/canopy-tent">
                            CUSTOM PRINTING
                        </Link>
                    </li>
                    <li>
                        <Link to="/accessories">
                            ACCESSORIES
                        </Link>
                    </li>
                </ul>
                <div className="nav__actions">
                    <Link to="cart">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        color="#323232"
                        style={{ width: 22, height: 22 }}
                        >
                        <path
                            fill="#323232"
                            d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                        ></path>
                        </svg>
                    </Link>

                    <Link to="my-account">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        color="#323232"
                        style={{ width: 22, height: 22 }}
                        >
                        <path
                            fill="#323232"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78A7.893 7.893 0 0112 20c-1.86 0-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
                        ></path>
                        </svg>
                    </Link>
                </div>
            </nav>
        </div>
    )
}


export default Nav
