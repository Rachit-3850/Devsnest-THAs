import React, { useContext } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { UserContext } from '../context';

const NavBar = () => {
    const {user} = useContext(UserContext)

    return (
        <nav>
            <ul className="container">
                <li>
                    <NavLink to='/' activeStyle={{color: 'green'}} exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeStyle={{color: 'green'}} exact>About</NavLink>
                </li>
                <li>
                    {
                        user.isLoggedIn ? (
                            <li>
                                <NavLink to='/profile' activeStyle={{color: 'green'}} exact>Profile</NavLink>
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
                                <NavLink to='/dashboard' activeStyle={{color: 'green'}} exact>Dashboard</NavLink>
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