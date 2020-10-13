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
    const { data, 
            getData, 
            setActionRow, 
            setData} = useContext(StateContext); 
       
    const [isModal, setModal] = useState(false);   

    useEffect(() => {
        getData();   
        // размонтировать компонент         
    }, []);

    const showModal = () => {
        setModal(isModal === false ? true : false);
    }
    
    console.log('isModal', isModal);

    return (
        <>
            <button onClick={showModal}>Click</button>
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
                <Modal                    
                    showModal={showModal}
                    show={isModal}  
                    setData={setData}                      
                />
            }       
            
        </>
    );
}

export default Control;