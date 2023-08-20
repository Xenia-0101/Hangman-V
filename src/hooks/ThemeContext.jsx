import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark")

    function updateTheme() {
        setTheme((prevTheme) => {
            return (prevTheme === "dark" ? "light" : "dark")
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            <div className='App' data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
