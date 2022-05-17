import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import MenuButton from '../components/MenuButton.js'
export default function Navbar () {
  return(
    <div className='w-60 h-full bg-black shadow-lg absolute'>
        <ul className='list-none'>
            <li>
                <Link href='/'><MenuButton icon={ faStopwatch } text= 'Home' clicked={true} /></Link>
            </li>
        </ul>
    </div>
  );
}
