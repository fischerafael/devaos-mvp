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
    const defaultCredentials = {
        jwt: undefined,
        user: { id: '', email: '' }
    }
    const devCredentials = {
        jwt:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzQ5Y2U4MDU1Yzk2OWVmNDI4ZjQ1YSIsImlhdCI6MTYxODI4MjIxOCwiZXhwIjoxNjIwODc0MjE4fQ.JVYoZ85DJoI-I3nLDF11GSDphWAn1N7n9uCBR9UyBAY',
        user: {
            id: '60749ce8055c969ef428f45a',
            email: 'teste@gmail.com'
        }
    }

    const [credentials, setCredentials] = useState(defaultCredentials)

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
