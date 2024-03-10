import React from 'react'

const InputField = () => {
    return (
        <div>
            <label className='font-semibold'>Your URL</label>
            <input type='url' className='w-full p-2 border-2 py-1 px-3 text-gray-600 rounded-md' placeholder='https://prototype47.netlify.app' />
            
        </div>
    )
}

export default InputField