const SubmitButton = (props) => {
    return(
        <div>
            <button onClick = {props.onClick} className='hover:border-very-yellow-light hover:border hover:text-very-yellow-light font-extralight bg-mint-green w-full my-6 py-1 rounded-md font-sans text-3xl text-gray-50'>{props.text}</button>
        </div>
    )
}
export default SubmitButton
