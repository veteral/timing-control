import React, {useState} from 'react';
import s from './TableData.module.css';
import next from '../../../../img/next.png';


const TableData = ({dataTable, actionRow, setActionRow}) => {    
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
    
    //console.log('Props TableData',dataTable)
    //console.log('typeDoc', dataTable.type[0].id)
    //debugger;
    

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
                        dataTable.control.map(el => {
                                // className={'table-danger'}
                                return (  
                                    <tr key={el.id} onClick={ ()=>setActionRow(el) }> 
                                    {                 
                                        el.id === actionRow.id 
                                            ? <td>
                                                <img src={next} className={s.img} alt='next' />
                                            </td> 
                                            : <td>&nbsp;</td> 
                                    }
                                    <td>{el.numDoc}</td>
                                    <td>{el.dataDoc}</td>
                                    <td>
                                        {
                                            dataTable.execution.find(f => f.id === el.executorDoc).name
                                        }
                                    </td>
                                    <td>{el.executionData}</td>
                                    <td>{el.header}</td>
                                    <td>{el.addInformation}</td>
                                    <td>
                                        {
                                            dataTable.type.find(f => f.id === el.typeDoc).name
                                        }
                                    </td>            
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