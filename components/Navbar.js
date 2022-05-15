import Link from 'next/link'
export default function Navbar () {
  return(
    <div className='min-h-screen w-10'>
      <ul className ='grid grid-flow-row list-none min-h-screen'>
        <li className='my-0 object-top'>
          <Link href=''><div className='w-10 h-10 bg-black'></div></Link>
        </li> 
        <li className='object-top my-0'>
          <Link href=''><div className='w-10 h-10 bg-black'></div></Link>
        </li> 
        <li className='place-self-end my-0'>
          <Link href=''><div className='w-10 h-10 m-0 bg-black'></div></Link>
        </li> 
      </ul>
    </div>
  );
}
