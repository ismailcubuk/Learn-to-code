import React, { useEffect, useRef, useState } from 'react'
import Panel from './Panel';

function DropDown({ options, selection, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    useEffect(() => {
        const handler = (e) => {
            if (!divEl.current.contains(e.target)) {
                setIsOpen(false)
            }
        };
        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, []);


    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option)
    }

    const renderedOptions = options.map((option) => {
        return <div
            onClick={() => handleOptionClick(option)}
            key={option.value}>
            {option.label}
        </div>
    })

    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel
                className='flex justify-between items-center cursor-pointer'
                onClick={handleClick}>
                {selection?.label || 'Select...'}
            </Panel>
            {isOpen &&
                (<Panel className='absolute top-full'>
                    {renderedOptions}
                </Panel>
                )}
        </div>
    )
}

export default DropDown