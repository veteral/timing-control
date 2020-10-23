import React, 
    { useContext, 
      useEffect, 
      useState
    } from 'react';
import { DBContext } from '../context/DBContext';
import HeaderData from '../components/HeaderData';
import Table from '../components/table/Table';
import Modal from '../components/modal/Modal';
import ChangeDocumentForm from '../components/modal/forms/ChangeDocumentForm';
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
    const [values, setValues] = useState({});  
    const [title, setTitle] = useState(); 

    const { data, 
            getData, 
            setActionRow, 
            setData } = useContext(DBContext); 

    useEffect(() => {      
        getData();   
        // eslint-disable-next-line    
        console.log('UseEffect')           
    }, []);

    const showModal = () => {
        setModal(isModal === false ? true : false);
    }

    const addDocument = () => {
        setValues({
                    numberDoc: '',
                    dateDoc: new Date(),
                    employee: '',
                    executionDate: new Date(),
                    title: '',
                    text: '',
                    typeDoc: ''
                }
        );
        setTitle('Добавить документ');
        showModal();
    };

    const editDocument = () => {
        //debugger
        setValues({
                    numberDoc: data.actionRow.numberDoc,
                    dateDoc: new Date(data.actionRow.dateDoc),
                    employee: data.actionRow.employee,
                    executionDate: new Date(data.actionRow.executionDate),
                    title: data.actionRow.title,
                    text: data.actionRow.text,
                    typeDoc: data.actionRow.typeDoc
                    }
        );

        setTitle('Изменить документ');
        showModal();   
    }    

    const blockButton = [
        { id: 1, img: 'check', name: 'исполнить', handleClick: showModal },
        { id: 2, img: 'add', name: 'добавить', handleClick: addDocument },
        { id: 3, img: 'edit', name: 'изменить', handleClick: editDocument },
        { id: 4, img: 'delite', name: 'удалить', handleClick: showModal },
        { id: 5, img: 'print', name: 'печать', handleClick: showModal },
    ];
//debugger
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
                        dataForm={values} 
                        titleForm={title}                   
                    >
                        <ChangeDocumentForm 
                            type={data.type} 
                            employee={data.employee} 
                        />
                    </Modal>
            }           
        </>
    );
}

export default Control;