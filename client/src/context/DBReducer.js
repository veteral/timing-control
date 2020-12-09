import { 
    DATA    
  } from "./type";

export const DBReducer = (state, action) => {

    console.log('point - reduser');
    switch (action.type) {
        case DATA:
            console.log('DATA', action.data);
            console.log('DATA', action.data.type);
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
