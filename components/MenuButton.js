import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
export default function MenuButton(props) {
    const [state, setState] = useState(props.clicked)
    const onClickHandler = () => {
        console.log('click event fired')
        setState(!state)
    }
    if (state) {
        return (
            <div
                className='text-gray-50 bg-gray-800 rounded-lg flex place-items-center px-1 font-sans'
                onClick={onClickHandler}
            >
                <FontAwesomeIcon className='h-6 m-4' icon={props.icon} />{' '}
                <p className='text-lg text-gray-50'>{props.text}</p>
            </div>
        )
    } else {
        return (
            <div
                className='bg-black flex place-items-center px-1 font-sans'
                onClick={onClickHandler}
            >
                <FontAwesomeIcon
                    className='h-6 m-4 text-gray-50'
                    icon={props.icon}
                />{' '}
                <p className='text-lg text-gray-50'>{props.text}</p>
            </div>
        )
    }
}
