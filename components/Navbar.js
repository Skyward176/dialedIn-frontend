import Link from 'next/link'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import MenuButton from '../components/MenuButton.js'
import { useState } from 'react'

export default function Navbar() {
    const [state, setState] = useState({
        'active-button': 'Home',
    })
    const onClickHandler = (newActive) => {
        setState(newActive)
    }

    return (
        <div className='w-56 h-full bg-black shadow-lg absolute divide-y divide-gray-50'>
            <div className='inline-flex my-3 w-full justify-center'>
                <Link href='/'>
                    <p className='font-light font-sans text-4xl text-gray-50'>
                        dialed<span className='text-green-300'>In</span>
                    </p>
                </Link>
            </div>
            <ul className='list-none'>
                <li>
                    <Link href='/'>
                        <MenuButton icon={faStopwatch} text='Home' onClickHandler={onClickHandler} />
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <MenuButton icon={faList} text='History' clicked={false} />
                    </Link>
                </li>
                <li className='absolute bottom-0 w-full'>
                    <Link href='/'>
                        <MenuButton icon={faGears} text='Settings' clicked={false} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
