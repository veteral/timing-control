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
    console.log('SetData-ELEMENT', el);
    //debugger
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
    
    
    console.log('SetData-Document', document);
    // const payload = {
    //   ...data,
    //   control: [...data.control, document]
    // }

    console.log('SetData', data);
    const newData = await request('/api/data', 'POST', data);    
     

   // console.log('data post - NEW', payload);
    

    dispatch({type: DATA, data: newData});
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
      getData, setData
    }}>
      { children }
    </DBContext.Provider>
  )
}

export default DBState;