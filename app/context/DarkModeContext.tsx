'use client' // 🔑 toujours pour un composant client

import { createContext, useState, ReactNode, useEffect } from 'react'

interface DarkModeContextType {
    darkMode: boolean
    setDarkMode: (value: boolean) => void
}

export const DarkModeContext = createContext<DarkModeContextType>({
    darkMode: true,
    setDarkMode: () => {}, // valeur par défaut vide
})

interface DarkModeProviderProps {
    children: ReactNode
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#111' : '#fff'
    }, [darkMode])
    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
