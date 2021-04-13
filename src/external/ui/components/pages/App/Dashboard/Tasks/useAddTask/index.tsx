import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { httpClient } from '../../../../../../../services'

import { useCredentials } from '../../../../../../../contexts/CredentialsContext'
import { useLoading } from '../../../../../../../contexts/LoadingContext'
import useForm from '../../../../../../../hooks/useForm'

const CATEGORIES_LIST = [
    { name: 'Frontend', id: '60759a1dc596cfa438f7a8d0' },
    { name: 'Backend', id: '60759a18c596cfa438f7a8cf' },
    { name: 'Design', id: '60759a27c596cfa438f7a8d1' }
]

export const useAddTask = () => {
    const { setLoading } = useLoading()
    const { credentials } = useCredentials()
    const { push } = useRouter()

    const [categories, setCategories] = useState([])

    const handleSelectItem = function (id: string) {
        const alreadySelected = categories.find((item) => item === id)
        if (alreadySelected) {
            setCategories(categories.filter((item) => item !== id))
            return
        }
        setCategories([...categories, id])
    }

    const { data, handleChange } = useForm({ title: '', description: '' })

    const handleCreateTask = async function (e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await httpClient.post(
                '/tasks',
                { ...data, categories, user: credentials.user.id },
                {
                    headers: {
                        Authorization: `Bearer ${credentials.jwt}`
                    }
                }
            )
            console.log('TASK CREATED SUCCESSFULLY', response.data)
            setLoading(false)
            push('/app/dashboard/tasks')
        } catch (e) {
            console.log('ERROR CREATING TASK', e)
            alert('Erro ao criar task')
            setLoading(false)
        }
    }

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        ;(async function handleFetchUserTasks() {
            const response = await httpClient.get(
                `/tasks?user=${credentials.user.id}`
            )
            setTasks(response.data)
        })()
    }, [])

    const handleRemoveTask = async function (taskId: string) {
        setLoading(true)
        try {
            const response = await httpClient.delete(`/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${credentials.jwt}`
                }
            })
            console.log('TASK REMOVED SUCCESSFULLY', response.data)
            setTasks(tasks.filter((task) => task.id !== taskId))
            setLoading(false)
        } catch (e) {
            console.log('ERROR REMOVING TASK', e)
            alert('Erro ao remover task')
            setLoading(false)
        }
    }

    return {
        handleCreateTask,
        handleChange,
        handleSelectItem,
        handleRemoveTask,
        data,
        categories,
        tasks,
        CATEGORIES_LIST
    }
}
