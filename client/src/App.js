import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Control from './page/Control';
import ExecutedDocuments from './page/ExecutedDocuments';
import TypeOfDocument from './page/TypeOfDocument';
import Employee from './page/Employee';
import About from './page/About';
import Print from './page/Print';
import Navbar from './components/Navbar';
import DBState from './context/DBState';

const App = () => {
  return (
    <>
        <DBState>
            <BrowserRouter>
                <Navbar />  
                <div className={'data'}>
                    <Route exact path='/'
                        render={() => <Control />} />
                    <Route path='/all'
                        render={() => <ExecutedDocuments />} />
                    <Route path='/type'
                        render={() => <TypeOfDocument />} />
                    <Route path='/executor'
                        render={() => <Employee />} />
                    <Route path='/about'
                        render={() => <About />} />
                    <Route path='/print'
                        render={() => <Print />} />
                </div>     
            </BrowserRouter>
        </DBState>
        
    </>  
  );
}

export default App; 
