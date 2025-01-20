import React, {createContext , useState} from "react";

export const Context = createContext()

export function ContextProvider ({children}) {
    const [search , setSearch] = useState('')

    function changeSearchText (text) {
        setSearch(text)
    }

    return (
        <Context.Provider value={{search , changeSearchText}}>
            {children}
        </Context.Provider>
    )
}