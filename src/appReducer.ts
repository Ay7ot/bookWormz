import { AppActionType, AppContextType } from "./type"


export function appReducer(state: AppContextType, action: AppActionType){
    switch(action.type){
        case 'setBooks':
            return {
                ...state,
                books: action.payload?.booksPayload || []
            }
        case 'setQuery':
            return {
                ...state,
                query: action.payload?.queryPayload || ''
            }
        default :
            return state
    }
}