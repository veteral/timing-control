import React, {useReducer} from 'react';
// import axios from 'axios'
import {StateContext} from './stateContext';
import {stateReducer} from './stateReducer';
// import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'


export const State = ({children}) => {

  const URL = 'http://localhost:5000/';

  const initialState = {
    data: [],
    //loading: false
  }
  const [state, dispatch] = useReducer(stateReducer, initialState);
 
  //получаем json данные из файла
  const getDocuments = async () => {
    //showLoader()    
    const data = await request(URL); 

    console.log('data fetch', data);

    dispatch({type: GET_DOCUMENTS, data});
  }

  //записываем данные в файл после изменений данных - 
  //добавления, изменения или удаления
  const setDocuments = async () => {
    const response = await fetch(URL);
    const data = await response
  }

  //функция запроса на сервер
  const request = (url,  method = 'GET', data = null) => {
    try {
      const headers = {};
      let body;
  
      if (data) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(data);
      }
  
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
    <StateContext.Provider value={{
      
    }}>
      {children}
    </StateContext.Provider>
  )
}