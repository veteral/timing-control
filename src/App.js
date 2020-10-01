import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import SectionHeader from './components/SectionHeader/SectionHeader';
import SectionData from './components/SectionData/SectionData';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SectionHeader />  
        <SectionData />    
      </BrowserRouter>
    </>    
  );
}

export default App;
