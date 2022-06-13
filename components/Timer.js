import { useState, useEffect } from 'react'
import {InputFormTop, InputFormBottom} from './InputForm'
const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function toggle() {
        setIsActive(!isActive)
    }

    function reset() {
        setSeconds(0)
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1)
            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])
    return (
        <div className='absolute flex flex-col top-0 right-0 w-5/6 h-screen items-center justify-center text-center'>
            <InputFormTop/>
            <p onClick={toggle} className='text-black font-extralight text-[20rem]'>
                {seconds}
            </p>
            <InputFormBottom/>
        </div>
    )
}
export default Timer
