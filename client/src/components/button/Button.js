import React from 'react';

import add from '../../img/plus.svg';
import edit from '../../img/edit.svg';
import delite from '../../img/trash.svg';
import print from '../../img/print.svg';
import check from '../../img/mark.png';


const Button = ({src, name, handleClick}) => {
    let ico;    
    switch (src) {
        case 'add':
            ico = add;    
            break;
        case 'edit':
            ico = edit;
            break;
        case 'delite':
            ico = delite;
            break;
        case 'print':
            ico = print;
            break;
        case 'check':     
            ico = check;
            break;
        default:
            ico = '';
            break;
    }
    return (
        <>            
            <div className={'button'}>
                
                    <img src={ico} 
                        className={'button-img'} 
                        data-toggle="tooltip" 
                        data-placement="bottom"              
                        title={name} alt={name}
                        onClick={handleClick}
                    />
                
            </div>
        </>
    );    
}

export default Button