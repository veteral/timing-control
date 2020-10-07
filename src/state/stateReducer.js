import { DATA } from "./type";

export const stateReducer = (state, action) => {
  console.log('state', state)
  console.log('action', action)
    switch (action.type) {
      case DATA:
        return ({
          ...action.data
        });
      
      
      //console.log('data reduce', data);
      default: return state
    }
  }
  