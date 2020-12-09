import React, {useReducer} from 'react';
import {DBContext} from './DBContext';
import {DBReducer} from './DBReducer';
import { DATA } from './type';
// import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'


export const DBState = ({children}) => {

  //const URL = 'http://localhost:5000/';

  const initialState = {
    data: {}    
  }
  const [state, dispatch] = useReducer(DBReducer, initialState);
 
  /**************************************************
   * GET запрос 
   */  
  const getData = async () => {
      
    const data = await request('/api/data'); 

    console.log('point - getData');
    
    //data.control.sort((a, b) => new Date(a.dateDoc) - new Date(b.dateDoc));            
    //const actionRow = data.control[0];    
    //const payload = {
      // ...data
       //actionRow
   // }
    
    dispatch({type: DATA, data});
  }
   /**************************************************
    * POST запрос
    * записываем данные в файл после изменений данных -
    * добавления, изменения или удаления    * 
    */  
  const setData = async (data, el) => {       
    
    let document;

    // преобразовали из строки в число selects
    const element = {
      ...el, employee: Number(el.employee), typeDoc: Number(el.typeDoc)
    }

    // если id = 0, значит это новый объект,
    // находим максимальное значение  id
    if(el.id === 0) {
      const arrId = data.control.map(e => e.id);
      let maxId = Math.max.apply(null, arrId);
      data.control = [
        ...data.control,
        {...element, id: ++maxId }
      ];
    // иначе - это редактирование существующего элемента 
    } else {
      const idx = data.control.findIndex(c => c.id === element.id)
      data.control[idx] = element;
      }    
    
    const newData = await request('/api/data', 'POST', data);    
     
    dispatch({type: DATA, data: newData});
  }

  /**************************************************
   * удаляем активную строку по клику кнопки delete 
   */
  const deleteDocument = async (data, id) => {

    //console.log('deleteDocument');
    const filteredData = data.control.filter(el => el.id !== id);
    //console.log('filteredData', filteredData);

    const newData = {
      ...data,
      control: [...filteredData]
    }

    //console.log('newData', newData); 
    const postData = await request('/api/data', 'POST', newData);

    //console.log('postData', postData);
    dispatch({type: DATA, data: postData});
  }

  /************************************************************
   * Удаляем документ из 'контроля' и добавляем в 'инсполненые'
   * по клику по кнопке 'исполнить'   
   */
  const toExecuteDocument = async (data, row) => {
    console.log('toExecuteDocument-data', data);
    console.log('toExecuteDocument-row', row);
    const filteredData = data.control.filter(el => el.id !== row.id);
    //console.log('filteredData', filteredData);

    const controlData = {
      ...data,
      control: [...filteredData]
    }

    console.log('controlData', controlData); 
    const newData = { data: {...controlData}, execRow: {...row} };

    console.log('newData', newData); 
    const postData = await request('/api/exec', 'POST', newData);

    //const postData = newData;

    console.log('postData', postData);
    //console.log('postData', postData.data.type);
    
    dispatch({type: DATA, data: postData});
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
      deleteDocument,
      toExecuteDocument,
      getData, setData, 
    }}>
      { children }
    </DBContext.Provider>
  )
}

export default DBState;