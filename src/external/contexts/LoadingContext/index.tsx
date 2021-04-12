import { createContext, useState } from 'react'

interface Props {
    isLoading: boolean
    setLoading(e: boolean): void
}

export const LoadingContext = createContext({})

export const LoadingProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
