import { ReactNode, createContext, useContext, useReducer } from "react";
import { AppContextType } from "./type";
import { appReducer } from "./appReducer";


const AppContext = createContext<AppContextType>({
    books: [],
    dispatch : () => {},
    query: ''
})

export const useAuth = () => {
    return useContext(AppContext)
}

export function AppProvider({children}: {children: ReactNode}){
    
    const [mainstate, dispatch] = useReducer(appReducer, useAuth())
    console.log(mainstate)
    return (
        <AppContext.Provider value={{...mainstate, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}