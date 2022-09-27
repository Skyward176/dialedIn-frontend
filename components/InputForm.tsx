import SubmitButton from './SubmitButton'
import Select from 'react-select'
import axios from 'axios'
import { useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import {useTokenContext} from '../components/TokenContext'


const baseURL= 'http://localhost:8000'
export function InputFormTop(props) {
    const [options, setOptions] = useState(0)
    const [cookies, setCookies, removeCookies] = useCookies()

    //const preflightRequest = useTokenContext()
    const tokenPreflight = () => {
        axios.post(
            baseURL + '/token/validate', {
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
                            Authorization: `Bearer ${cookies['access']}`,
                            'Content-Type': 'application/json',
                        }
                    }        
                ).then(function (response){
                    setCookies('access',response.data.access)
                    setCookies('refresh',response.data.refresh)
                    console.log('Tokens Refreshed')
                })
            } else {
                console.log(error)
            }
        });
    }
    useEffect(() => {
        tokenPreflight()
        axios.get(baseURL+'/coffees', {
            headers: {
                'Authorization': `Bearer ${cookies['access']}`,
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            let data = res.data.results
            return data
        }).then((data) => {
            setOptions(data)    
        }).catch((err) => console.log(err))
    }, []);
    return (
        <div>
            <input onInput= {props.mass1Handler} type='range' min='0' max='20' name='Mass In'></input>
            <Select onChange={props.selectionHandler} options = {options} getOptionLabel={(options) => options['coffee_name']} getOptionValue={(options)=>options['id']}/>
        </div>
    )
}
export function InputFormBottom(props) {
    return (
        <div>
            <input onInput= {props.mass2Handler} type='range' min='0' max='40' name='Yield Out'></input>
            <SubmitButton onClick={props.submitHandler} text='Submit'/>
        </div>
    )
}
