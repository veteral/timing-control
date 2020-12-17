import React from 'react';
import arrow from '../../img/next.png';

function dateConversion(date) {
    //const newDate = new Date(date)
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime();     
}

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
                        const currentDate = dateConversion(new Date());

                                                
                        //let exDate = dateConversion(currentDate);
                        //let curDate = new Date(exDate.getFullYear(), exDate.getMonth(), exDate.getDate(), 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00; // создаем экземпляр объекта для определенной календарной даты;
                        console.log('currentDate',currentDate);    
                        //console.log('curDate', curDate);

                        //const dt = new Date(year, month, date).getTime();
                        //console.log('dt', dt);
                        
                        /**
                         * 86 400 000 мс в сутках.
                         * Определяем количество дней из мс в 2х и 5-ти сутках, а также в из элемента массива 
                         */
                        const redDay = (currentDate + 172800000)/86400000;                      //259 200 000 - 3-е суток
                        const yellowDay = (currentDate + 432000000)/86400000;                   //518 400 000 - 6-ть суток   
                        const execDay = dateConversion(new Date(el.executionDate))/86400000;

                        // console.log('redDay', redDay);
                        // console.log('yellowDay', yellowDay);
                        // console.log('execDay', execDay);


                        // console.log('Current day', currentDate/86400000);
                        // console.log('Red day', redDate/86400000);

                        // const exeDate = dateConversion(new Date(el.executionDate));
                        // console.log('Current day111', currentDate/86400000 - exeDate/86400000);

                        let warning = '';
                        //let execDate = 0;
                       
                        if(execDay > redDay) {
                            //console.log('execDate > redDate')
                            if(execDay < yellowDay) {
                                //console.log('execDate < yellowDate')
                                warning = 'table-warning';
                            } else {
                                //console.log('execDate > yellowDate')
                                warning = '';
                            }                                
                        } else {
                            //console.log('execDate < redDate')
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