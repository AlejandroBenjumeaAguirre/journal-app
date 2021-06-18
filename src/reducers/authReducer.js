import { types } from "../types/types";



export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return { }
        case types.loginSetError:
            return {
                ...state,
                msError: action.payload
            }
        case types.loginRemoveError:
            return { 
                ...state,
                msError: null
            }

        default:
            return state;
    }

}
