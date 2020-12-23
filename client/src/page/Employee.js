import React, {
    useState,
    useEffect,
    useContext
} from 'react';

import NameTemplate from './NameTemplate';


const Employee = () => {   
        
    return (
        <>  
            <NameTemplate property={'employee'} name={'Исполнители'} />
        </>
    );
}

export default Employee;