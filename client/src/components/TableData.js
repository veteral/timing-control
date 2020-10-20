import React from 'react';
import arrow from '../img/next.png';


const TableData = ({ title, 
                     data, 
                     actionRow, 
                     setActionRow 
                    }) => {    
    
    //const control = data.control;
    
    //control.sort((a, b) => {a.executionDate - b.executionDate});
    //console.log('Control to sort', control);
                        
    return (
        <>        
            <table className="table">
                <thead className="thead-light">
                   <tr>
                        {
                            title.map((el, index) =>                           
                                <th key={index}>{el}</th>)
                        }
                   </tr>
                </thead>
                <tbody>
                    {                        
                        data.control.map(el => {
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
                                            data.employee.find(f => f.id === el.employee).name
                                        }
                                    </td>
                                    <td>{new Date(el.executionDate).toLocaleDateString('en-GB')}</td>
                                    <td>{el.title}</td>
                                    <td>{el.text}</td>
                                    <td>
                                        {
                                            data.type.find(f => f.id === el.typeDoc).name
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