import React from 'react'

const QRcode = () => {
    return (
        <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center'>
            <div>
                <img className='w-48 rounded-md' src="https://qrtiger.com/temp/1710083454051.png" alt="QR code" />
                <button className='bg-blue-400 text-white mt-2 px-4 py-1 w-full rounded-md'>Download</button>
            </div>
        </div>
    )
}

export default QRcode