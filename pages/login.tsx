import axios from "axios"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useRouter } from "next/router"
import { useUser } from '../components/UserContext'
export default function Login () {
    const [username, setUsername] = useState(0)
    const [password, setPassword] = useState(0)
    const [cookies, setCookies, removeCookies] = useCookies()

    
    const router = useRouter()
    const baseURL= 'http://localhost:8000'
    const [user, setUser] = useUser()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(
            baseURL + '/token/', {
                'username': username,
                'password': password
            }        
        ).then(function (response) {
            setCookies('access',response.data.access)
            setCookies('refresh',response.data.refresh)

            setUser() 

            router.push('/') 
        }).catch( function (error) {
            console.log(error)
        });
    }

    const handleUsernameChange= (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange= (e) => {
        setPassword(e.target.value)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: <input onChange={handleUsernameChange} type='text'/></label>
                <label>Password: <input onChange={handlePasswordChange}type='text'/></label>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}
