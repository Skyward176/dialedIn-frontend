import MenuButton from './MenuButton'
import SubmitButton from './SubmitButton'
import Select from 'react-select'
import axios from 'axios'
import { useEffect } from 'react'

const baseURL= 'http://localhost:8000'
export function InputFormTop() {
    const options = [{ value: 'coffeeid1', label: 'coffee 1' }]
    useEffect(() => {
        axios.get(baseURL+'/coffees').then((response)=>{console.log(response)})
    }, []);
    return (
        <div>
            <input type='range' min='0' max='20' name='Mass In'></input>
            <Select options={options} />
        </div>
    )
}
export function InputFormBottom() {
    return (
        <div>
            <input type='range' min='0' max='20' name='Yield Out'></input>
            <SubmitButton text='submit' />
        </div>
    )
}
