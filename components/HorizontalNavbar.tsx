import MenuButton from  '../components/MenuButton'
import Link from 'next/link'
export default function HorizontalNavbar() {
    return (
        <div className='w-full h-16 bg-black shadow-lg absolute divide-y divide-gray-50'>
            <div className='inline-flex my-3 w-full justify-center'>
                <Link href='/'>
                    <p className='font-light font-sans text-4xl text-gray-50'>
                        dialed<span className='text-mint-green'>In</span>
                    </p>
                </Link>
            </div>
            <ul className='list-none'>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
            </ul>
        </div>
    )
}
