import React, { useEffect, useState } from 'react'

import { FlexContainer } from '../../../../../design-system/layout/FlexContainer'
import { DashboardNav } from '../../../../organisms/DashBoardNav'
import { MainButton } from '../../../../../design-system/entry/Button'

import NavBar from '../../../../organisms/NavBar'
import Input from '../../../../../design-system/entry/Input'

import useForm from '../../../../../../hooks/useForm'

import { useCredentials } from '../../../../../../contexts/CredentialsContext'
import { httpClient } from '../../../../../../services'
import { useLoading } from '../../../../../../contexts/LoadingContext'

export const Config = () => {
    const { data, setData, handleChange } = useForm({
        github_user: '',
        name: '',
        city: '',
        country: '',
        bio: ''
    })
    const { setLoading } = useLoading()

    const { credentials } = useCredentials()

    const handleSaveUserConfig = async function (e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await httpClient.put(
                `/users/${credentials.user.id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${credentials.jwt}`
                    }
                }
            )
            console.log('USER DATA UPDATED', response.data)
            setLoading(false)
            setHasChanged(false)
        } catch (e) {
            console.log('ERROR UPDATING USER', e)
            alert('Erro ao atualizar o usuário')
            setLoading(false)
            setHasChanged(false)
        }
    }

    useEffect(() => {
        ;(async function handleFetchUserConfigData() {
            const response = await httpClient.get(
                `/users/${credentials.user.id}`
            )
            setData(response.data)
        })()
    }, [])

    const [hasChanged, setHasChanged] = useState(false)
    const handleEnableSave = function () {
        setHasChanged(true)
    }

    return (
        <>
            <NavBar />
            <DashboardNav />
            <FlexContainer as="main">
                <FlexContainer
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        background: '#FAFAFA',
                        padding: '2rem',
                        margin: '1rem',
                        maxWidth: '350px',
                        minHeight: '60vh'
                    }}
                >
                    <img
                        src="https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar.png"
                        alt={data.github_user}
                        style={{
                            width: '10rem',
                            borderRadius: '5rem',
                            marginBottom: '1rem'
                        }}
                    />

                    <Input
                        label="Github"
                        error="Digite um usuário válido"
                        type="text"
                        id="github_user"
                        value={data.github_user}
                        onChange={handleChange}
                        onBlur={handleEnableSave}
                    />
                    <Input
                        label="Nome"
                        error="Mínimo 3 caracteres"
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={handleChange}
                        onBlur={handleEnableSave}
                    />
                    <br />
                    <Input
                        label="Cidade"
                        error="Mínimo 3 caracteres"
                        type="text"
                        id="city"
                        value={data.city}
                        onChange={handleChange}
                        onBlur={handleEnableSave}
                    />
                    <Input
                        label="País"
                        error="Mínimo 3 caracteres"
                        type="text"
                        id="country"
                        value={data.country}
                        onChange={handleChange}
                        onBlur={handleEnableSave}
                    />
                    <br />
                    <Input
                        label="Mini Bio"
                        error="Mínimo 3 caracteres"
                        type="text"
                        id="bio"
                        value={data.bio}
                        onChange={handleChange}
                        onBlur={handleEnableSave}
                    />

                    <MainButton
                        onClick={handleSaveUserConfig}
                        disabled={hasChanged ? false : true}
                        as="button"
                        style={{ marginTop: '2rem' }}
                    >
                        Salvar
                    </MainButton>
                </FlexContainer>
            </FlexContainer>
        </>
    )
}
