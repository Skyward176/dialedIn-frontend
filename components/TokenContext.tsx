import {useContext, createContext} from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'

const TokenValidateContext = createContext(()=>{})
const baseURL = 'localhost:8000'
export function useTokenContext() {
    return useContext(TokenValidateContext)
}
export function TokenValidateProvider({children}) {
    const [cookies, setCookies, removeCookies] = useCookies()
    const tokenPreflight = () => {
        axios.post(
            baseURL + '/token/validate/', {
                headers: {
                    Authorization: `Bearer ${cookies['access']}`,
                    'Content-Type': 'application/json',
                }
            }        
        ).catch(function (error) {
            if(error.response){
                axios.post(
                    baseURL + '/token/', {
                        headers: {
                            Authorization: `Bearer ${cookies['refresh']}`,
                            'Content-Type': 'application/json',
                        }
                    }        
                ).then(function (response){
                    setCookies('access',response.data.access)
                    setCookies('refresh',response.data.refresh)
                })
            } else {
                console.log("Error in preflight")
                console.log(error)
            }
        });
    }
    return(
        <TokenValidateContext.Provider value = {{tokenPreflight}}>
            {children}
        </TokenValidateContext.Provider>
    )
}
