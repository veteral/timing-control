import React, {useReducer} from 'react';
// import axios from 'axios'
import {StateContext} from './stateContext';
import {stateReducer} from './stateReducer';
// import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'


export const State = ({children}) => {
  const initialState = {
    data: [],
    //loading: false
  }
  const [state, dispatch] = useReducer(stateReducer, initialState);
 
  const getDocuments = async () => {
    //showLoader()
    const response = await fetch('http://localhost:5000/');
    const data = await response.json(); 

    dispatch({type: GET_DOCUMENTS, data});
  }

  return (
    <StateContext.Provider value={{
      
    }}>
      {children}
    </StateContext.Provider>
  )
}