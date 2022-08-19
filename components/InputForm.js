import MenuButton from './MenuButton'
import SubmitButton from './SubmitButton'
import Select from 'react-select'
import axios from 'axios'
import { useEffect, useState} from 'react'

const baseURL= 'http://localhost:8000'
export function InputFormTop(props) {
    const [options, setOptions] = useState(0)
    useEffect(() => {
        axios.get(baseURL+'/coffees').then((res)=>{
            let data = res.data.results
            return data
        }).then((data) => {
            setOptions(data)    
        }).catch((err) => console.log(err))
    }, []);
    return (
        <div>
            <input onInput= {props.mass1Handler} type='range' min='0' max='20' name='Mass In'></input>
            <Select onChange={props.selectionHandler} options = {options} getOptionLabel={(options) => options['coffee_name']} getOptionValue={(options)=>options['coffee_name']}/>
        </div>
    )
}
export function InputFormBottom(props) {
    
    return (
        <div>
            <input onInput= {props.mass2Handler} type='range' min='0' max='20' name='Yield Out'></input>
            <SubmitButton text='submit' />
        </div>
    )
}
