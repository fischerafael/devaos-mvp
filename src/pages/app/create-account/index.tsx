import { useLoading } from '../../../external/contexts/LoadingContext'

import CreateAccount from '../../../external/ui/components/pages/App/CreateAccount'

const index = () => {
    const { isLoading, LoadingPage } = useLoading()
    if (isLoading) return <LoadingPage />

    return <CreateAccount />
}

export default index
