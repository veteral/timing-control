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

    const el = {
      "id": 2,
      "numberDoc": "01/11/22",
      "dateDoc": "10.10.2020",
      "employee": 2,
      "executionDate": "10.10.2020",
      "title": "ывывывыывывывы фвыфвыфвывывыв ывывывывыввывы",
      "text": "ввававав аыыаыаыаыа",
      "typeDoc": 2
  };

    return (
        <>  
{
  data.control &&
      <ul>
          {data.control.map(el => <li>{el.id}</li>)}
    </ul>          
}
<button onClick={() => setData(data, el)}>Click</button>
        
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