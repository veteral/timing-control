import React, {useReducer} from 'react';
// import axios from 'axios'
import {StateContext} from './stateContext';
import {stateReducer} from './stateReducer';
// import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'


export const State = ({children}) => {
  const initialState = {
    //notes: [],
    //loading: false
  }
  const [state, dispatch] = useReducer(stateReducer, initialState);
 
  
  return (
    <StateContext.Provider value={{
      
    }}>
      {children}
    </StateContext.Provider>
  )
}