import React, { useContext, useState } from 'react';
import { UserContext } from '../context';
const Home = () => {
    const {user , setUser} = useContext(UserContext)
    const [input , setInput] = useState({name: ''})
    const submit = e => {
        e.preventDefault()
        setUser({...user,isLoggedIn: true, ...input})
        setInput({ name: ''})
    }
    return (
        <div >
        {
        user.isLoggedIn ? (
            <div>
                <h3>
                    Welcome {user.name} You Have logged In
                </h3>
                <button className="btn" onClick={() => setUser({...user, isLoggedIn: false})}>
                    Logout
                </button>
            </div>
        ) : (
            <div >
                <h3>Home Page</h3>
                <form onSubmit={submit}>
                    <input
                        value={user.name}
                        type='text'
                        onChange={e => setInput({...input, name: e.target.value})}
                        placeholder= 'Enter Your Name'
                        />
                    <button type='submit'>login</button>
                </form>
            </div>
        )
        }
        </div>
    )
}
export default Home;