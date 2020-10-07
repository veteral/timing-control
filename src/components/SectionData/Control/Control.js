import React, {useContext, useEffect}  from 'react';
import { StateContext } from '../../../state/stateContext';
import HeaderData from "../common/HeaderData/HeaderData";
import TableData from '../common/TableData/TableData';


//Has changed component Control

const Control = () => {
    const {data, getData} = useContext(StateContext);    
    const titleSection = 'Документы на контроле:';

    useEffect(() => {
        getData();        
    }, []);

    console.log('DATA', data);

    return (
        <>
            <HeaderData title={titleSection} />  
               
                
                    { data.control && <TableData
                        dataTable={data}
                        />                 
                   }
            
        </>
    );
}

export default Control;