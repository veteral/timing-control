import React from 'react';
import { Route } from 'react-router-dom';
import s from './SectionData.module.css';
import About from './About/About';
import Control from './Control/Control';
import AllDocuments from './AllDocuments/AllDocuments';
import TypeOfDocument from './TypeOfDocument/TypeOfDocument';
import Executor from './Executor/Executor';
import Print from './common/Print/Print';

const SectionData = () => {

    return (
        <div className={s.data}>
            <Route exact path='/'
                render={() => <Control />} />
            <Route path='/all'
                render={() => <AllDocuments />} />
            <Route path='/type'
                render={() => <TypeOfDocument />} />
            <Route path='/executor'
                render={() => <Executor />} />
            <Route path='/about'
                render={() => <About />} />
            <Route path='/print'
                render={() => <Print />} />
        </div>
    );
};

export default SectionData;