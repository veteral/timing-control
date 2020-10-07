import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import SectionHeader from './components/SectionHeader/SectionHeader';
import SectionData from './components/SectionData/SectionData';
import State from './state/State';

const App = () => {
  return (
    <>
      <State>
        <BrowserRouter>
          <SectionHeader />  
          <SectionData />    
        </BrowserRouter>
      </State>  
    </>  
  );
}

export default App;
