import { useLoading } from '../../../../external/contexts/LoadingContext'
import { Config } from '../../../../external/ui/components/pages/App/Dashboard/Config'

const index = () => {
    const { isLoading, LoadingPage } = useLoading()
    if (isLoading) return <LoadingPage />

    return <Config />
}

export default index
