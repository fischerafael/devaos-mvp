import { useLoading } from '../../../external/contexts/LoadingContext'
import Login from '../../../external/ui/components/pages/App/Login'

const index = () => {
    const { LoadingPage, isLoading } = useLoading()
    if (isLoading) return <LoadingPage />

    return <Login />
}

export default index
