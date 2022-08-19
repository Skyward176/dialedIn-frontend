import MenuButton from './MenuButton'
import SubmitButton from './SubmitButton'
import Select from 'react-select'
import axios from 'axios'
import { useEffect, useState} from 'react'

const baseURL= 'http://localhost:8000'
export function InputFormTop() {
    const [options, setOptions] = useState(0)
    useEffect(() => {
        axios.get(baseURL+'/coffees').then((res)=>{
            let data = res.data.results
            return data
        }).then((data) => {
            console.log(data)
            setOptions(data)    
        }).catch((err) => console.log(err))
    }, []);
    return (
        <div>
            <input type='range' min='0' max='20' name='Mass In'></input>
            <Select options = {options} getOptionLabel={(options) => options['coffee_name']} getOptionValue={(options)=>options['coffee_name']}/>
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
