import { createContext, useContext, useState } from 'react'

interface Props {
    credentials: {
        jwt: string
        user: {
            id: string
            email: string
        }
    }
    setCredentials(e: any): void
}

const CredentialsContext = createContext({} as Props)

export const CredentialsProvider = ({ children }) => {
    const [credentials, setCredentials] = useState({
        jwt: undefined,
        user: { id: '', email: '' }
    })

    return (
        <CredentialsContext.Provider value={{ credentials, setCredentials }}>
            {children}
        </CredentialsContext.Provider>
    )
}

export const useCredentials = () => {
    const { credentials, setCredentials } = useContext(CredentialsContext)

    return { credentials, setCredentials }
}
