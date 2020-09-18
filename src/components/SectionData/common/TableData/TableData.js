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

    const tableBodyElements = props.dataTable.map(el => {
        // className={'table-danger'}
        return (             
            <tr key={el.id} onClick={props.clickRowTable.bind(null, el)}>
            {                 
                el.id === props.actionRow.id 
                    ? <td>
                        <img src={actionRow} className={s.img} />
                    </td> 
                    : <td>&nbsp;</td> 
            }
            <td>{el.numDoc}</td>
            <td>{el.dataDoc}</td>
            <td>{el.executorDoc}</td>
            <td>{el.executionData}</td>
            <td>{el.header}</td>
            <td>{el.addInformation}</td>
            <td>{el.typeDoc}</td>            
        </tr>
        );
        
    });

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
                    {tableBodyElements}
                </tbody>
            </table>
        </>
    );
};

export default TableData;