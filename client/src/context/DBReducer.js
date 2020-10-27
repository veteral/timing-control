import { 
    DATA    
  } from "./type";

export const DBReducer = (state, action) => {

console.log('reducer - action type', action.type)
    switch (action.type) {
        case DATA:
            console.log('DATA', action.data);
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
