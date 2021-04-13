import React from 'react'

function useForm<T>(defaultData: T) {
    const [data, setData] = React.useState(defaultData)

    function handleChange(e: any) {
        setData({ ...data, [e.target.getAttribute('id')]: e.target.value })
    }

    return {
        handleChange,
        setData,
        data
    }
}

export default useForm
