import { useState, useEffect } from 'react'
const Timer = (props) => {
    const [isActive, setIsActive] = useState(false)

    function toggle() {
        setIsActive(!isActive)

    }

    function reset() {
        props.setSeconds(0)
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                props.setSeconds((seconds) => seconds + 1)
            }, 1000)
        } else if (!isActive && props.seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, props.seconds])
    const timerHandler = () => {
        if(!isActive) {
            if(props.seconds != 0){
                reset()
            }else{
                toggle()
            }
        } else{
            toggle()
        }
    }
    return (
        <p onClick={timerHandler} className='text-black font-extralight text-[20rem]'>
            {props.seconds}
        </p>
    )
}
export default Timer
