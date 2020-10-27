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
    const [title, setTitle] = useState(''); 
    const [actionRow, setActionRow] = useState();

    const { data, 
            getData, 
            //setActionRow, 
            setData } = useContext(DBContext); 

    useEffect(() => {      
        getData();  
        //console.log('useEffect',data);                   
    }, []);

    const showModal = () => {
        setModal(isModal === false ? true : false);
    }

    const addDocument = () => {
        setValues({
                    id: 0,
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
        let row;
        const newRow = {
            ...data.control[0]
        }
        if(!actionRow) row = {...newRow};
            else row = {...actionRow};               
        
        // setActionRow(row => ({...row}))
        // console.log(row)
        // console.log(actionRow)
        setValues({
                    id: row.id,
                    numberDoc: row.numberDoc,
                    dateDoc: new Date(row.dateDoc),
                    employee: row.employee,
                    executionDate: new Date(row.executionDate),
                    title: row.title,
                    text: row.text,
                    typeDoc: row.typeDoc
                    }
        );

        setTitle('Изменить документ');
        showModal();   
    };   
    
    const changeActionRow = (tr) => {
        setActionRow(tr);
    };

    const blockButton = [
        { id: 1, img: 'check', name: 'исполнить', handleClick: showModal },
        { id: 2, img: 'add', name: 'добавить', handleClick: addDocument },
        { id: 3, img: 'edit', name: 'изменить', handleClick: editDocument },
        { id: 4, img: 'delite', name: 'удалить', handleClick: showModal },
        { id: 5, img: 'print', name: 'печать', handleClick: showModal },
    ];


    //console.log('end Control - data', data);
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
                            actionRow={actionRow}
                            setActionRow={changeActionRow} 
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
                        data={data}                  
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