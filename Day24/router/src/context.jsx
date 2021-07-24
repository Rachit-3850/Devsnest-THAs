import React,{useContext,useState} from 'react'
const User = {
    name: null,
    isLoggedIn: false,
}
export const UserContext = React.createContext()

export const UserProvider = ({children}) => {
    const [user , setUser] =useState(User)
    return (
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}