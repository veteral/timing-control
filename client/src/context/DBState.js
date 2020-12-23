import React, {useReducer} from 'react';
import {DBContext} from './DBContext';
import {DBReducer} from './DBReducer';
import { SET_DATA, SET_EXEC } from './type';
import { renderElement } from '../function/function';


export const DBState = ({children}) => {

  //const URL = 'http://localhost:5000/';

  const initialState = {
    //mainData: {},
    control: [],
    employee: [],
    type: [],
    exec: []    
  }
  const [state, dispatch] = useReducer(DBReducer, initialState);
 
  /**************************************************
   * GET запрос 
   */  
  const getData = async () => {
      
    const payload = await request('/api/data'); 

    //console.log('point - getData');
    
    //data.control.sort((a, b) => new Date(a.dateDoc) - new Date(b.dateDoc));            
    //const actionRow = data.control[0];    
    //const payload = {
      // ...data
       //actionRow
   // }
    
    dispatch({type: SET_DATA, payload});
  }

  /**************************************************
   * GET запрос exec.json
   */  
  const getExec = async () => {
      
    const payload = await request('/api/exec'); 

    //console.log('getExec', data);   
    //console.log('getExec', typeof(data));  
        
    dispatch({type: SET_EXEC, payload});
  }

   /**************************************************
    * POST запрос
    * записываем данные в файл после изменений данных -
    * добавления, изменения или удаления    * 
    */  
  const setData = async (data, el, property) => {       
    
    // преобразовали из строки в число selects
    console.log('SetData - start');

    let element;

    console.log('el', el);
    if(property === 'control') {
      element = {
        ...el, employee: Number(el.employee), typeDoc: Number(el.typeDoc)        
      };
    } else {
      element = { ...el };
    }

    console.log('element', element);


    
    // если id = 0, значит это новый объект,
    // находим максимальное значение  id
    if(el.id === 0) {
      console.log('SetData - id = 0');
      const arrId = data[property].map(e => e.id);
      let maxId = Math.max.apply(null, arrId);

      console.log('SetData - Maxid', maxId);

      data[property] = [
        ...data[property],        
        { ...element, id: ++maxId}
      ];

      console.log('SetData - data', data);

     
    // иначе - это редактирование существующего элемента 
    } else {
      const idx = data[property].findIndex(c => c.id === el.id)
      data[property][idx] = element;
      }    
    
      console.log('setData', data);
    const payload = await request('/api/data', 'POST', data);    
     
    dispatch({type: SET_DATA, payload});
  }

  // /**************************************************
  //  * удаляем активную строку по клику кнопки delete 
  //  */
  const deleteElement = async (data, id, property) => {

    console.log('deleteDocument', data);
    //const filteredData = data.control.filter(el => el.id !== id);
    const filteredData = data[property].filter(el => el.id !== id);
    //console.log('filteredData', filteredData);

    const newData = {
      ...data,
      [property]: [...filteredData]
    }

    console.log('newData', newData); 
    const payload = await request('/api/data', 'POST', newData);

    //console.log('postData', postData);
    dispatch({type: SET_DATA, payload});
  }

  /************************************************************
   * Удаляем документ из 'контроля' и добавляем в 'инсполненые'
   * по клику по кнопке 'исполнить'   
   */
  const toExecuteDocument = async (data, row) => {
    //console.log('toExecuteDocument-data', data);
    //console.log('toExecuteDocument-row', row);

    // удаляем из "control" исполненый документ (активную строку)
    const filteredData = data.control.filter(el => el.id !== row.id);
    //console.log('filteredData', filteredData);
    const controlData = {
      ...data,
      control: [...filteredData]
    }

    
    row.employee = renderElement(data, row, 'employee');
    row.type = renderElement(data, row, 'type');


    //console.log('controlData', controlData); 
    //console.log('row', row); 
    const newData = { data: {...controlData}, execRow: {...row} };

    console.log('newData', newData); 
    const payload = await request('/api/exec', 'POST', newData);

    //postData = newData;

    console.log('postData', payload);
    // //console.log('postData', postData.data.type);
    
    dispatch({type: SET_DATA, payload});
  }
  
  /**************************************************
  * функция запроса на сервер  
  */    
  const request = async (url,  method = 'GET', data = null) => {
    try {
      const headers = {};
      let body;
  
      if (data) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(data);
      }

      //console.log('BODY', body);
  
      const response = await fetch(url, {
        method,
        headers,
        body
      })
      return await response.json();
    } catch (e) {
      console.warn('Error of request methods:', e.message);
    }
  }

  return (
    <DBContext.Provider value={{
      data: state,
      deleteElement,
      toExecuteDocument,
      getData, setData, getExec      
    }}>
      { children }
    </DBContext.Provider>
  )
}

export default DBState;
