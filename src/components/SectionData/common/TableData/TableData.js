import React from 'react';
import s from './TableData.module.css';
import actionRow from '../../../../img/next.png';


const TableData = (props) => {
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

    // const tableHeaderElements = tableTitle.map((el, index) =>                           
    //     <th key={index}>{el}</th>                    
    // );

    console.log('Props',props)
    

    return (
        <>        
            <table className="table">
                <thead className="thead-light">
                   <tr>
                        {
                            tableTitle.map((el, index) =>                           
                                <th key={index}>{el}</th>)
                        }
                   </tr>
                </thead>
                <tbody>
                    {                        
                        props.dataTable &&
                            props.dataTable.control.map(el => {
                                // className={'table-danger'}
                                return (  
                                    <tr>           
                                    {/* <tr key={el.id} onClick={props.clickRowTable.bind(null, el)}> */}
                                    {/* {                 
                                        el.id === props.actionRow.id 
                                            ? <td>
                                                <img src={actionRow} className={s.img} />
                                            </td> 
                                            : <td>&nbsp;</td> 
                                    } */}
                                    <td>{el.numDoc}</td>
                                    <td>{el.dataDoc}</td>
                                    <td>{el.executorDoc}</td>
                                    <td>{el.executionData}</td>
                                    <td>{el.header}</td>
                                    <td>{el.addInformation}</td>
                                    <td>{el.typeDoc}</td>            
                                </tr>
                                );
                                
                            })
                    }
                </tbody>
            </table>
        </>
    );
};

export default TableData;