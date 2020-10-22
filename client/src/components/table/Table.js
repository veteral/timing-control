import React from 'react';
//import TableHeader from './TableHeader';
//import TableBody from './TableBody';


const Table = ({ children }) => {                            
    return (
        <>        
            <table className="table">
                {/* <TableHeader />
                <TableBody />                 */}
                { children }                                
            </table>
        </>
    );
};

export default Table;