import React from 'react';
import arrow from '../../img/next.png';

// function dateConversion(date) {
//     //const newDate = new Date(date)
//     return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime();     
// }

const TableBodyExec = ({ data, 
                     actionRow, 
                     setActionRow,                    
                    }) => {   
                            
    // const renderItem = (el, property) => {
    
    //     const item = data[property].find(f => f.id === el[property]);        
    //     if(item !== 0 && item !== undefined)    return item.name;
    //     else return null;
    // };
    
    //при первой загрузке ставим первой активную строку
    if(!actionRow){
        if(data.exec.length > 0) 
            actionRow = { id: data.exec[0].id }; 
        else actionRow = null;
    }

    //!actionRow && (actionRow = {id: data.control[0].id});

    //data.control.sort((a, b) => new Date(a.executionDate) - new Date(b.executionDate));      
    console.log('TableBodyExec', data);      
    console.log('TableBodyExec - action', actionRow);      

    return (
        <>                   
            <tbody>
                {   
                  actionRow &&                      
                  data.exec.map(el => {
                        //const currentDate = dateConversion(new Date());                                                
                        
                        /**
                         * 86 400 000 мс в сутках.
                         * Определяем количество дней из мс в 2х и 5-ти сутках, а также в из элемента массива 
                         */
                        // const redDay = (currentDate + 172800000)/86400000;                      //259 200 000 - 3-е суток
                        // const yellowDay = (currentDate + 432000000)/86400000;                   //518 400 000 - 6-ть суток   
                        // const execDay = dateConversion(new Date(el.executionDate))/86400000;
                        
                        // let warning = '';
                        //let execDate = 0;
                       
                        // if(execDay > redDay) {
                        //     //console.log('execDate > redDate')
                        //     if(execDay < yellowDay) {
                        //         //console.log('execDate < yellowDate')
                        //         warning = 'table-warning';
                        //     } else {
                        //         //console.log('execDate > yellowDate')
                        //         warning = '';
                        //     }                                
                        // } else {
                        //     //console.log('execDate < redDate')
                        //     warning = 'table-danger';
                        // }
                            // className={'table-danger'}                        
                        return (  
                            <tr key={el.id} onClick={ ()=>setActionRow(el) }> 
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
                                    el.employee                              
                                    // el.employee !== 0
                                    //     ? data.employee.find(f => f.id === el.employee)
                                    //     : ""
                                    //renderItem(el, 'employee')
                                }
                            </td>
                            <td>{new Date(el.executionDate).toLocaleDateString('en-GB')}</td>
                            <td>{el.title}</td>
                            <td>{el.text}</td>
                            <td>
                                {
                                    el.type
                                    // el.typeDoc !== 0 
                                    //     ? data.type.find(f => f.id === el.typeDoc).name
                                    //     : ""
                                    //renderItem(el, 'type')
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

export default TableBodyExec;