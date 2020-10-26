import { 
    DATA    
  } from "./type";

export const DBReducer = (state, action) => {

console.log('reducer - action type', action.type)
    switch (action.type) {
        case DATA:
            return ({
            ...action.data          
            });

        // case SET_ACTION_ROW:
        //     return ({
        //     ...state,
        //     actionRow: action.tr
        //     })        
        
        default: return state
    }
}
