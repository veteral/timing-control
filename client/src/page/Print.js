import React from 'react';
import HeaderData from '../components/HeaderData';
import PageA4 from '../components/PageA4';
import { useLocation } from "react-router-dom";

import ReactToPrint from 'react-to-print';


export const Print = (props) => {
    const headingPage = "Печать документа";
    const location = useLocation();

    //console.log(location.pathname); // result: '/secondpage'
    //console.log(location.search); // result: '?query=abc'
    const actionRow = location.state.row; // result: 'some_value'

    console.log('print - actionRow', actionRow);
    return (
        <table>
          <thead>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      );
}

export default Print;
