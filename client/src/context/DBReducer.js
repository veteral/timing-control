import { 
    SET_DATA, SET_EXEC    
  } from "./type";

export const DBReducer = (state, action) => {

    console.log('point - reduser');
    console.log('DATA', action.data);
    switch (action.type) {
        case SET_DATA:
             console.log('DATA', action.data);
            // console.log('DATA', action.data.type);
            return ({
                ...state,
                control:  [...action.payload.control],
                employee: [...action.payload.employee],
                type: [...action.payload.type]                              
            });

        case SET_EXEC:
            return ({
                ...state,
                exec: [...action.payload.exec]
            })        
        
        default: return state
    }    
}
