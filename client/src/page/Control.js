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
import ModalMessage from '../components/modal/ModalMessage';

//const MESSAGE = 'MESSAGE';
//const DOCUMENT = 'DOCUMENT';

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
    const [dialog, setDialog] = useState({
                                        show: false,
                                        title: '',
                                        text: ''
                                    });

    const { data, 
            getData, 
            deleteDocument, 
            setData } = useContext(DBContext); 

    console.log('point 1 - start (context)', data);
    //const getDataCol = 
    useEffect(() => {      
        getData();          
        console.log('point - useEffect');                
    }, []);

    // useEffect(() => {
    // //    console.log('UseEffect - Data', data)
        
    //     //setActionRow('data');

    //     console.log('point - UseEffect - ActionRow');
    // }, [getData]);

   // useEffect(getData, []);

   /*************************************
    * открываем/закрываем модальное окно
    */
    const showModal = () => {
        setModal(isModal === false ? true : false);
    }

    /********************************************
     * открываем окно для ввода нового документа
     */
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
        //setTitle('Добавить документ');
        showModal();
    };

    /************************************************
     * открываем активный документ для редактирования
     */
    const editDocument = () => {
        //debugger
        let row;
        // const newRow = {
        //     ...data.control[0]
        // }
        if(!actionRow) row = {...data.control[0]};
            else row = {...actionRow};               
                
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

        //setTitle('Изменить документ');
        showModal();   
    };   
    
    /****************************************
     * По делаем активной кликнутую строку
     * @param {объект активной строки} tr 
     */
    const changeActionRow = (tr) => {
        setActionRow(tr);
    };

    /*************************************
    * открываем/закрываем диалоговое модальное окно
    */
   const hideDialog = () => {        
        setDialog( {...dialog,
                    show: false});
    }

    /***************************************
     * открываем диалоговое окно для удаления активного документа
     */
    
    const showDialog = () => {
        let row;
        if(!actionRow) row = {...data.control[0]};
            else row = {...actionRow};    

        const body = `удалить документ: № ${row.numberDoc}, заголовк - "${row.title}"`;   
        setDialog({
            ...dialog,            
            show: true,
            title: 'Удаление документа',
            text: body,
            id: row.id
        });
    }

    /******************************************************************
     *  
     */


    //блок кнопок 
    const blockButton = [
        { id: 1, img: 'check', name: 'исполнить', handleClick: showModal },
        { id: 2, img: 'add', name: 'добавить', handleClick: addDocument },
        { id: 3, img: 'edit', name: 'изменить', handleClick: editDocument },
        { id: 4, img: 'delite', name: 'удалить', handleClick: showDialog },
        { id: 5, img: 'print', name: 'печать', handleClick: showModal },
    ];

    console.log('point - return');

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
            { 
                dialog.show &&
                    <ModalMessage 
                        dialog={dialog}
                        data={data}
                        hideDialog={hideDialog}                        
                        deleteDocument={deleteDocument}
                    />
            }           
        </>
    );
}

export default Control;