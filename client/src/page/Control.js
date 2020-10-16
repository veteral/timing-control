import React, 
    {   
        useContext, 
        useEffect, 
        useState
    } from 'react';
import { DBContext } from '../context/DBContext';
import HeaderData from '../components/HeaderData';
import TableData from '../components/TableData';
//import Modal from '../common/Modal/Modal';


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
       
    //const [isModal, setModal] = useState(false);   

    useEffect(() => {
      
        getData();   
        // eslint-disable-next-line        
       
    }, []);

    // const showModal = () => {
    //     setModal(isModal === false ? true : false);
    // }

    //console.log('Data Control', JSON.stringify(data));
    
        //const control = data.control;
        //console.log('Control sort start', control);
        //data.control.sort((a, b) => new Date(a.dateDoc) - new Date(b.dateDoc));
        //console.log('Control sort end', control);            
   

    return (
        <>         
            {/* <button onClick={showModal}>Click</button> */}
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
                // <Modal                    
                //     showModal={showModal}
                //     show={isModal}  
                //     setData={setData}                      
                // />
            }       
            
        </>
    );
}

export default Control;