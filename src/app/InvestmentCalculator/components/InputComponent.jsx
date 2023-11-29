export default function InputComponent({ label, value, inputIdentifier, onChangeValue }) {

    function handleChange(event) {
        onChangeValue(inputIdentifier, event.target.value)
    }

    return (
        <p>
            <label className="block mb-[0.25rem] text-xs font-sans font-bold uppercase">{label}</label>
            <input type='number' required value={value} onChange={handleChange}
                className='w-full p-[0.5rem] border border-solid border-[#76c0ae] rounded-md bg-transparent text-[#c2e9e0] text-[1rem]'
            />                        
        </p>
    )
}