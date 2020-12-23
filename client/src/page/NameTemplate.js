import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import TableBodyName from '../components/table/TableBodyName';
import TableHeader from '../components/table/TableHeader';
import HeaderData from '../components/HeaderData';
import Table from '../components/table/Table';
import { DBContext } from '../context/DBContext';
import Modal from '../components/modal/Modal';
import ModalMessage from '../components/modal/ModalMessage';
import ChangeNameForm from '../components/modal/forms/ChangeNameForm';


const NameTemplate = ({ property, name }) => {
    
    const headingPage = name;        
    const tableTitle = [
        ' ',         
        name,
    ];

    //const history = useHistory();
    const [isModal, setModal] = useState(false);
    const [values, setValues] = useState({});  
    const [title, setTitle] = useState(''); 
    const [actionRow, setActionRow] = useState();
    const [dialog, setDialog] = useState({
                                        show: false,
                                        title: '',
                                        text: '',
                                        row: ''
                                    });

    const { data,  
            getData,                       
            setData,
            deleteElement } = useContext(DBContext); 

    //console.log('point 1 - start (context)', data);    
    useEffect(() => {      
        getData();                                 
    }, []);        

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
                    name: ''                    
                }
        );
        setTitle('Добавить');
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
        if(!actionRow) row = {...data.employee[0]};
            else row = {...actionRow};               
                
        setValues({
                    id: row.id,
                    name: row.name
                    }
        );

        setTitle('Изменить наименование');
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
    
    /**************************************************
     * удаляем выделеный документ
     */
    const modalDeliteDocument = () => {
        const word = 'Удалить';
        const title = 'Удалить строку';

        openDialog(word, title, false);
    }

    /***************************************
     * открываем диалоговое окно для удаления активного документа
     */    
    function openDialog(word, title, check) {
        let row;
        if(!actionRow) row = {...data.control[0]};
            else row = {...actionRow};    

        const text = `${title} - "${row.name}"`;   
        setDialog({
            ...dialog,            
            show: true,
            title,
            text,
            row,
            check
        });
    }    

    //блок кнопок 
    const blockButton = [        
        { id: 2, img: 'add', name: 'добавить', handleClick: addDocument },
        { id: 3, img: 'edit', name: 'изменить', handleClick: editDocument },
        { id: 4, img: 'delite', name: 'удалить', handleClick: modalDeliteDocument }        
    ];    
    
    return (
        <>  
            <HeaderData 
                headingPage={headingPage} 
                blockButton={blockButton}
            />                            
            { 
                data.employee && 
                    <Table>
                        <TableHeader title={tableTitle} />
                        <TableBodyName 
                            data={data}
                            actionRow={actionRow}
                            setActionRow={changeActionRow} 
                            property={property}
                        />
                    </Table>                 
            }
            { 
                isModal &&
                    <Modal                    
                        showModal={showModal}
                        show={isModal}  
                        setData={setData}   
                        property={property}                   
                        dataForm={values} 
                        titleForm={title} 
                        data={data}                  
                    >       
                        <ChangeNameForm 
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
                        property={property}                      
                        deleteElement={deleteElement}                        
                    />
            }           
        </>
    );
}

export default NameTemplate;