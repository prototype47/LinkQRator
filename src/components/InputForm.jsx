import React from 'react'
import InputField from './InputField'
import InputColor from './InputColor'

const InputForm = () => {
    return (
        <div className='col-span-2 p-6 grid gap-4'>
            <InputField />
            <InputColor />
            <button className='bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-md mt-4 hover:bg-blue-500 disabled:bg-gray-500 '>Generate QR</button>
        </div>
    )
}

export default InputForm