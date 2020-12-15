import React, { useRef } from 'react';
import HeaderData from '../components/HeaderData';
import PageA4 from '../components/PageA4';
import { useLocation } from "react-router-dom";

import ReactToPrint from 'react-to-print';
import { Row } from 'react-bootstrap';


export const Print = (props) => {
    const headingPage = "Контрольная карточка Пинского отдела ДО МВД Республики Беларусь";
    const location = useLocation();

    //console.log(location.pathname); // result: '/secondpage'
    //console.log(location.search); // result: '?query=abc'
    const actionRow = location.state.row; // result: 'some_value'
    const employee = location.state.data.employee;



    //console.log('print - actionRow', actionRow);
    
    return (
      <div className={'print'}>       
        <div className={'print__department text-decoration'}>                
          {/* Контрольная карточка Пинского отдела ДО МВД Республики Беларусь         */}
          КОНТРОЛЬНАЯ КАРТОЧКА
        </div>
        <div className={'print__numberDoc'}>
          <span className={'heading-doc'}>Документ от:</span>
          <span className={'data-doc text-decoration'}>{new Date(actionRow.dateDoc).toLocaleDateString('en-GB')}</span>
          <span className={'heading-doc'}>№</span>
          <span  className={'data-doc text-decoration'}>{actionRow.numberDoc}</span>
        </div>
        <div className={'print__title data-doc'}>{actionRow.title}</div>
        <div className={'print__employee'}>
          <span className={'heading-doc'}>Ответственный исполнитель:</span>
          <span className={'data-doc text-decoration'}>
            {
              actionRow.employee !== 0 
                ? employee.find(f => f.id === actionRow.employee).name
                : ""
            }
          </span>
        </div>
        <div className={'print__executionDate'}>
          <span className={'heading-doc'}>Контрольный срок:</span>
          <span className={'data-doc text-decoration'}>{new Date(actionRow.executionDate).toLocaleDateString('en-GB')}</span>
        </div>
        <div className={'print__text data-doc'}>{actionRow.text}</div>

      </div>
      );
}



export default Print;