import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ButtonData.module.css';

const ButtonData = (props) => {
    return (
        <>            
            <div className={s.btn}>
                
                    <img src={props.src} 
                        className={s.img} 
                        data-toggle="tooltip" 
                        data-placement="bottom"              
                        title={props.title} alt={props.title}
                        onClick={props.showModal}
                         />
                
            </div>
        </>
    );    
}

export default ButtonData