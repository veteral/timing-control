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
import { BIG } from '../context/type';


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

    const dataForm = {
        type: BIG,
        values: {
            numberDoc: '15',
            dateDoc: null,
            employee:  '',
            executionDate: new Date('Sat Oct 15 2020 12:53:20 GMT+0300 (Eastern European Summer Time)'),
            title: 'title',
            text: 'text',
            typeDoc: 0
        }
    }

    useEffect(() => {
      
        getData();   
        // eslint-disable-next-line        
       
    }, []);

    const showModal = () => {
        setModal(isModal === false ? true : false);
    }

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
                <Modal                    
                    showModal={showModal}
                    show={isModal}  
                    setData={setData}                      
                    dataForm={dataForm}                    
                />
            }       
            
        </>
    );
}

export default Control;