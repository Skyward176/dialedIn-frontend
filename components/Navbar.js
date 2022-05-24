import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import MenuButton from '../components/MenuButton.js'
import Link from 'next/link'

export default function Navbar() {
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
                    <MenuButton href='/' icon={faStopwatch} text='Home'  />
                </li>
                <li>
                    <MenuButton href='/history' icon={faList} text='History' />
                </li>
                <li className='absolute bottom-0 w-full'>
                        <MenuButton href='/settings' icon={faGears} text='Settings' />
                </li>
            </ul>
        </div>
    )
}
