const SubmitButton = (props) => {
    return(
        <div className='text-gray-50 bg-orange-500 rounded-lg flex justify-center place-items-center px-1 font-sans'>
            <button onClick = {props.onClick} className='text-lg text-center'>{props.text}</button>
        </div>
    )
}
export default SubmitButton
