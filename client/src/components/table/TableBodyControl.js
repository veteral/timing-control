import React from 'react';
import arrow from '../../img/next.png';


const TableBodyControl = ({ data, 
                     actionRow, 
                     setActionRow,                    
                    }) => {   
    console.log('point - TableBodyControl', data);
    //console.log('ActionRow', actionRow);
    
    //при первой загрузке ставим первой активную строку
    if(!actionRow){
        if(data.control.length > 0) 
            actionRow = { id: data.control[0].id }; 
        else actionRow = null;
    }

    //!actionRow && (actionRow = {id: data.control[0].id});

    data.control.sort((a, b) => new Date(a.executionDate) - new Date(b.executionDate));            

    return (
        <>                   
            <tbody>
                {   
                                        
                    data.control.map(el => {
                        const currentDate = new Date().getTime();
                        
                        /**
                         * 86 400 000 мс в сутках.
                         * Определяем количество мс в 2х и 5-ти сутках 
                         */
                        const redDate = currentDate + 172800000;                     
                        const yellowDate = currentDate + 432000000;

                        const execDate = new Date(el.executionDate).getTime();

                        let warning = '';
                       
                        if(execDate > redDate) {
                            console.log('execDate < redDate')
                            if(execDate < yellowDate) {
                                console.log('execDate > yellowDate')
                                warning = 'table-warning';
                            } else {
                                console.log('execDate < yellowDate')
                                warning = '';
                            }                                
                        } else {
                            console.log('execDate > redDate')
                            warning = 'table-danger';
                        }
                            // className={'table-danger'}                        
                        return (  
                            <tr key={el.id} onClick={ ()=>setActionRow(el) } className={warning}> 
                            {                                                 
                                el.id === actionRow.id 
                                    ?   <td>
                                            <img src={arrow} className={'arrow'} alt='arrow' />
                                        </td> 
                                    :   <td>&nbsp;</td> 
                            }
                            <td>{el.numberDoc}</td>
                            <td>{new Date(el.dateDoc).toLocaleDateString('en-GB')}</td>
                            <td>
                                {
                                    el.employee !== 0 
                                        ? data.employee.find(f => f.id === el.employee).name
                                        : ""
                                }
                            </td>
                            <td>{new Date(el.executionDate).toLocaleDateString('en-GB')}</td>
                            <td>{el.title}</td>
                            <td>{el.text}</td>
                            <td>
                                {
                                    el.typeDoc !== 0 
                                        ? data.type.find(f => f.id === el.typeDoc).name
                                        : ""
                                }
                            </td>            
                        </tr>
                        );                                
                    })
                }
            </tbody>           
        </>
    );
};

export default TableBodyControl;