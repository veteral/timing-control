import React, {useReducer} from 'react';
import {DBContext} from './DBContext';
import {DBReducer} from './DBReducer';
import { DATA } from './type';
// import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'


export const DBState = ({children}) => {

  //const URL = 'http://localhost:5000/';

  const initialState = {
    data: {}
    //actionRow: {}
    //loading: false
  }
  const [state, dispatch] = useReducer(DBReducer, initialState);
 
  /**************************************************
   * GET запрос 
   */  
  const getData = async () => {
      
    const data = await request('/api/data'); 
    
    data.control.sort((a, b) => new Date(a.dateDoc) - new Date(b.dateDoc));            
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
    //debugger
    console.log('SetData-ELEMENT', el);
    
    let document;

    if(el.id === 0) {
      const arrId = data.control.map(e => e.id);
      let maxId = Math.max.apply(null, arrId);
      data.control = [
        ...data.control,
        {...el, id: ++maxId }
      ];
    } else {
      const idx = data.control.findIndex(c => c.id === el.id)
      data.control[idx] = el;
      }
    
    
    console.log('SetData-Document', document);
    // const payload = {
    //   ...data,
    //   control: [...data.control, document]
    // }

    console.log('SetData', data);
    //const newData = await request('/api/data', 'POST', payload);     

   // console.log('data post - NEW', payload);
    

    dispatch({type: DATA, data});
  }

  /**************************************************
   * получаем активную строку по клику 
   */
  // const setActionRow = tr => {
  //   dispatch({type: SET_ACTION_ROW, tr});
  // }

  /**************************************************
  * функция запроса на сервер  
  */    
  const request = async (url,  method = 'GET', data = null) => {
    try {
      const headers = {};
      let body;
  
      if (data) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(data, null, 2);
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
      getData, setData
    }}>
      { children }
    </DBContext.Provider>
  )
}

export default DBState;