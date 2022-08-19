import { useState, useEffect } from 'react'
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
        <p onClick={toggle} className='text-black font-extralight text-[20rem]'>
            {seconds}
        </p>
    )
}
export default Timer
