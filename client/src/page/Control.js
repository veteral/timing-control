import React, 
    {   
        useContext, 
        useEffect, 
        useState
    } from 'react';
import { DBContext } from '../context/DBContext';
import HeaderData from '../components/HeaderData';
import TableData from '../components/TableData';
//import Modal from '../common/Modal/Modal';


const Control = () => {
    const titleSection = 'Документы на контроле:';
     const { data, 
             getData, 
             setActionRow, 
             setData} = useContext(DBContext); 
       
    //const [isModal, setModal] = useState(false);   

    useEffect(() => {
      
        getData();           
       
    }, []);

    // const showModal = () => {
    //     setModal(isModal === false ? true : false);
    // }

    //console.log('Data Control', JSON.stringify(data));

    return (
        <>  
{
  data.control &&
      <ul>
          {data.control.map(el => <li>{el.id}</li>)}
    </ul>          
}
        
            {/* <button onClick={showModal}>Click</button>
            <HeaderData title={titleSection} />                      
            { 
                data.control && 
                    <TableData
                        dataTable={data}
                        actionRow={data.actionRow}
                        setActionRow={setActionRow}
                    />                 
            } */}
            { 
                // <Modal                    
                //     showModal={showModal}
                //     show={isModal}  
                //     setData={setData}                      
                // />
            }       
            
        </>
    );
}

export default Control;