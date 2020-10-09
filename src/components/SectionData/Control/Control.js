import React, 
    {   
        useContext, 
        useEffect, 
        useState
    } from 'react';
import { StateContext } from '../../../state/stateContext';
import HeaderData from "../common/HeaderData/HeaderData";
import TableData from '../common/TableData/TableData';
import Modal from '../common/Modal/Modal';


const Control = () => {
    const titleSection = 'Документы на контроле:';
    const {data, getData} = useContext(StateContext); 
       
    const [isModal, setModal] = useState(true);
    //const [actionRow, setActionRow] = useState({});

    useEffect(() => {
        getData();    
        //actionRow = setActionRow(data.control[0]);            
        //console.log('Data useEffect', data.control);
    }, []);
    
    console.log('Control DATA', JSON.stringify(data));

    return (
        <>
            <HeaderData title={titleSection} />                      
            { 
                data.control && 
                    <TableData
                        dataTable={data}
                        actionRow={data.actionRow}

                    />                 
            }
            { 
                // isModal && 
                //     <Modal                    
                //         showModal={isModal}                        
                //     />
                }       
            
        </>
    );
}

export default Control;