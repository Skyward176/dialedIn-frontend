import { createContext, useContext, useState } from "react";

const UserContext = createContext()
const LoginUserContext = createContext()
export function useUser() {
    return useContext(UserContext)
}
export function UserProvider({ children }) {
    const [user, setUser] = useState({
        'isAuthenticated': false,
        'username': null,
        'user_id': null
    })
    const loginHandler = () => {
        setUser({
            'isAuthenticated': true
        })
    }
    return (
        <UserContext.Provider value = {[user, loginHandler]}>
                {children}
        </UserContext.Provider>
    )
}
