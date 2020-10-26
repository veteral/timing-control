import React from 'react';
import arrow from '../../img/next.png';


const TableBodyControl = ({ data, 
                     actionRow, 
                     setActionRow,                    
                    }) => {   
    console.log('TableBodyControl', data);
    console.log('ActionRow', actionRow);
    
    !actionRow && (actionRow = {id: data.control[0].id});

    //if(actionRow === {}) {
    //     actionRow = {id: data.control[0].id}
    //     console.log('ActionRow', actionRow);
    // }
    
    return (
        <>                   
            <tbody>
                {   
                                        
                    data.control.map((el,index) => {
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
                                    el.employee &&
                                        data.employee.find(f => f.id === el.employee).name
                                }
                            </td>
                            <td>{new Date(el.executionDate).toLocaleDateString('en-GB')}</td>
                            <td>{el.title}</td>
                            <td>{el.text}</td>
                            <td>
                                {
                                    el.typeDoc && 
                                        data.type.find(f => f.id === el.typeDoc).name
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