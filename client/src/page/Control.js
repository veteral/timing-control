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
                    type={'big'}                    
                />
            }       
            
        </>
    );
}

export default Control;