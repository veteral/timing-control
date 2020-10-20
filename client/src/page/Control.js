import React, 
    {   
        useContext, 
        useEffect, 
        useState
    } from 'react';
import { DBContext } from '../context/DBContext';
import HeaderData from '../components/HeaderData';
import TableData from '../components/TableData';
import Modal from '../components/Modal/Modal';
import ModalSmallForm from '../components/Modal/ModalSmallForm';
import { BIG } from '../context/type';
import BigForm from '../components/Modal/forms/BigForm';


const Control = () => {
    const titleSection = 'Документы на контроле:';
    const tableTitle = [
        ' ', 
        'Номер документа', 
        'Дата регистрации', 
        'Исполнитель',
        'Дата исполнения',        
        'Заголовок',
        'Дополнительная информация',
        'Тип документа',
    ];

     const { data, 
             getData, 
             setActionRow, 
             setData } = useContext(DBContext); 
       
    const [isModal, setModal] = useState(false);       

    useEffect(() => {
      
        getData();   
        // eslint-disable-next-line        
       
    }, []);

    const showModal = () => {
        setModal(isModal === false ? true : false);
    }

    const dataForm = {
            numberDoc: data.actionRow.numberDoc,
            dateDoc: data.actionRow.dateDoc,
            employee: data.actionRow.employee,
            executionDate: data.actionRow.executionDate,
            title: data.actionRow.title,
            text: data.actionRow.text,
            typeDoc: data.actionRow.typeDoc
        }

        console.log('DataForm', dataForm)
    return (
        <>         
            <button onClick={showModal}>Big</button>
            <button onClick={showModal}>small</button>
            <HeaderData title={titleSection} />                      
            { 
                data.control && 
                    <TableData
                        title={tableTitle}
                        data={data}
                        actionRow={data.actionRow}
                        setActionRow={setActionRow}
                    />                 
            }
            { 
                isModal &&
                    <Modal                    
                        showModal={showModal}
                        show={isModal}  
                        setData={setData}                      
                        dataForm={dataForm}                    
                    >
                        <BigForm type={data.type} employee={data.employee} />
                    </Modal>
            }       
            
        </>
    );
}

export default Control;