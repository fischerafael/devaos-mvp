import React from 'react'
import { useLoading } from '../../../../../external/contexts/LoadingContext'
import { AddTask } from '../../../../../external/ui/components/pages/App/Dashboard/Tasks/AddTask'

const index = () => {
    const { isLoading, LoadingPage } = useLoading()
    if (isLoading) return <LoadingPage />

    return <AddTask />
}

export default index
