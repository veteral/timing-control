import { DATA } from "./type";

export const stateReducer = (state, action) => {
  //console.log('state', state)
  //console.log('action', action)
  console.log('reducer - action type', action.type)
    switch (action.type) {
      case DATA:
        console.log('Reduce - action', action)

        const newState = {...action.payload}

        console.log('Reduce - action NEW', newState)

        return ({
          ...action.payload          
        });
      
      
      //console.log('data reduce', data);
      default: return state
    }
  }
  