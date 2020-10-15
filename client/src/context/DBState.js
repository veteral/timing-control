import React, {useReducer} from 'react';
import {DBContext} from './DBContext';
import {DBReducer} from './DBReducer';
import {  DATA,
          SET_ACTION_ROW
        } from './type';
// import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'


export const DBState = ({children}) => {

  //const URL = 'http://localhost:5000/';

  const initialState = {
    data: {},
    actionRow: {}
    //loading: false
  }
  const [state, dispatch] = useReducer(DBReducer, initialState);
 
  /**************************************************
   * получаем json данные из файла 
   */  
  const getData = async () => {
        
    const response = await fetch('/api/data');     
    const data = await response.json();   
    
    const actionRow = data.control[0];
    
    const payload = {
      ...data,
      actionRow
    }
    
    dispatch({type: DATA, payload});
  }

  /**************************************************
   * получаем активную строку по клику 
   */
   const setActionRow = tr => {
     dispatch({type: SET_ACTION_ROW, tr});
   }

   /**************************************************
    * записываем данные в файл после изменений данных -
    * добавления, изменения или удаления
    */  
  const setData = async (data) => {
    // const response = await fetch(URL);
    // const data = await response
    //debugger;
    console.log('data post - OLD', data);

    const datapost = {a: 1}

    const newData = await request(URL, 'POST', datapost);     

    console.log('data post - NEW', newData);
    

    //dispatch({type: DATA, newData});
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

      console.log('BODY', body);
  
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
      getData, setActionRow, setData
    }}>
      { children }
    </DBContext.Provider>
  )
}

export default DBState;