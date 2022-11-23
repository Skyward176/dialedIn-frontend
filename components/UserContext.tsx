import { createContext, useContext, useState } from "react";
import axios from 'axios'
import {useCookies}from 'react-cookie'

const UserContext = createContext()
const SetUserContext = createContext()
const baseURL = 'http://localhost:8000'
export function useUser() {
    return useContext(UserContext)
}
export function useSetUser() {
    return useContext(SetUserContext)
}

export function UserProvider({ children }) {
    const [cookies, setCookies, removeCookies] = useCookies()
    const [user, setUser] = useState({
        'isAuthenticated': false,
        'username': null,
        'user_id': null
    })

    return (
        <UserContext.Provider value = {user}>
            <SetUserContext.Provider value={setUser}>
                {children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    )
}
