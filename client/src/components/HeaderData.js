import React from 'react';
import Button from './Button';


const HeaderData = ({ headingPage, blockButton }) => {
    let groupButtonsElements = blockButton.map((b) => <Button key={b.id} 
                                                              src={b.img} 
                                                              title={b.name} 
                                                              handleClick={b.handleClick} />);

    console.log('HeaderData');
    return (
        <div className={'data__header'}>
            <div className={'data__title'}>
                <h2>{headingPage}</h2>
            </div>
            <div className={'data__btn-group'}>

                {groupButtonsElements}               

            </div>
        </div>
    );

};

export default HeaderData;