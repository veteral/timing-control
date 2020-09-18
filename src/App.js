import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionHeader from './components/SectionHeader/SectionHeader';
import SectionData from './components/SectionData/SectionData';

const App = () => {
  return (
    <>
      <SectionHeader />  
      <SectionData />    
    </>    
  );
}

export default App;
