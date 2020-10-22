import React from 'react';


const TableHeader = ({ title }) => {                            
    return (
        <>  
            <thead className="thead-light">
                <tr>
                    {
                        title.map((el, index) =>                           
                            <th key={index}>{el}</th>)
                    }
                </tr>
            </thead>
        </>
    );
};

export default TableHeader;