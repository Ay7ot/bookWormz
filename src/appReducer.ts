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
        case 'setNoQuery':
            return {
                ...state,
                query: ''
            }
        case 'setError':
            return {
                ...state,
                error: action.payload?.errorPayload || ''
            }
        case 'setSearchLoadTrue':
            return {
                ...state,
                searchLoad: true
            }
        case 'setSearchLoadFalse':
            return {
                ...state,
                searchLoad: false
            }
        case 'setCurrentBook':
            return {
                ...state,
                currentBook: action.payload?.currentBookPayload || null
            }
        case 'setImageLoaded':
            return {
                ...state,
                isLoaded: true
            }
        case 'setEmail':
            return {
                ...state,
                email: action.payload?.emailPayload ?? ''
            }
        case 'setNoEmail':
            return {
                ...state,
                email: ''
            }
        case 'setNavToggledTrue':
            return {
                ...state,
                navToggled: true
            }
        case 'setNavToggledFalse':
            return {
                ...state,
                navToggled: false
            }
        default :
            return state
    }
}