import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context';

const NavBar = () => {
    const {user} = useContext(UserContext)

    return (
        <nav>
            <ul className="container">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    {
                        user.isLoggedIn ? (
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                        ) : (
                            <li>
                                Profile
                            </li>
                        )
                    }
                </li>
                <li>
                    {
                        user.isLoggedIn ? (
                            <li>
                                <Link to='/dashboard'>Dashboard</Link>
                            </li>
                        ) : (
                            <li>
                                Dashboard
                            </li>
                        )
                    }
                </li>
                
                
            </ul>
        </nav>
    )
}
export default NavBar