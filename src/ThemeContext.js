import React, {createContext, useContext, useState} from "react";

const themeContext = createContext();

export const ThemeProvider = ({children}) =>
{
    const [Theme, setTheme] = useState("world");
    return(
        <themeContext.Provider value={Theme}>{children}</themeContext.Provider>
    );
}

export const useTheme = () => useContext(themeContext);