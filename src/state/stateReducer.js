import { SET_DOCUMENTS } from "./type";

export const stateReducer = (state, action) => {
    switch (action.type) {
      case DATA:
        return ({
          ...data
        });
      
      
      console.log('data reduce', data);
      default: return state
    }
  }
  