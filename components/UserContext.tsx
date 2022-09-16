import { createContext, useContext, useState } from "react";
import axios from 'axios'
import {useCookies}from 'react-cookie'

const UserContext = createContext()
const UserLogin = createContext()
const baseURL = 'http://localhost:8000'
export function useUser() {
    return useContext(UserContext)
}
export function useUserLogin() {
    return useContext(UserLogin)
}

export function UserProvider({ children }) {
    const [cookies, setCookies, removeCookies] = useCookies()
    const [user, setUser] = useState({
        'isAuthenticated': false,
        'username': null,
        'user_id': null
    })

    const handleUserLogin = () => {
        axios.get(baseURL + '/profile/',{
            headers: {
                'Authorization': `Bearer ${cookies['access']}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setUser({
                'isAuthenticated': true,
                'username': res.data.username,
                'user_id': res.data.user_id
            })
        })
    }
    return (
        <UserContext.Provider value = {user}>
            <UserLogin.Provider value={handleUserLogin}>
                {children}
            </UserLogin.Provider>
        </UserContext.Provider>
    )
}
