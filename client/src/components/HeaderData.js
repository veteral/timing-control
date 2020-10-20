import React from 'react';


const HeaderData = (props) => {
    // let groupButtonsElements = props.blockOfButtons.map((b, index) => <ButtonData   key={index} 
    //                                                                                 src={b.name} 
    //                                                                                 title={b.title} 
    //                                                                                 showModal={b.showModal} />);

    console.log('HeaderData');
    return (
        <div className={'data__header'}>
            <div className={'data__title'}>
                <h2>{props.title}</h2>
            </div>
            <div className={'data__btn-group'}>

                {/* {groupButtonsElements} */}

            </div>
        </div>
    );

};

export default HeaderData;