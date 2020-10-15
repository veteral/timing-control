import { 
    DATA,
    SET_ACTION_ROW 
  } from "./type";

export const DBReducer = (state, action) => {

console.log('reducer - action type', action.type)
    switch (action.type) {
        case DATA:
            return ({
            ...action.payload          
            });

        case SET_ACTION_ROW:
            return ({
            ...state,
            actionRow: action.tr
            })        
        
        default: return state
    }
}
