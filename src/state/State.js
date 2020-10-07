import React, {useReducer} from 'react';
// import axios from 'axios'
import {StateContext} from './stateContext';
import {stateReducer} from './stateReducer';
import { GET_DOCUMENTS, SET_DOCUMENTS } from './type';
// import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'


export const State = ({children}) => {

  const URL = 'http://localhost:5000/';

  const initialState = {
    data: [],
    //loading: false
  }
  const [state, dispatch] = useReducer(stateReducer, initialState);
 
  //получаем json данные из файла
  const getData = async () => {
    //showLoader()    
    const data = await request(URL); 

    console.log('data fetch', data);

    dispatch({type: DATA, data});
  }

  //записываем данные в файл после изменений данных - 
  //добавления, изменения или удаления
  const setData = async (data) => {
    // const response = await fetch(URL);
    // const data = await response
    console.log('data post', data);

    const data = await request(URL, 'POST', data);     

    dispatch({type: DATA, data});
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
      data: state, getDocuments
    }}>
      {children}
    </StateContext.Provider>
  )
}