import React, 
    { useContext, 
      useEffect, 
      useState
    } from 'react';
import { DBContext } from '../context/DBContext';
import HeaderData from '../components/HeaderData';
import TableData from '../components/TableData';
import Modal from '../components/modal/Modal';
import BigForm from '../components/modal/forms/BigForm';
import AddButton from '../components/button/AddButton';


const Control = () => {
    const headingPage = 'Документы на контроле:';
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

    const [isModal, setModal] = useState(false);  

    const blockButton = [
        { img: 'check', name: 'исполнено', handleClick: setModal },
        { img: 'add', name: 'добавить', handleClick: setModal },
        { img: 'edit', name: 'изменить', handleClick: setModal },
        { img: 'delite', name: 'удалить', handleClick: setModal },
        { img: 'print', name: 'печать', handleClick: setModal },
    ]

    const { data, 
            getData, 
            setActionRow, 
            setData } = useContext(DBContext); 

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
            <HeaderData 
                headingPage={headingPage} 
                blockButton={blockButton}
            />                            
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
                        titleForm={'Добавить документ'}                   
                    >
                        <BigForm 
                            type={data.type} 
                            employee={data.employee} 
                        />
                    </Modal>
            }       
            
        </>
    );
}

export default Control;