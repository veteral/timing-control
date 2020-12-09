import React from 'react';
//import logo from "../logo.jpg";

const PageA4 = () => {
    return (
        <div className="page">
            <div className="subpage">
                <div className="title">Департамент охраны</div>
                <div className="subtitle">МВД Республики Беларусь</div>
                <div className="departament">Пинский отдел охраны</div>
                <div className="logo">
                    {/* <div><img className="logo" src={logo} alt="" /></div> */}
                </div>
                <div className="file">
                    <div className="file__title">Договорное дело</div>
                    
                </div>

                <div className="customer">
                    
                </div>
                <div className="footer">
                    <div className="block">
                        <div className="block__name">Начато&nbsp;</div>
                        <div className="block__line"></div>
                    </div>
                    <div className="block">
                        <div className="block__name">Окончено&nbsp;</div>
                        <div className="block__line"></div>
                    </div>
                    <div className="block">
                        <div className="block__name">Срок хранения&nbsp;</div>
                        <div className="block__line"></div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default PageA4;