import { createContext, useContext, useState } from 'react'
import LoadingPage from '../../ui/components/pages/LoadingPage'

interface Props {
    isLoading: boolean
    setLoading(e: boolean): void
}

const LoadingContext = createContext({} as Props)

export const LoadingProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const { isLoading, setLoading } = useContext(LoadingContext)

    return { isLoading, setLoading, LoadingPage }
}
