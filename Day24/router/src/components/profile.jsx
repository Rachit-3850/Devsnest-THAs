import React, { useContext } from 'react';
import { UserContext } from '../context';
const Profile = () => {
    const {user} =useContext(UserContext)
    return (
        <div className="profile">
            <h3>About: Private Route</h3>
            <h3>Your Name Is {user.name}</h3>
        </div>
    )
}
export default Profile;