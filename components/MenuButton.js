import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default ({href,children,icon,text}) => {
    const router = useRouter()
    let className = ' '
    if (router.pathname === href) {
        className='text-gray-50 bg-gray-800 rounded-lg flex place-items-center px-1 font-sans'
    } else {
        className='text-white bg-black rounded-lg flex place-items-center px-1 font-sans'
    }
    return(
        <Link href = {href}>
            <div className = {className}>
                <FontAwesomeIcon className='h-6 m-4' icon={icon} />{' '}
                <p className='text-lg'>{text}</p>
            </div>
        </Link>

    )
}
