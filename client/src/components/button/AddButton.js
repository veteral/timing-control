import React from 'react';
import Button from './Button';
import add from '../../img/plus.svg';


const AddButton = ({ src, name, setData }) => {
    return (
        <>
            <Button 
                src={src}
                name={name}
                handleClick={setData}
            />
        </>
    );
};

export default AddButton;