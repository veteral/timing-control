import React, 
    { useContext, 
      useEffect, 
      useState
    } from 'react';
import { DBContext } from '../context/DBContext';
import HeaderData from '../components/HeaderData';
import Table from '../components/table/Table';
import TableHeader from '../components/table/TableHeader';
import TableBodyExec from '../components/table/TableBodyExec';


const ExecutedDocuments = () => {
    const headingPage = 'Исполненые документы:';        
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

    //const history = useHistory();
    //const [isModal, setModal] = useState(false);
    //const [values, setValues] = useState({});  
    //const [title, setTitle] = useState(''); 
    const [actionRow, setActionRow] = useState();
    // const [dialog, setDialog] = useState({
    //                                     show: false,
    //                                     title: '',
    //                                     text: '',
    //                                     row: ''
    //                                 });

    const { data, 
            getExec } = useContext(DBContext); 

    //console.log('point 1 - start (context)', data);
    //const getDataCol = 
    useEffect(() => {      
        getExec();          
    //    console.log('point - useEffect');                
    }, []);    

    // useEffect(() => {
    //     console.log('data useEffect');
    // }, [data]);

   /*************************************
    * открываем/закрываем модальное окно
    */
    // const showModal = () => {
    //     setModal(isModal === false ? true : false);
    // }

    /********************************************
     * открываем окно для ввода нового документа
     */
    // const addDocument = () => {
    //     setValues({
    //                 id: 0,
    //                 numberDoc: '',
    //                 dateDoc: new Date(),
    //                 employee: '',
    //                 executionDate: new Date(),
    //                 title: '',
    //                 text: '',
    //                 type: ''
    //             }
    //     );
    //     //setTitle('Добавить документ');
    //     showModal();
    // };

    /************************************************
     * открываем активный документ для редактирования
     */
    // const editDocument = () => {
    //     //debugger
    //     let row;
    //     // const newRow = {
    //     //     ...data.control[0]
    //     // }
    //     if(!actionRow) row = {...data.control[0]};
    //         else row = {...actionRow};               
             
    //         console.log('Edit Document', row)

    //     setValues({
    //                 id: row.id,
    //                 numberDoc: row.numberDoc,
    //                 dateDoc: new Date(row.dateDoc),
    //                 employee: row.employee,
    //                 executionDate: new Date(row.executionDate),
    //                 title: row.title,
    //                 text: row.text,
    //                 type: row.type
    //                 }
    //     );

    //     //setTitle('Изменить документ');
    //     showModal();   
    // };   
    
    /****************************************
     * По делаем активной кликнутую строку
     * @param {объект активной строки} tr 
     */
    const changeActionRow = (tr) => {
        console.log('Action Row', tr)
        setActionRow(tr);
    };

    /*************************************
    * открываем/закрываем диалоговое модальное окно
    */
//    const hideDialog = () => {        
//         setDialog( {...dialog,
//                     show: false});
//     }

    /**************************************************
     * помещаем выделенный документ в исполненые
     */
    //  const modalCheckDocument = () => {
    //     const word = 'Исполнить';
    //     const title = 'Исполнить документ';
        
    //     openDialog(word, title, true);
    //  }

     /**************************************************
      * удаляем выделеный документ
      */
    // const modalDeliteDocument = () => {
    //     const word = 'Удалить';
    //     const title = 'Удалить документ';

    //     openDialog(word, title, false);
    // }

    /***************************************
     * открываем диалоговое окно для удаления активного документа
     */    
    // function openDialog(word, title, check) {
    //     let row;
    //     if(!actionRow) row = {...data.control[0]};
    //         else row = {...actionRow};    

    //     const text = `${word} документ: № ${row.numberDoc}, заголовок - "${row.title}"`;   
    //     setDialog({
    //         ...dialog,            
    //         show: true,
    //         title,
    //         text,
    //         row,
    //         check
    //     });
    // }

    /******************************************************************
     *  
     */
    // function printDocument() {
    //     let row;
    //     if(!actionRow) row = {...data.control[0]};
    //         else row = {...actionRow};  

    //     const location = {
    //             pathname: '/print',                
    //             state: { row, data }
    //         };
        
    //     history.push(location);
    // }


    //блок кнопок 
    // const blockButton = [
    //     { id: 1, img: 'check', name: 'исполнить', handleClick: modalCheckDocument },
    //     { id: 2, img: 'add', name: 'добавить', handleClick: addDocument },
    //     { id: 3, img: 'edit', name: 'изменить', handleClick: editDocument },
    //     { id: 4, img: 'delite', name: 'удалить', handleClick: modalDeliteDocument },
    //     { id: 5, img: 'print', name: 'печать', handleClick: printDocument },
    // ];

    console.log('EcecDocum', data);
    // console.log('point - return(data.control)', data.control);

    return (
        <>  
            <HeaderData 
                headingPage={headingPage} 
                //blockButton={blockButton}
            />                            
            { 
                data.exec && 
                    <Table>
                        <TableHeader title={tableTitle} />
                        <TableBodyExec 
                            data={data}
                            actionRow={actionRow}
                            setActionRow={changeActionRow} 
                        />
                    </Table>                 
            }
        </>
    );
}

export default ExecutedDocuments;