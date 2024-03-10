import React, { useContext, useEffect, useState } from 'react'
import { ChromePicker } from 'react-color';
import { InputContext } from '../App';

const InputColor = () => {

    const [color, setColor] = useState('#054080');
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const { inputValue, setInputValue } = useContext(InputContext);
    useEffect(() => {
        setInputValue({...inputValue, color: color});
    }, [color]);


    const handleChange = (color) => setColor(color.hex);

    return (
        <div>
            <label className='font-semibold'>Color</label>
            <div className='flex items-center gap-2'>
                <div className='w-10 h-8 cursor-pointer border-4' style={{background: color}} onClick={() => setDisplayColorPicker(!displayColorPicker)}></div>
                <span className='font-semibold text-sm uppercase'>{color}</span>
            </div>
            {displayColorPicker && (
                <div className='absolute mt-2'>
                    <ChromePicker color={color} onChange={handleChange} />
                </div>
            )}
        </div>
    )
}

export default InputColor