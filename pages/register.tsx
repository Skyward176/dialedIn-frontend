import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import HorizontalNavbar from '../components/HorizontalNavbar'
export default function Register(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState(0)
    const [email, setEmail] = useState(0)
    const router = useRouter()
    const baseURL= 'http://localhost:8000'
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(
            baseURL + '/register/', {
                'username': username,
                'password': password,
                'email': email
            }        
        ).then(function (response) {

            router.push('/login') 
        }).catch( function (error) {
            console.log(error)
        });
    }

    const handleUsernameChange= (e) => {
        setUsername(e.target.value)
    }

    const handleEmailChange= (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange= (e) => {
        setPassword(e.target.value)
    }
    return(
        <>
            <HorizontalNavbar/>
            <div className = 'bg-white flex flex-col w-full h-screen items-center justify-center text-center'>
                <div className='bg-black flex flex-col w-1/2 h-1/2 py-4 px-12 rounded-lg border-green-300 border-1 justify-center text-center'>
                    <p className='my-4 text-mint-green font-sans font-extralight text-4xl text-left'>Register</p>
                    <hr className='border-very-yellow'/>
                    <form className='w-full' onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full'>
                            <label className='text-left font-light font-sans text-xl text-gray-50 my-2' >Username: </label>
                            <input className='bg-gray-900 rounded-md p-2 text-gray-50 font-extralight'onChange={handleUsernameChange} placeholder='Username' type='text'/>
                            <label className='text-left font-light font-sans text-xl text-gray-50 my-2'>Email: </label>
                            <input className='bg-gray-900 rounded-md p-2 font-extralight text-gray-50'onChange={handleEmailChange} placeholder='Email'type='text'/>
                            <label className='text-left font-light font-sans text-xl text-gray-50 my-2'>Password: </label>
                            <input className='bg-gray-900 rounded-md p-2 text-gray-50 font-extralight' onChange={handlePasswordChange} placeholder='Password' type='password'/>
                            <input 
                                className='hover:border-very-yellow-light hover:border hover:text-very-yellow-light font-extralight bg-mint-green w-1/5 my-6 py-1 rounded-md font-sans text-3xl text-gray-50' 
                                type='submit' 
                                value='Register!'
                            />
                        </div> 
                    </form>
                </div>
            </div>
        </>
    )
}
