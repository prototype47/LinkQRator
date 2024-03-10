import React, { useContext } from 'react'
import { InputContext } from '../App';

const InputField = () => {

    const { inputValue, setInputValue } = useContext(InputContext);
    const handleOnChange = (e) => setInputValue({...inputValue, url: e.target.value});

    return (
        <div>
            <label className='font-semibold'>Your URL</label>
            <input type='url' className='w-full p-2 border-2 py-1 px-3 text-gray-600 rounded-md' placeholder='https://prototype47.netlify.app' value={inputValue.url} onChange={handleOnChange}/>

        </div>
    )
}

export default InputField