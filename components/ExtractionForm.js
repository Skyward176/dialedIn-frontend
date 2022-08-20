import {InputFormBottom} from '../components/InputForm'
import {InputFormTop} from '../components/InputForm'
import Timer from '../components/Timer'
import { useState } from 'react'
import axios from 'axios'
const ExtractionForm = () => {

    const baseURL= 'http://localhost:8000'

    const [selection, setSelection] = useState(0)
    const [mass1, setMass1] = useState(0)
    const [mass2, setMass2] = useState(0)
    //timer state
    const [seconds, setSeconds] = useState(0)

    const handleSubmit = (e) => {
        console.log("Submit button triggered")
        axios.post(baseURL + '/extractions/', {
            "user_id": 1,
            "coffee_id": selection,
            "timestamp": new Date().toISOString(),
            "extraction_length": seconds,
            "mass_in": mass1,
            "mass_out": mass2,
            "notes": "Test"
        }).then(function (response){
            console.log(response);
        }).catch(function (error){
            console.log(error)
        });
    }
    const selectionHandler = (e) => {
        setSelection(e.id)
    }
    const mass1Handler = (e) => {
        setMass1(e.target.value)
        
    }
    const mass2Handler = (e) => {
        setMass2(e.target.value)
    }

    return (
        <div className='absolute flex flex-col top-0 right-0 w-5/6 h-screen items-center justify-center text-center'>
            <InputFormTop mass1Handler={mass1Handler} selectionHandler={selectionHandler}/>
            <Timer seconds = {seconds} setSeconds= {setSeconds}/>
            <InputFormBottom submitHandler = {handleSubmit} mass2Handler={mass2Handler}/>
        </div>
    )
}
export default ExtractionForm
