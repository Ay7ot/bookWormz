import { AppActionType, AppContextType } from "./type"


export function appReducer(state: AppContextType, action: AppActionType){
    switch(action.type){
        case 'setBooks':
            return {
                ...state
            }
        default :
            return state
    }
}