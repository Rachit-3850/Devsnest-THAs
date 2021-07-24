import React, { useContext } from 'react';
import { UserContext } from '../context';
const DashBoard = () => {
    const {user} =useContext(UserContext)
    return (
        <div>
            <h3>Private Route</h3>
            <h3>DashBoard for {user.name}</h3>
        </div>
    )
}
export default DashBoard;