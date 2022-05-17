import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState }from 'react'
export default function MenuButton (props) {
    const [state, setState] = useState(props.clicked)
    const onClickHandler = () => {
        console.log('click event fired')
        setState(!state)
    }
    if(state){
        return(
            <div className='text-orange-600 bg-gray-800 rounded-lg flex place-items-center px-1 font-sans' onClick = {onClickHandler}> <FontAwesomeIcon className= 'h-8 m-4' icon={props.icon}/> <p className='text-2xl'>{props.text}</p></div>
        );
    } else {
        return(
            <div className='bg-black flex place-items-center px-1 font-sans' onClick = {onClickHandler}> <FontAwesomeIcon className= 'h-8 m-4 text-white' icon={props.icon}/> <p className='text-2xl text-gray-50'>{props.text}</p></div>
        );
    }
}
