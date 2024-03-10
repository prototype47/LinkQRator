import React from 'react'

const QRcode = () => {
    return (
        <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center'>
            <div>
                <img className='w-48' src="https://qrtiger.com/temp/1710083454051.png" alt="QR code" />
                <button>Download</button>
            </div>
        </div>
    )
}

export default QRcode