import { useLoading } from '../../../external/contexts/LoadingContext'
import Dashboard from '../../../external/ui/components/pages/App/Dashboard'

const index = () => {
    const { isLoading, LoadingPage } = useLoading()
    if (isLoading) return <LoadingPage />

    return <Dashboard />
}

export default index
