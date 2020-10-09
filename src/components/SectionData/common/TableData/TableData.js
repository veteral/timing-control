import React, {useState} from 'react';
import s from './TableData.module.css';
import next from '../../../../img/next.png';


const TableData = ({dataTable}) => {
    const [actionRow, setActionRow] = useState(dataTable.control[0]);
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

    //debugger;
    console.log('Props TableData',dataTable)
    

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
                                    <tr>           
                                    {/* <tr key={el.id} onClick={props.clickRowTable.bind(null, el)}> */}
                                    {                 
                                        el.id === actionRow.id 
                                            ? <td>
                                                <img src={next} className={s.img} alt='next' />
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
                                
                            })
                    }
                </tbody>
            </table>
        </>
    );
};

export default TableData;