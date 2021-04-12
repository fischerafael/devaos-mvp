import { useRouter } from 'next/router'

import { useCredentials } from '../../contexts/CredentialsContext'
import { useLoading } from '../../contexts/LoadingContext'

import { httpClient } from '../../services'

import useForm from '../useForm'

export const useAuth = function <T>(defaultData?: T) {
    const routes = useRouter()

    const { data, handleChange } = useForm(defaultData)
    const { setLoading } = useLoading()
    const { setCredentials, credentials } = useCredentials()

    const handleCreateAccount = async function (e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await httpClient.post('/auth/local/register', data)
            setCredentials(response.data)
            routes.push('/app/dashboard')
            console.log('LOGGED IN', response)
            setLoading(false)
        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }
    }

    const handleLogin = async function (e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await httpClient.post('/auth/local', data)
            setCredentials(response.data)
            routes.push('/app/dashboard')
            console.log('ACCOUNT CREATED', response)
            setLoading(false)
        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }
    }

    const handleLogout = function (e: any) {
        e.preventDefault()
        setCredentials({
            jwt: undefined,
            user: { id: '', email: '' }
        })
        routes.push('/')
    }

    return {
        handleCreateAccount,
        handleLogin,
        handleLogout,
        handleChange,
        data,
        credentials
    }
}
