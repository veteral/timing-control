import React from 'react';
import s from './HeaderData.module.css';
import ButtonData from "../ButtonData/ButtonData";

const HeaderData = (props) => {
    // let groupButtonsElements = props.blockOfButtons.map((b, index) => <ButtonData   key={index} 
    //                                                                                 src={b.name} 
    //                                                                                 title={b.title} 
    //                                                                                 showModal={b.showModal} />);

    return (
        <div className={s.headerData}>
            <div className={s.headerTitle}>
                <h2>{props.title}</h2>
            </div>
            <div className={s.headerBtnGroup}>

                {/* {groupButtonsElements} */}

            </div>
        </div>
    );

};

export default HeaderData;