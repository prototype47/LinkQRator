import React, { useContext } from 'react'
import InputField from './InputField'
import InputColor from './InputColor'
import { InputContext } from '../App';
import github from '../assets/github.svg';

const InputForm = () => {

    const { getQRcode, inputValue } = useContext(InputContext);

    const handleSubmit = () => getQRcode();

    return (
        <div className='col-span-2 p-6 grid gap-4'>
            <InputField />
            <InputColor />
            <button disabled={!inputValue.url} onClick={handleSubmit} className='bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-md mt-4 hover:bg-blue-500 disabled:bg-gray-500 '>Generate QR</button>
            <footer className='text-center py-4 font-bold mt-2 mb-[-1.5rem] flex justify-center'>
                <p className='text-white font-comf'>⚡Developed by&nbsp;</p>
                <p className='text-gray-500 font-mo'>
                    <a href="http://linkedin.com/in/anand-s-63as" target='_blank' rel="noreferrer"><em>Anand</em></a>
                </p>
                <p className='text-gray-500 font-mo'>
                    <a href="http://github.com/prototype47" target='_blank' rel="noreferrer">
                        <img className='w-5 mt-1 ml-1 hover:scale-110 animate-pulse' src={github} alt="GitHub" />
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default InputForm