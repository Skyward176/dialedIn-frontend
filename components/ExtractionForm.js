import {InputFormBottom} from '../components/InputForm'
import {InputFormTop} from '../components/InputForm'
import Timer from '../components/Timer'
import { useState } from 'react'
const ExtractionForm = () => {
    const [selection, setSelection] = useState(0)
    const [mass1, setMass1] = useState(0)
    const [mass2, setMass2] = useState(0)
    //const handleSubmit
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
            <Timer/>
            <InputFormBottom mass2Handler={mass2Handler}/>
        </div>
    )
}
export default ExtractionForm
