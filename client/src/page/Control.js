import React, 
    { useContext, 
      useEffect, 
      useState
    } from 'react';
import { DBContext } from '../context/DBContext';
import HeaderData from '../components/HeaderData';
import Table from '../components/table/Table';
import Modal from '../components/modal/Modal';
import BigForm from '../components/modal/forms/BigForm';
import TableHeader from '../components/table/TableHeader';
import TableBodyControl from '../components/table/TableBodyControl';


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
        { id: 1, img: 'check', name: 'исполнить', handleClick: setModal },
        { id: 2, img: 'add', name: 'добавить', handleClick: setModal },
        { id: 3, img: 'edit', name: 'изменить', handleClick: setModal },
        { id: 4, img: 'delite', name: 'удалить', handleClick: setModal },
        { id: 5, img: 'print', name: 'печать', handleClick: setModal },
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

    return (
        <>  
            <HeaderData 
                headingPage={headingPage} 
                blockButton={blockButton}
            />                            
            { 
                data.control && 
                    <Table>
                        <TableHeader title={tableTitle} />
                        <TableBodyControl 
                            data={data}
                            actionRow={data.actionRow}
                            setActionRow={setActionRow} 
                        />
                    </Table>                 
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