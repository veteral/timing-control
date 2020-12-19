import React from 'react';
import arrow from '../../img/next.png';


const TableBodyName = ({ data, 
                     actionRow, 
                     setActionRow,  
                     property                  
                    }) => {   
    console.log('point - TableBodyName', data);
    //console.log('ActionRow', actionRow);
    
    //при первой загрузке ставим первой активную строку
    if(!actionRow){
        if(data[property].length > 0) 
            actionRow = { id: data[property][0].id }; 
        else actionRow = null;
    }   

    //data.employee.sort((a, b) => new Date(a.executionDate) - new Date(b.executionDate));     
    //const employees = data.employee.filter(el => el.name !== '<>');
    //console.log('employees', employees);       
    
    return (
        <>                   
            <tbody>
                {   
                    data[property].map(el => {             
                         //employees.map(el => {      

                        //if(el.id !== 0) 
                        return (  
                            <tr key={el.id} onClick={ ()=>setActionRow(el) } > 
                            {                                                 
                                el.id === actionRow.id 
                                    ?   <td style={{width: '50px'}}>
                                            <img src={arrow} className={'arrow'} alt='arrow' />
                                        </td> 
                                    :   <td>&nbsp;</td> 
                            }
                            <td>{el.name}</td>                                  
                        </tr>
                        );                                
                    })
                }
            </tbody>           
        </>
    );
};

export default TableBodyName;