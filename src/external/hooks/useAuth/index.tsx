import { useRouter } from 'next/router'
import { useLoading } from '../../contexts/LoadingContext'
import { httpClient } from '../../services'

import useForm from '../useForm'

const useAuth = function <T>(defaultData: T) {
    const routes = useRouter()

    const { data, handleChange } = useForm(defaultData)
    const { setLoading } = useLoading()

    const handleCreateAccount = async function (e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await httpClient.post('/auth/local/register', data)
            routes.push('/app/dashboard')
            console.log('CREATE ACC RES', response)
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
            routes.push('/app/dashboard')
            console.log('CREATE ACC RES', response)
        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }
    }

    return {
        handleCreateAccount,
        handleLogin,
        handleChange,
        data
    }
}

export default useAuth
