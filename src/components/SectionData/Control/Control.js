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
    const {data, getData, setActionRow} = useContext(StateContext); 
       
    const [isModal, setModal] = useState(true);   

    useEffect(() => {
        getData();            
    }, []);
    
    console.log('Control DATA', JSON.stringify(data.actionRow));
    console.log('isModal', isModal);

    return (
        <>
            <HeaderData title={titleSection} />                      
            { 
                data.control && 
                    <TableData
                        dataTable={data}
                        actionRow={data.actionRow}
                        setActionRow={setActionRow}
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