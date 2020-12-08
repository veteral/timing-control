import React from 'react';
import Button from './Button';


const HeaderData = ({ headingPage, blockButton }) => {    
    console.log('point - Header');
    return (
        <div className={'data__header'}>
            <div className={'data__title'}>
                <h2>{headingPage}</h2>
            </div>
            <div className={'data__btn-group'}>

                {
                    blockButton &&
                        blockButton.map((b) => <Button  key={b.id} 
                                                        src={b.img} 
                                                        title={b.name} 
                                                        handleClick={b.handleClick} />)
                }               

            </div>
        </div>
    );

};

export default HeaderData;